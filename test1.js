webpackJsonp([2], {
    "+2+0": function(e, t, o) {
        "use strict";
        o.d(t, "a", function() {
            return s
        }),
        o.d(t, "b", function() {
            return u
        });
        var n = o("38Js")
          , r = o.n(n)
          , i = o("IwmS")
          , a = {
            100000183: "联系我们：河南中冠同程网络科技有限公司<br/>联系地址：焦作市山阳区人民路与焦东路交汇处林源大厦906室<br/>联系电话：15921805703<br/>官方QQ：2093655232<br/>关于我们：追书神器看小说追网文，8000万书迷亲测有效！"
        }
          , c = {
            100000192: !0
        }
          , s = function() {
            i.a.init()
        }
          , u = function() {
            var e = i.b.get()
              , t = !1;
            if ("addEventListener"in document && document.addEventListener("DOMContentLoaded", function() {
                r.a.attach(document.body)
            }, !1),
            function() {
                var e = i.j("cpsChannelId") || i.j("promoterId")
                  , t = i.j("cpsChannelName") || i.j("channelName");
                e && t && i.e.set({
                    cpsChannelId: e,
                    cpsChannelName: t
                }),
                e && t && !i.f.get() && i.f.set({
                    cpsChannelId: e,
                    cpsChannelName: t
                }),
                e && document.getElementById("J_cpsInfo") && a[e] && (document.getElementById("J_cpsInfo").innerHTML = a[e])
            }(),
            e) {
                var o = document.querySelectorAll("#J_commonPageHeader .avatar");
                o.length && (o[1].innerHTML = '<img src="' + e.user.avatar + '"/>',
                o[0].style.display = "none",
                o[1].style.display = "block")
            }
            if (document.querySelectorAll(".c-top-app-download").length > 0) {
                var n = document.querySelectorAll(".c-top-app-download")[0];
                n.querySelectorAll(".close")[0].addEventListener("click", function() {
                    n.parentNode.removeChild(n)
                })
            }
            document.getElementById("J_searchBottom") && (document.getElementById("J_searchBottom").onclick = function() {
                var e = document.getElementById("J_searchBottomKey").value;
                location.href = e ? "/search?val=" + e : "/search?val=总裁"
            }
            ),
            document.getElementById("J_vipGender") && ("male" == i.j("gender") ? document.getElementById("J_vipGender").innerHTML = "<span>男生</span>" : "female" == i.j("gender") && (document.getElementById("J_vipGender").innerHTML = "<span>女生</span>"),
            document.getElementById("J_vipGender").onclick = function() {
                t = !t,
                t ? ("male" == i.j("gender") ? (document.getElementById("J_vipFemale").className = "",
                document.getElementById("J_vipMale").className = "genderActive") : (document.getElementById("J_vipFemale").className = "genderActive",
                document.getElementById("J_vipMale").className = ""),
                document.getElementsByClassName("vipGender")[0].style.display = "block",
                document.getElementById("J_vipFemale").onclick = function() {
                    location.href = "/monthly?gender=female"
                }
                ,
                document.getElementById("J_vipMale").onclick = function() {
                    location.href = "/monthly?gender=male"
                }
                ) : document.getElementsByClassName("vipGender")[0].style.display = "none"
            }
            ),
            ("true" == i.j("hiddenAdBlock") || c[i.j("cpsChannelId")]) && (document.getElementsByClassName("c-top-app-download")[0] && (document.getElementsByClassName("c-top-app-download")[0].style.display = "none"),
            document.getElementsByClassName("c-bottom-app-download")[0] && (document.getElementsByClassName("c-bottom-app-download")[0].style.display = "none"),
            i.m.set(!0)),
            i.j("hiddenLogo") && (i.n.set("true" === i.j("hiddenLogo")),
            document.getElementsByClassName("logo")[0] && (document.getElementsByClassName("logo")[0].style.display = "true" === i.j("hiddenLogo") ? "none" : "inline-block"))
        }
    },
    "+stQ": function(e, t, o) {
        t.Crypto = o("Cv7i").Crypto,
        ["CryptoMath", "BlockModes", "DES", "AES", "HMAC", "MARC4", "MD5", "PBKDF2", "PBKDF2Async", "Rabbit", "SHA1", "SHA256"].forEach(function(e) {
            o("FFYT")("./" + e)
        })
    },
    0: function(e, t) {},
    39: function(e, t, o) {
        e.exports = o("fG19")
    },
    "6kQO": function(e, t, o) {
        o("MCp7"),
        e.exports = self.fetch.bind(self)
    },
    "6nTU": function(e, t, o) {
        "use strict";
        var n = o("fAMm");
        o("Zt7E").polyfill(),
        o("6kQO");
        var r = {
            getBookDetail: function(e) {
                return fetch(n.a.getBookDetail + e).then(function(e) {
                    return e.json()
                })
            },
            getRecommendByBookId: function(e) {
                return fetch(n.a.getBookDetail + e + "/recommend").then(function(e) {
                    return e.json()
                })
            },
            getRecommendNodeBooks: function(e) {
                return fetch(n.a.getRecommendNodeBooks + e.id, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "ajax=ajax&st=" + e.start + "&size=" + e.limit
                }).then(function(e) {
                    return e.json()
                })
            },
            getWechatChannelQrcode: function(e) {
                return fetch(n.a.getWechatChannelQrcode + e).then(function(e) {
                    return e.json()
                })
            },
            getBookSource: function(e) {
                return fetch(n.a.getBookSource + "?view=summary&book=" + e).then(function(e) {
                    return e.json()
                })
            },
            getBookMixSource: function(e) {
                return fetch(n.a.getBookMixSource + "?view=summary&book=" + e).then(function(e) {
                    return e.json()
                })
            },
            getBookChapterListMweb: function(e) {
                return fetch(n.a.getBookChapterList + e + "?view=chapters&channel=mweb").then(function(e) {
                    return e.json()
                })
            },
            getBookChapterList: function(e) {
                return fetch(n.a.chapterList + e).then(function(e) {
                    return e.json()
                })
            },
            getBookChapterDetailMweb: function(e) {
                return fetch(n.a.getBookChapterDetail + encodeURIComponent(e)).then(function(e) {
                    return e.json()
                })
            },
            getBookChapterDetail: function(e, t) {
                return fetch(n.a.page.chapterDetail + e + "/chapter/" + t).then(function(e) {
                    return e.json()
                })
            },
            getBookChapterBought: function(e, t) {
                return fetch(n.a.getBookChapterBought + t + "/chapters/bought?token=" + e).then(function(e) {
                    return e.json()
                })
            },
            getBookChapterPrice: function(e, t, o, r, i) {
                return fetch(n.a.getBookChapterPrice + "?token=" + e + "&bookId=" + t + "&cp=" + o + "&startSeqId=" + parseInt(r) + "&chapterNum=1&platform=h5").then(function(e) {
                    return e.json()
                })
            },
            singleBuyBookChapter: function(e, t, o) {
                return fetch(n.a.singleBuyBookChapter, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "chapter=" + t + "&token=" + e + "&platform=h5&channelId=" + o
                }).then(function(e) {
                    return e.json()
                })
            },
            batchBuyBookChapter: function(e, t, o, r, i) {
                return fetch(n.a.batchBuyBookChapter, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "isiOS=false&chapterNum=1&token=" + e + "&startSeqId=" + t + "&bookId=" + o + "&cp=" + r + "&platform=h5&channelId=" + i
                }).then(function(e) {
                    return e.json()
                })
            },
            getBookBestComment: function(e) {
                return fetch(n.a.getBookBestComment + "?book=" + e + "&limit=10").then(function(e) {
                    return e.json()
                })
            },
            getBookAllComment: function(e, t) {
                return fetch(n.a.getBookAllComment + "?book=" + e + "&limit=10&start=" + t).then(function(e) {
                    return e.json()
                })
            },
            getCommentDetail: function(e) {
                return fetch(n.a.getCommentDetail + e).then(function(e) {
                    return e.json()
                })
            },
            getReplyDetail: function(e, t) {
                return fetch(n.a.getCommentDetail + e + "/comment/?start=" + t + "&limit=10").then(function(e) {
                    return e.json()
                })
            },
            uploadBookRecord: function(e, t) {
                return fetch(n.a.bookRecord, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "token=" + e + "&records=" + t + "&from=mweb"
                }).then(function(e) {
                    return e.json()
                })
            },
            getCpsBook: function(e, t) {
                return fetch(n.a.cpsbook + "/" + e + "/book?book=" + t).then(function(e) {
                    return e.json()
                })
            },
            getCpsBookRecord: function(e, t, o, r) {
                return fetch(n.a.cpsBookRecord, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "cpsId=" + e + "&book=" + t + "&order=" + o + "&user=" + r
                }).then(function(e) {
                    return e.json()
                })
            },
            getReadRecord: function(e, t) {
                return fetch(n.a.readRecord + "?book=" + e + "&token=" + t + "&time=" + Math.random()).then(function(e) {
                    return e.json()
                })
            },
            getCpsThirdQrCode: function(e) {
                return fetch(n.a.cpsThirdQrCode + e).then(function(e) {
                    return e.json()
                })
            },
            getBaiduCooperationKeys: function(e, t, o) {
                return fetch(n.a.baiduCooperation + "?id=" + e + "&t=" + t + "&sign=" + o).then(function(e) {
                    return e.json()
                })
            }
        };
        t.a = r
    },
    "6orE": function(e, t, o) {
        function n(e, t) {
            this._id = e,
            this._clearFn = t
        }
        var r = Function.prototype.apply;
        t.setTimeout = function() {
            return new n(r.call(setTimeout, window, arguments),clearTimeout)
        }
        ,
        t.setInterval = function() {
            return new n(r.call(setInterval, window, arguments),clearInterval)
        }
        ,
        t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }
        ,
        n.prototype.unref = n.prototype.ref = function() {}
        ,
        n.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }
        ,
        t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = t
        }
        ,
        t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = -1
        }
        ,
        t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }
        ,
        o("qrAv"),
        t.setImmediate = setImmediate,
        t.clearImmediate = clearImmediate
    },
    BP8z: function(e, t, o) {
        (function(e) {
            !function() {
                var t = "undefined" == typeof window ? o("Cv7i").Crypto : window.Crypto
                  , n = t.util
                  , r = t.charenc
                  , i = r.UTF8
                  , a = r.Binary;
                t.nextTick || (void 0 !== e && void 0 !== e.nextTick ? t.nextTick = e.nextTick : "undefined" != typeof setTimeout && (t.nextTick = function(e) {
                    setTimeout(e, 0)
                }
                )),
                t.PBKDF2Async = function(e, o, r, c, s) {
                    function u(e) {
                        if (g) {
                            var t = v.length / p._digestsize * f + e;
                            setTimeout(function() {
                                g(Math.round(t / m * 100))
                            }, 0)
                        }
                    }
                    function l(e, o) {
                        return t.HMAC(p, o, e, {
                            asBytes: !0
                        })
                    }
                    e.constructor == String && (e = i.stringToBytes(e)),
                    o.constructor == String && (o = i.stringToBytes(o));
                    var h, d, p = s && s.hasher || t.SHA1, f = s && s.iterations || 1, g = s && s.onProgressChange, m = Math.ceil(r / p._digestsize) * f, y = t.nextTick, v = [], b = 1;
                    y(h = function() {
                        if (v.length < r) {
                            var t = l(e, o.concat(n.wordsToBytes([b])));
                            u(1);
                            var i = t
                              , p = 1;
                            y(d = function() {
                                if (p < f) {
                                    i = l(e, i);
                                    for (var o = 0; o < t.length; o++)
                                        t[o] ^= i[o];
                                    p++,
                                    u(p),
                                    y(d)
                                } else
                                    v = v.concat(t),
                                    b++,
                                    y(h)
                            }
                            )
                        } else
                            v.length = r,
                            c(s && s.asBytes ? v : s && s.asString ? a.bytesToString(v) : n.bytesToHex(v))
                    }
                    )
                }
            }()
        }
        ).call(t, o("pBGv"))
    },
    Cv7i: function(e, t) {
        "undefined" != typeof Crypto && Crypto.util || function() {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , o = "undefined" == typeof window ? t.Crypto = {} : window.Crypto = {}
              , n = o.util = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t
                },
                endian: function(e) {
                    if (e.constructor == Number)
                        return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++)
                        e[t] = n.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--)
                        t.push(Math.floor(256 * Math.random()));
                    return t
                },
                bytesToWords: function(e) {
                    for (var t = [], o = 0, n = 0; o < e.length; o++,
                    n += 8)
                        t[n >>> 5] |= (255 & e[o]) << 24 - n % 32;
                    return t
                },
                wordsToBytes: function(e) {
                    for (var t = [], o = 0; o < 32 * e.length; o += 8)
                        t.push(e[o >>> 5] >>> 24 - o % 32 & 255);
                    return t
                },
                bytesToHex: function(e) {
                    for (var t = [], o = 0; o < e.length; o++)
                        t.push((e[o] >>> 4).toString(16)),
                        t.push((15 & e[o]).toString(16));
                    return t.join("")
                },
                hexToBytes: function(e) {
                    for (var t = [], o = 0; o < e.length; o += 2)
                        t.push(parseInt(e.substr(o, 2), 16));
                    return t
                },
                bytesToBase64: function(t) {
                    if ("function" == typeof btoa)
                        return btoa(i.bytesToString(t));
                    for (var o = [], n = 0; n < t.length; n += 3)
                        for (var r = t[n] << 16 | t[n + 1] << 8 | t[n + 2], a = 0; a < 4; a++)
                            8 * n + 6 * a <= 8 * t.length ? o.push(e.charAt(r >>> 6 * (3 - a) & 63)) : o.push("=");
                    return o.join("")
                },
                base64ToBytes: function(t) {
                    if ("function" == typeof atob)
                        return i.stringToBytes(atob(t));
                    t = t.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var o = [], n = 0, r = 0; n < t.length; r = ++n % 4)
                        0 != r && o.push((e.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | e.indexOf(t.charAt(n)) >>> 6 - 2 * r);
                    return o
                }
            }
              , r = o.charenc = {}
              , i = (r.UTF8 = {
                stringToBytes: function(e) {
                    return i.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(i.bytesToString(e)))
                }
            },
            r.Binary = {
                stringToBytes: function(e) {
                    for (var t = [], o = 0; o < e.length; o++)
                        t.push(255 & e.charCodeAt(o));
                    return t
                },
                bytesToString: function(e) {
                    for (var t = [], o = 0; o < e.length; o++)
                        t.push(String.fromCharCode(e[o]));
                    return t.join("")
                }
            })
        }()
    },
    F5wP: function(e, t, o) {
        !function() {
            var e = "undefined" == typeof window ? o("Cv7i").Crypto : window.Crypto
              , t = e.util
              , n = e.charenc
              , r = n.UTF8
              , i = n.Binary;
            e.HMAC = function(e, o, n, a) {
                o.constructor == String && (o = r.stringToBytes(o)),
                n.constructor == String && (n = r.stringToBytes(n)),
                n.length > 4 * e._blocksize && (n = e(n, {
                    asBytes: !0
                }));
                for (var c = n.slice(0), s = n.slice(0), u = 0; u < 4 * e._blocksize; u++)
                    c[u] ^= 92,
                    s[u] ^= 54;
                var l = e(c.concat(e(s.concat(o), {
                    asBytes: !0
                })), {
                    asBytes: !0
                });
                return a && a.asBytes ? l : a && a.asString ? i.bytesToString(l) : t.bytesToHex(l)
            }
        }()
    },
    FCOK: function(e, t, o) {
        /*!
 * Crypto-JS contribution from Simon Greatrix
 */
        !function() {
            function e(e, t) {
                var o = 4 * e._blocksize;
                return o - t.length % o
            }
            var t = "undefined" == typeof window ? o("Cv7i").Crypto : window.Crypto
              , n = t.pad = {}
              , r = function(e) {
                for (var t = e.pop(), o = 1; o < t; o++)
                    e.pop()
            };
            n.NoPadding = {
                pad: function(e, t) {},
                unpad: function(e) {}
            },
            n.ZeroPadding = {
                pad: function(e, t) {
                    var o = 4 * e._blocksize
                      , n = t.length % o;
                    if (0 != n)
                        for (n = o - n; n > 0; n--)
                            t.push(0)
                },
                unpad: function(e) {}
            },
            n.iso7816 = {
                pad: function(t, o) {
                    var n = e(t, o);
                    for (o.push(128); n > 1; n--)
                        o.push(0)
                },
                unpad: function(e) {
                    for (; 128 != e.pop(); )
                        ;
                }
            },
            n.ansix923 = {
                pad: function(t, o) {
                    for (var n = e(t, o), r = 1; r < n; r++)
                        o.push(0);
                    o.push(n)
                },
                unpad: r
            },
            n.iso10126 = {
                pad: function(t, o) {
                    for (var n = e(t, o), r = 1; r < n; r++)
                        o.push(Math.floor(256 * Math.random()));
                    o.push(n)
                },
                unpad: r
            },
            n.pkcs7 = {
                pad: function(t, o) {
                    for (var n = e(t, o), r = 0; r < n; r++)
                        o.push(n)
                },
                unpad: r
            };
            var i = t.mode = {}
              , a = i.Mode = function(e) {
                e && (this._padding = e)
            }
            ;
            a.prototype = {
                encrypt: function(e, t, o) {
                    this._padding.pad(e, t),
                    this._doEncrypt(e, t, o)
                },
                decrypt: function(e, t, o) {
                    this._doDecrypt(e, t, o),
                    this._padding.unpad(t)
                },
                _padding: n.iso7816
            };
            var c = i.ECB = function() {
                a.apply(this, arguments)
            }
              , s = c.prototype = new a;
            s._doEncrypt = function(e, t, o) {
                for (var n = 4 * e._blocksize, r = 0; r < t.length; r += n)
                    e._encryptblock(t, r)
            }
            ,
            s._doDecrypt = function(e, t, o) {
                for (var n = 4 * e._blocksize, r = 0; r < t.length; r += n)
                    e._decryptblock(t, r)
            }
            ,
            s.fixOptions = function(e) {
                e.iv = []
            }
            ;
            var u = i.CBC = function() {
                a.apply(this, arguments)
            }
              , l = u.prototype = new a;
            l._doEncrypt = function(e, t, o) {
                for (var n = 4 * e._blocksize, r = 0; r < t.length; r += n) {
                    if (0 == r)
                        for (var i = 0; i < n; i++)
                            t[i] ^= o[i];
                    else
                        for (var i = 0; i < n; i++)
                            t[r + i] ^= t[r + i - n];
                    e._encryptblock(t, r)
                }
            }
            ,
            l._doDecrypt = function(e, t, o) {
                for (var n = 4 * e._blocksize, r = o, i = 0; i < t.length; i += n) {
                    var a = t.slice(i, i + n);
                    e._decryptblock(t, i);
                    for (var c = 0; c < n; c++)
                        t[i + c] ^= r[c];
                    r = a
                }
            }
            ;
            var h = i.CFB = function() {
                a.apply(this, arguments)
            }
              , d = h.prototype = new a;
            d._padding = n.NoPadding,
            d._doEncrypt = function(e, t, o) {
                for (var n = 4 * e._blocksize, r = o.slice(0), i = 0; i < t.length; i++) {
                    var a = i % n;
                    0 == a && e._encryptblock(r, 0),
                    t[i] ^= r[a],
                    r[a] = t[i]
                }
            }
            ,
            d._doDecrypt = function(e, t, o) {
                for (var n = 4 * e._blocksize, r = o.slice(0), i = 0; i < t.length; i++) {
                    var a = i % n;
                    0 == a && e._encryptblock(r, 0);
                    var c = t[i];
                    t[i] ^= r[a],
                    r[a] = c
                }
            }
            ;
            var p = i.OFB = function() {
                a.apply(this, arguments)
            }
              , f = p.prototype = new a;
            f._padding = n.NoPadding,
            f._doEncrypt = function(e, t, o) {
                for (var n = 4 * e._blocksize, r = o.slice(0), i = 0; i < t.length; i++)
                    i % n == 0 && e._encryptblock(r, 0),
                    t[i] ^= r[i % n]
            }
            ,
            f._doDecrypt = f._doEncrypt;
            var g = i.CTR = function() {
                a.apply(this, arguments)
            }
              , m = g.prototype = new a;
            m._padding = n.NoPadding,
            m._doEncrypt = function(e, t, o) {
                for (var n = 4 * e._blocksize, r = o.slice(0), i = 0; i < t.length; ) {
                    var a = r.slice(0);
                    e._encryptblock(a, 0);
                    for (var c = 0; i < t.length && c < n; c++,
                    i++)
                        t[i] ^= a[c];
                    256 == ++r[n - 1] && (r[n - 1] = 0,
                    256 == ++r[n - 2] && (r[n - 2] = 0,
                    256 == ++r[n - 3] && (r[n - 3] = 0,
                    ++r[n - 4])))
                }
            }
            ,
            m._doDecrypt = m._doEncrypt
        }()
    },
    FFYT: function(e, t, o) {
        function n(e) {
            return o(r(e))
        }
        function r(e) {
            var t = i[e];
            if (!(t + 1))
                throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        var i = {
            "./AES": "vY1U",
            "./AES.js": "vY1U",
            "./BlockModes": "FCOK",
            "./BlockModes.js": "FCOK",
            "./Crypto": "Cv7i",
            "./Crypto.js": "Cv7i",
            "./CryptoMath": "SqlD",
            "./CryptoMath.js": "SqlD",
            "./DES": "OK9w",
            "./DES.js": "OK9w",
            "./HMAC": "F5wP",
            "./HMAC.js": "F5wP",
            "./MARC4": "imdR",
            "./MARC4.js": "imdR",
            "./MD5": "QotN",
            "./MD5.js": "QotN",
            "./PBKDF2": "UsrQ",
            "./PBKDF2.js": "UsrQ",
            "./PBKDF2Async": "BP8z",
            "./PBKDF2Async.js": "BP8z",
            "./Rabbit": "YGSe",
            "./Rabbit.js": "YGSe",
            "./SHA1": "Z6so",
            "./SHA1.js": "Z6so",
            "./SHA256": "cGZm",
            "./SHA256.js": "cGZm"
        };
        n.keys = function() {
            return Object.keys(i)
        }
        ,
        n.resolve = r,
        e.exports = n,
        n.id = "FFYT"
    },
    IwmS: function(e, t, o) {
        "use strict";
        function n(e, t) {
            t || (t = location.href),
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var o = "[\\?&]" + e + "=([^&#]*)"
              , n = new RegExp(o)
              , r = n.exec(t);
            return null == r ? null : r[1]
        }
        function r(e, t) {
            t || (t = location.href),
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var o = "[\\?&]" + e + "=([^&#]*)"
              , n = new RegExp(o)
              , r = n.exec(t);
            return null == r ? null : r[1]
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e) {
            var t = (new Date).getTime()
              , o = t - e;
            if (!(o < 0)) {
                var n = o / 31104e6
                  , r = o / 2592e6
                  , i = o / 6048e5
                  , a = o / 864e5
                  , c = o / 36e5
                  , s = o / 6e4;
                return n >= 1 ? parseInt(n) + "年前" : r >= 1 ? parseInt(r) + "月前" : i >= 1 ? parseInt(i) + "周前" : a >= 1 ? parseInt(a) + "天前" : c >= 1 ? parseInt(c) + "小时前" : s >= 1 ? parseInt(s) + "分钟前" : "刚刚"
            }
        }
          , a = function(e) {
            var t = e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds()
              , o = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
              , n = e.getHours() < 10 ? "0" + e.getHours() : e.getHours()
              , r = e.getDate() < 10 ? "0" + e.getDate() : e.getDate()
              , i = e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1
              , a = e.getFullYear();
            return (new Date).getTime(),
            a + "-" + i + "-" + r + " " + n + ":" + o + ":" + t
        }
          , c = function(e) {
            var t = (e.getSeconds(),
            e.getSeconds(),
            e.getMinutes(),
            e.getMinutes(),
            e.getHours(),
            e.getHours(),
            e.getDate() < 10 ? "0" + e.getDate() : e.getDate())
              , o = e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1
              , n = e.getFullYear();
            return (new Date).getTime(),
            n + "-" + o + "-" + t
        }
          , s = function(e) {
            var t = (e.getSeconds(),
            e.getSeconds(),
            e.getMinutes(),
            e.getMinutes(),
            e.getHours(),
            e.getHours(),
            e.getDate() < 10 ? "0" + e.getDate() : e.getDate())
              , o = e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1
              , n = e.getFullYear();
            return (new Date).getTime(),
            n + "年" + o + "月" + t + "日"
        }
          , u = function(e) {
            var t, o, n, r, i = "";
            return (r = e / 1e3 - parseInt((new Date).getTime() / 1e3)) < 0 ? -1 : (n = parseInt(r / 86400),
            o = parseInt(r / 3600) - 24 * n,
            t = parseInt(r / 60) - 24 * n * 60 - 60 * o,
            n > 0 && (i += n + "天"),
            o > 0 && (i += o + "时"),
            t > 0 && (i += t + "分"),
            i + (r - 24 * n * 60 * 60 - 60 * o * 60 - 60 * t) + "秒")
        }
          , l = function(e) {
            var t = [];
            e = new Date(e).getTime();
            for (var o = 0; o < 7; o++)
                t.push(c(new Date(e))),
                e -= 864e5;
            return t
        }
          , h = {
            version: function() {
                var e = navigator.userAgent;
                return {
                    android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
                    ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    wechat: e.indexOf("MicroMessenger") > -1
                }
            }()
        }
          , d = {
            ios: "https://itunes.apple.com/app/apple-store/id575826903",
            android: "http://zhui.oss-cn-hangzhou.aliyuncs.com/zssq-Mzhan.apk",
            wechat: "http://www.zhuishushenqi.com/auto/index.html?android=http://zhui.oss-cn-hangzhou.aliyuncs.com/zssq-Mzhan.apk&ios=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fapple-store%2Fid575826903%3Fpt%3D85926800%26ct%3Dhuodong1%26mt%3D8&default=http%3A%2F%2Fwww.zhuishushenqi.com"
        }
          , p = function() {
            return h.version.wechat ? d.wechat : h.version.ios ? d.ios : h.version.android ? d.android : d.wechat
        }
          , f = function(e, t) {
            t || (t = location.href),
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var o = "[\\?&]" + e + "=([^&#]*)"
              , n = new RegExp(o)
              , r = n.exec(t);
            return null == r ? null : r[1]
        }
          , g = function() {
            return !("ios" === f("platform") || "android" === f("platform"))
        }
          , m = function() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
          , y = function() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        }
          , v = function() {
            return "micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
        }
          , b = function(e) {
            var t = {
                title: "无需下载，不占内存，点击即享海量小说！",
                desc: "一亿人都在用，我也在用「追书神器」看小说，你还等什么？",
                link: "http://api.zhuishushenqi.com/wechats/event/home",
                imgUrl: "http://statics.zhuishushenqi.com/icon.png?imageView2/1/w/80/h/80/q/100"
            }
              , o = {
                title: e && e.title ? e.title : t.title,
                desc: e && e.desc ? e.desc : t.desc,
                link: e && e.link ? e.link : t.link,
                imgUrl: e && e.imgUrl ? e.imgUrl : t.imgUrl
            };
            wx.onMenuShareTimeline({
                title: o.title,
                link: o.link,
                imgUrl: o.imgUrl,
                success: function() {},
                cancel: function() {}
            }),
            wx.onMenuShareAppMessage({
                title: o.title,
                desc: o.desc,
                link: o.link,
                imgUrl: o.imgUrl,
                type: "link",
                dataUrl: "",
                success: function() {},
                cancel: function() {}
            })
        }
          , k = function(e) {
            var t = document.body;
            if (e !== document.title) {
                var o = function e() {
                    setTimeout(function() {
                        n.removeEventListener("load", e),
                        t.removeChild(n)
                    }, 1e3)
                };
                document.title = e;
                var n = function(e) {
                    var t = document.createElement("div");
                    t.style.display = "none",
                    t.innerHTML = '<iframe src="/favicon.ico" style="display:none"></iframe>';
                    for (var o = t.childNodes, n = 0; n < o.length; n++)
                        if (1 === o[n].nodeType)
                            return o[n]
                }();
                n.addEventListener("load", o),
                t.appendChild(n)
            }
        }
          , C = function(e) {}
          , w = function(e, t) {
            var o = null
              , n = new Promise(function(e, t) {
                o = function() {
                    t("服务器超时")
                }
            }
            )
              , r = Promise.race([e, n]);
            return setTimeout(function() {
                o()
            }, t),
            r
        }
          , B = function() {
            return !(!f("platform") || "ios" !== f("platform") && "android" !== f("platform")) && f("version")
        }
          , _ = o("PhdE")
          , I = o.n(_)
          , T = {
            set: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , t = new Date(Date.now() + 27e5);
                I.a.set("hasCloseTopAppDownloadGuide", e, {
                    expires: t
                })
            },
            get: function() {
                return I.a.get("hasCloseTopAppDownloadGuide")
            }
        }
          , S = {
            set: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , t = new Date(Date.now() + 27e5);
                I.a.set("hasCloseBottomAppDownloadGuide", e, {
                    expires: t
                })
            },
            get: function() {
                return I.a.get("hasCloseBottomAppDownloadGuide")
            }
        }
          , A = {
            guide: {
                set: function() {
                    I.a.set("has_show_reader_guide", !0)
                },
                get: function() {
                    return I.a.get("has_show_reader_guide")
                }
            },
            chapter: {
                set: function(e, t) {
                    I.a.set("reader_chapter_" + e, t, {
                        expires: 365
                    })
                },
                get: function(e) {
                    return I.a.get("reader_chapter_" + e)
                }
            },
            controll: {
                set: function(e) {
                    var t = I.a.getJSON("reader_controll_behavior") || {};
                    t = Object.assign(t, e),
                    I.a.set("reader_controll_behavior", t, {
                        expires: 365
                    })
                },
                get: function() {
                    return I.a.getJSON("reader_controll_behavior")
                }
            }
        }
          , x = {
            filter: {
                set: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        sort: "collectorCount",
                        duration: "last-seven-days",
                        tag: ""
                    };
                    I.a.set("booklist_history", JSON.stringify(e))
                },
                get: function() {
                    return JSON.parse(I.a.get("booklist_history"))
                }
            }
        }
          , D = {
            set: function(e) {
                var t = new Date(Date.now() + 6048e5);
                I.a.set("_account", e, {
                    expires: t
                })
            },
            get: function() {
                var e = navigator.userAgent.toLowerCase()
                  , t = !!/mb2345browser/.test(e)
                  , o = {}
                  , r = new Date(Date.now() + 6048e5);
                return t && (o = JSON.parse(window.NovelCallback2345.getUserInfo()),
                "2345" == n("channelName") && (o.ok ? (o.user.avatar = "http://statics.zhuishushenqi.com/" + o.user.avatar,
                o = JSON.stringify(o),
                I.a.set("_account", o, {
                    expires: r
                })) : I.a.remove("_account"))),
                I.a.get("_account") ? JSON.parse(I.a.get("_account")) : null
            },
            remove: function() {
                I.a.remove("_account")
            }
        }
          , P = {
            set: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , t = new Date(Date.now() + 864e5);
                I.a.set("_leadCache", e, {
                    expires: t
                })
            },
            get: function() {
                return I.a.get("_leadCache")
            }
        }
          , R = {
            set: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                localStorage.setItem("purchased_" + e, t)
            },
            get: function(e) {
                return localStorage.getItem("purchased_" + e)
            },
            remove: function() {
                localStorage.removeItem("purchased_" + bookId)
            }
        }
          , E = {
            set: function(e) {
                var t = new Date(Date.now() + 36e5);
                I.a.set("_payCache", e, {
                    expires: t
                })
            },
            get: function() {
                return I.a.get("_payCache")
            },
            remove: function() {
                return I.a.remove("_payCache")
            }
        }
          , L = {
            set: function(e) {
                var t = new Date(Date.now() + 6e4);
                I.a.set("_publicPayCache", e, {
                    expires: t
                })
            },
            get: function() {
                return I.a.get("_publicPayCache")
            },
            remove: function() {
                return I.a.remove("_publicPayCache")
            }
        }
          , j = {
            set: function(e) {
                var t = new Date(Date.now() + 6e4);
                I.a.set("_publicPayChannelCache", e, {
                    expires: t
                })
            },
            get: function() {
                return I.a.get("_publicPayChannelCache")
            },
            remove: function() {
                return I.a.remove("_publicPayChannelCache")
            }
        }
          , F = {
            set: function(e) {
                var t = new Date(Date.now() + 6e4);
                I.a.set("_publicPayProductTypeCache", e, {
                    expires: t
                })
            },
            get: function() {
                return I.a.get("_publicPayProductTypeCache")
            },
            remove: function() {
                return I.a.remove("_publicPayProductTypeCache")
            }
        }
          , M = {
            set: function(e) {
                localStorage.setItem("_sourceCache", e)
            },
            get: function() {
                return localStorage.getItem("_sourceCache")
            },
            remove: function() {
                return localStorage.removeItem("_sourceCache")
            }
        }
          , O = {
            set: function(e) {
                localStorage.setItem("_loginPageShowWechatCache", e)
            },
            get: function() {
                return localStorage.getItem("_loginPageShowWechatCache")
            },
            remove: function() {
                return localStorage.removeItem("_loginPageShowWechatCache")
            }
        }
          , U = {
            set: function(e) {
                var t = new Date(Date.now() + 6e4);
                I.a.set("_paySourceCache", e, {
                    expires: t
                })
            },
            get: function() {
                return I.a.get("_paySourceCache")
            },
            remove: function() {
                return I.a.remove("_paySourceCache")
            }
        }
          , N = {
            set: function(e) {
                localStorage.setItem("wechatOpenId", e)
            },
            get: function() {
                return localStorage.getItem("wechatOpenId")
            },
            remove: function() {
                localStorage.removeItem("wechatOpenId")
            }
        }
          , J = {
            set: function(e) {
                localStorage.setItem("wechatConfig", JSON.stringify(e))
            },
            get: function() {
                return JSON.parse(localStorage.getItem("wechatConfig"))
            }
        }
          , z = {
            set: function(e) {
                I.a.set("cpsChannelCache", e)
            },
            get: function() {
                return I.a.get("cpsChannelCache") ? JSON.parse(I.a.get("cpsChannelCache")) : null
            },
            remove: function() {
                return I.a.remove("cpsChannelCache")
            }
        }
          , H = {
            set: function(e) {
                var t = new Date(Date.now() + 864e5);
                I.a.set("cpsChannelForSingleBuyCache", e, {
                    expires: t
                })
            },
            get: function() {
                return I.a.get("cpsChannelForSingleBuyCache") ? JSON.parse(I.a.get("cpsChannelForSingleBuyCache")) : null
            },
            remove: function() {
                return I.a.remove("cpsChannelForSingleBuyCache")
            }
        }
          , q = {
            set: function(e) {
                I.a.set("hiddenAdBlock", e)
            }
        }
          , Q = {
            set: function(e) {
                I.a.set("hiddenLogo", e)
            },
            get: function() {
                return I.a.get("hiddenLogo") ? JSON.parse(I.a.get("hiddenLogo")) : null
            }
        }
          , K = {
            set: function(e) {
                localStorage.setItem("mybooks", JSON.stringify(e))
            },
            get: function() {
                return localStorage.getItem("mybooks") ? JSON.parse(localStorage.getItem("mybooks")) : null
            },
            remove: function() {
                return localStorage.removeItem("mybooks")
            }
        }
          , G = {
            set: function(e) {
                localStorage.setItem("paySignInWebBuyCache", !0)
            },
            get: function() {
                return localStorage.getItem("paySignInWebBuyCache")
            },
            remove: function() {
                localStorage.removeItem("paySignInWebBuyCache")
            }
        }
          , W = {
            set: function(e) {
                var t = new Date(Date.now() + 6048e5);
                I.a.set("tianyiUserCache", e, {
                    expires: t
                })
            },
            get: function() {
                return I.a.get("tianyiUserCache") ? JSON.parse(I.a.get("tianyiUserCache")) : null
            },
            remove: function() {
                return I.a.remove("tianyiUserCache")
            }
        }
          , Y = {
            set: function(e) {
                sessionStorage.setItem("tianyiParamCache", JSON.stringify(e))
            },
            get: function() {
                return sessionStorage.getItem("tianyiParamCache") ? JSON.parse(sessionStorage.getItem("tianyiParamCache")) : ""
            },
            remove: function() {
                return sessionStorage.removeItem("tianyiParamCache")
            }
        }
          , V = {
            set: function(e) {
                localStorage.setItem("toPayCache", !0)
            },
            get: function() {
                return localStorage.getItem("toPayCache")
            },
            remove: function() {
                localStorage.removeItem("toPayCache")
            }
        }
          , X = {
            set: function(e) {
                localStorage.setItem("localRecord", JSON.stringify(e))
            },
            get: function() {
                return localStorage.getItem("localRecord") ? JSON.parse(localStorage.getItem("localRecord")) : null
            },
            remove: function() {
                return localStorage.removeItem("localRecord")
            }
        }
          , Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , $ = {
            _bridgePostMsg: function(e) {
                if (console.log(decodeURIComponent(e)),
                r("platform") && "ios" === r("platform"))
                    window.location = e;
                else {
                    var t = document.createElement("IFRAME");
                    t.setAttribute("src", e),
                    t.setAttribute("height", "1px"),
                    t.setAttribute("width", "1px"),
                    document.documentElement.appendChild(t),
                    setTimeout(function() {
                        t.parentNode.removeChild(t),
                        t = null
                    }, 10)
                }
            },
            _getHybridUrl: function(e) {
                var t = ""
                  , o = "jsbridge://";
                return o += e.action + "?t=" + (new Date).getTime(),
                e.callback && (o += "&callback=window.HybridCallBack." + e.callback,
                delete e.callback),
                e.param && (t = "object" == Z(e.param) ? JSON.stringify(e.param) : e.param,
                o += "&param=" + encodeURIComponent(t)),
                o
            },
            request: function(e) {
                var t, o = this, n = (new Date).getTime(), r = "hybrid" + n;
                e.callback && (t = e.callback,
                e.callback = r,
                window.HybridCallBack[r] = function(e) {
                    t(e),
                    delete window.HybridCallBack[r]
                }
                ),
                o._bridgePostMsg(o._getHybridUrl(e))
            },
            setUserBehavior: function(e) {
                $.request({
                    action: "userBehavior",
                    param: JSON.stringify({
                        code: e
                    })
                })
            },
            getUserInfo: function(e) {
                $.request({
                    action: "getUserInfo",
                    callback: function(t) {
                        e && e(t)
                    }
                })
            },
            share: function(e) {
                $.request({
                    action: "share",
                    param: JSON.stringify(e)
                })
            },
            setBurialPoint: function(e) {
                $.request({
                    action: "setBurialPoint",
                    param: JSON.stringify(e)
                })
            },
            setBounces: function(e) {
                this.request({
                    action: "setBounces",
                    param: JSON.stringify({
                        enabled: e
                    })
                })
            },
            init: function() {
                window.HybridApi = $,
                window.HybridCallBack = window.HybridCallBack || {}
            }
        };
        o.d(t, "h", function() {
            return i
        }),
        o.d(t, "g", function() {
            return a
        }),
        o.d(t, !1, function() {
            return c
        }),
        o.d(t, "i", function() {
            return s
        }),
        o.d(t, !1, function() {
            return u
        }),
        o.d(t, "k", function() {
            return l
        }),
        o.d(t, !1, function() {
            return h
        }),
        o.d(t, !1, function() {
            return d
        }),
        o.d(t, !1, function() {
            return p
        }),
        o.d(t, "j", function() {
            return f
        }),
        o.d(t, "p", function() {
            return g
        }),
        o.d(t, "l", function() {
            return m
        }),
        o.d(t, !1, function() {
            return y
        }),
        o.d(t, "q", function() {
            return v
        }),
        o.d(t, "o", function() {
            return b
        }),
        o.d(t, "C", function() {
            return k
        }),
        o.d(t, !1, function() {
            return C
        }),
        o.d(t, !1, function() {
            return w
        }),
        o.d(t, !1, function() {
            return B
        }),
        o.d(t, !1, function() {
            return T
        }),
        o.d(t, !1, function() {
            return S
        }),
        o.d(t, "A", function() {
            return A
        }),
        o.d(t, "d", function() {
            return x
        }),
        o.d(t, "b", function() {
            return D
        }),
        o.d(t, "r", function() {
            return P
        }),
        o.d(t, "c", function() {
            return R
        }),
        o.d(t, "u", function() {
            return E
        }),
        o.d(t, "x", function() {
            return L
        }),
        o.d(t, "y", function() {
            return j
        }),
        o.d(t, "z", function() {
            return F
        }),
        o.d(t, "D", function() {
            return M
        }),
        o.d(t, "t", function() {
            return O
        }),
        o.d(t, "w", function() {
            return U
        }),
        o.d(t, "H", function() {
            return N
        }),
        o.d(t, !1, function() {
            return J
        }),
        o.d(t, "e", function() {
            return z
        }),
        o.d(t, "f", function() {
            return H
        }),
        o.d(t, "m", function() {
            return q
        }),
        o.d(t, "n", function() {
            return Q
        }),
        o.d(t, "s", function() {
            return K
        }),
        o.d(t, "v", function() {
            return G
        }),
        o.d(t, "F", function() {
            return W
        }),
        o.d(t, "E", function() {
            return Y
        }),
        o.d(t, "G", function() {
            return V
        }),
        o.d(t, "B", function() {
            return X
        }),
        o.d(t, "a", function() {
            return $
        })
    },
    MCp7: function(e, t) {
        !function(e) {
            "use strict";
            function t(e) {
                if ("string" != typeof e && (e = String(e)),
                /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))
                    throw new TypeError("Invalid character in header field name");
                return e.toLowerCase()
            }
            function o(e) {
                return "string" != typeof e && (e = String(e)),
                e
            }
            function n(e) {
                var t = {
                    next: function() {
                        var t = e.shift();
                        return {
                            done: void 0 === t,
                            value: t
                        }
                    }
                };
                return y.iterable && (t[Symbol.iterator] = function() {
                    return t
                }
                ),
                t
            }
            function r(e) {
                this.map = {},
                e instanceof r ? e.forEach(function(e, t) {
                    this.append(t, e)
                }, this) : Array.isArray(e) ? e.forEach(function(e) {
                    this.append(e[0], e[1])
                }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                    this.append(t, e[t])
                }, this)
            }
            function i(e) {
                if (e.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                e.bodyUsed = !0
            }
            function a(e) {
                return new Promise(function(t, o) {
                    e.onload = function() {
                        t(e.result)
                    }
                    ,
                    e.onerror = function() {
                        o(e.error)
                    }
                }
                )
            }
            function c(e) {
                var t = new FileReader
                  , o = a(t);
                return t.readAsArrayBuffer(e),
                o
            }
            function s(e) {
                var t = new FileReader
                  , o = a(t);
                return t.readAsText(e),
                o
            }
            function u(e) {
                for (var t = new Uint8Array(e), o = new Array(t.length), n = 0; n < t.length; n++)
                    o[n] = String.fromCharCode(t[n]);
                return o.join("")
            }
            function l(e) {
                if (e.slice)
                    return e.slice(0);
                var t = new Uint8Array(e.byteLength);
                return t.set(new Uint8Array(e)),
                t.buffer
            }
            function h() {
                return this.bodyUsed = !1,
                this._initBody = function(e) {
                    if (this._bodyInit = e,
                    e)
                        if ("string" == typeof e)
                            this._bodyText = e;
                        else if (y.blob && Blob.prototype.isPrototypeOf(e))
                            this._bodyBlob = e;
                        else if (y.formData && FormData.prototype.isPrototypeOf(e))
                            this._bodyFormData = e;
                        else if (y.searchParams && URLSearchParams.prototype.isPrototypeOf(e))
                            this._bodyText = e.toString();
                        else if (y.arrayBuffer && y.blob && b(e))
                            this._bodyArrayBuffer = l(e.buffer),
                            this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        else {
                            if (!y.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !k(e))
                                throw new Error("unsupported BodyInit type");
                            this._bodyArrayBuffer = l(e)
                        }
                    else
                        this._bodyText = "";
                    this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : y.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                y.blob && (this.blob = function() {
                    var e = i(this);
                    if (e)
                        return e;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ,
                this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(c)
                }
                ),
                this.text = function() {
                    var e = i(this);
                    if (e)
                        return e;
                    if (this._bodyBlob)
                        return s(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(u(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                y.formData && (this.formData = function() {
                    return this.text().then(f)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            function d(e) {
                var t = e.toUpperCase();
                return C.indexOf(t) > -1 ? t : e
            }
            function p(e, t) {
                t = t || {};
                var o = t.body;
                if (e instanceof p) {
                    if (e.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = e.url,
                    this.credentials = e.credentials,
                    t.headers || (this.headers = new r(e.headers)),
                    this.method = e.method,
                    this.mode = e.mode,
                    o || null == e._bodyInit || (o = e._bodyInit,
                    e.bodyUsed = !0)
                } else
                    this.url = String(e);
                if (this.credentials = t.credentials || this.credentials || "omit",
                !t.headers && this.headers || (this.headers = new r(t.headers)),
                this.method = d(t.method || this.method || "GET"),
                this.mode = t.mode || this.mode || null,
                this.referrer = null,
                ("GET" === this.method || "HEAD" === this.method) && o)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(o)
            }
            function f(e) {
                var t = new FormData;
                return e.trim().split("&").forEach(function(e) {
                    if (e) {
                        var o = e.split("=")
                          , n = o.shift().replace(/\+/g, " ")
                          , r = o.join("=").replace(/\+/g, " ");
                        t.append(decodeURIComponent(n), decodeURIComponent(r))
                    }
                }),
                t
            }
            function g(e) {
                var t = new r;
                return e.split(/\r?\n/).forEach(function(e) {
                    var o = e.split(":")
                      , n = o.shift().trim();
                    if (n) {
                        var r = o.join(":").trim();
                        t.append(n, r)
                    }
                }),
                t
            }
            function m(e, t) {
                t || (t = {}),
                this.type = "default",
                this.status = "status"in t ? t.status : 200,
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = "statusText"in t ? t.statusText : "OK",
                this.headers = new r(t.headers),
                this.url = t.url || "",
                this._initBody(e)
            }
            if (!e.fetch) {
                var y = {
                    searchParams: "URLSearchParams"in e,
                    iterable: "Symbol"in e && "iterator"in Symbol,
                    blob: "FileReader"in e && "Blob"in e && function() {
                        try {
                            return new Blob,
                            !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData"in e,
                    arrayBuffer: "ArrayBuffer"in e
                };
                if (y.arrayBuffer)
                    var v = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                      , b = function(e) {
                        return e && DataView.prototype.isPrototypeOf(e)
                    }
                      , k = ArrayBuffer.isView || function(e) {
                        return e && v.indexOf(Object.prototype.toString.call(e)) > -1
                    }
                    ;
                r.prototype.append = function(e, n) {
                    e = t(e),
                    n = o(n);
                    var r = this.map[e];
                    this.map[e] = r ? r + "," + n : n
                }
                ,
                r.prototype.delete = function(e) {
                    delete this.map[t(e)]
                }
                ,
                r.prototype.get = function(e) {
                    return e = t(e),
                    this.has(e) ? this.map[e] : null
                }
                ,
                r.prototype.has = function(e) {
                    return this.map.hasOwnProperty(t(e))
                }
                ,
                r.prototype.set = function(e, n) {
                    this.map[t(e)] = o(n)
                }
                ,
                r.prototype.forEach = function(e, t) {
                    for (var o in this.map)
                        this.map.hasOwnProperty(o) && e.call(t, this.map[o], o, this)
                }
                ,
                r.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, o) {
                        e.push(o)
                    }),
                    n(e)
                }
                ,
                r.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }),
                    n(e)
                }
                ,
                r.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, o) {
                        e.push([o, t])
                    }),
                    n(e)
                }
                ,
                y.iterable && (r.prototype[Symbol.iterator] = r.prototype.entries);
                var C = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                p.prototype.clone = function() {
                    return new p(this,{
                        body: this._bodyInit
                    })
                }
                ,
                h.call(p.prototype),
                h.call(m.prototype),
                m.prototype.clone = function() {
                    return new m(this._bodyInit,{
                        status: this.status,
                        statusText: this.statusText,
                        headers: new r(this.headers),
                        url: this.url
                    })
                }
                ,
                m.error = function() {
                    var e = new m(null,{
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error",
                    e
                }
                ;
                var w = [301, 302, 303, 307, 308];
                m.redirect = function(e, t) {
                    if (-1 === w.indexOf(t))
                        throw new RangeError("Invalid status code");
                    return new m(null,{
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }
                ,
                e.Headers = r,
                e.Request = p,
                e.Response = m,
                e.fetch = function(e, t) {
                    return new Promise(function(o, n) {
                        var r = new p(e,t)
                          , i = new XMLHttpRequest;
                        i.onload = function() {
                            var e = {
                                status: i.status,
                                statusText: i.statusText,
                                headers: g(i.getAllResponseHeaders() || "")
                            };
                            e.url = "responseURL"in i ? i.responseURL : e.headers.get("X-Request-URL");
                            var t = "response"in i ? i.response : i.responseText;
                            o(new m(t,e))
                        }
                        ,
                        i.onerror = function() {
                            n(new TypeError("Network request failed"))
                        }
                        ,
                        i.ontimeout = function() {
                            n(new TypeError("Network request failed"))
                        }
                        ,
                        i.open(r.method, r.url, !0),
                        "include" === r.credentials && (i.withCredentials = !0),
                        "responseType"in i && y.blob && (i.responseType = "blob"),
                        r.headers.forEach(function(e, t) {
                            i.setRequestHeader(t, e)
                        }),
                        i.send(void 0 === r._bodyInit ? null : r._bodyInit)
                    }
                    )
                }
                ,
                e.fetch.polyfill = !0
            }
        }("undefined" != typeof self ? self : this)
    },
    OK9w: function(e, t, o) {
        !function() {
            var e, t = "undefined" == typeof window ? o("Cv7i").Crypto : window.Crypto, n = t.util, r = t.charenc, i = r.UTF8;
            e = function(e) {
                this.keys = new Array(16),
                this._initialiseKeys(e)
            }
            ,
            e.PC1_offsets = [7, 6, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 7, 6, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 3, 2, 1, 0],
            e.PC1_masks = [128, 128, 128, 128, 128, 128, 128, 128, 64, 64, 64, 64, 64, 64, 64, 64, 32, 32, 32, 32, 32, 32, 32, 32, 16, 16, 16, 16, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8, 8, 8, 16, 16, 16, 16],
            e.PC2_offsets1 = [0, 3, 1, 2, 0, 1, 3, 2, 0, 1, 0, 2, 3, 0, 1, 3, 0, 0, 2, 3, 1, 0, 2, 0, 0, 2, 3, 1],
            e.PC2_offsets2 = [7, 5, 4, 7, 5, 6, 0, 7, 4, 0, 6, 5, 4, 7, 0, 6, 5, 7, 4, 5, 6, 7, 5, 4, 6, 0, 4, 6],
            e.PC2_masks1 = [2, 1, 32, 4, 1, 4, 16, 1, 0, 1, 8, 8, 2, 32, 8, 32, 16, 0, 16, 4, 2, 0, 32, 4, 0, 2, 8, 16],
            e.PC2_masks2 = [2, 32, 8, 1, 2, 2, 0, 4, 4, 0, 8, 16, 32, 16, 0, 32, 4, 32, 2, 1, 16, 8, 8, 16, 1, 0, 1, 4],
            e.keyShifts = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
            e.prototype._initialiseKeys = function(t) {
                var o, n = new Array(56);
                for (o = 0; o < 56; o++)
                    n[o] = 0 != (t[e.PC1_offsets[o]] & e.PC1_masks[o]);
                var r = n.slice(0, 28)
                  , i = n.slice(28, 56);
                for (r = r.concat(r),
                i = i.concat(i),
                o = 0; o < 16; o++) {
                    for (var a = [0, 0, 0, 0, 0, 0, 0, 0], c = e.keyShifts[o], s = 0; s < 28; s++)
                        r[s + c] && (a[e.PC2_offsets1[s]] += e.PC2_masks1[s]),
                        i[s + c] && (a[e.PC2_offsets2[s]] += e.PC2_masks2[s]);
                    a[0] = ((31 & a[0]) << 27) + ((32 & a[0]) >> 5);
                    for (var s = 1; s <= 6; s++)
                        a[s] = a[s] << 27 - 4 * s;
                    a[7] = ((62 & a[7]) >> 1) + ((1 & a[7]) << 31),
                    this.keys[o] = a
                }
            }
            ,
            e.prototype.getKey = function(e) {
                return this.keys[e]
            }
            ;
            var a;
            a = function() {
                this.lhs = 0,
                this.rhs = 0
            }
            ,
            a.SBOX_MASK = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
            a.SBOX = new Array(8);
            var c = a.SBOX;
            c[0] = new Array,
            c[0][0] = 8421888,
            c[0][268435456] = 32768,
            c[0][536870912] = 8421378,
            c[0][805306368] = 2,
            c[0][1073741824] = 512,
            c[0][1342177280] = 8421890,
            c[0][1610612736] = 8389122,
            c[0][1879048192] = 8388608,
            c[0][-2147483648] = 514,
            c[0][-1879048192] = 8389120,
            c[0][-1610612736] = 33280,
            c[0][-1342177280] = 8421376,
            c[0][-1073741824] = 32770,
            c[0][-805306368] = 8388610,
            c[0][-536870912] = 0,
            c[0][-268435456] = 33282,
            c[0][134217728] = 0,
            c[0][402653184] = 8421890,
            c[0][671088640] = 33282,
            c[0][939524096] = 32768,
            c[0][1207959552] = 8421888,
            c[0][1476395008] = 512,
            c[0][1744830464] = 8421378,
            c[0][2013265920] = 2,
            c[0][-2013265920] = 8389120,
            c[0][-1744830464] = 33280,
            c[0][-1476395008] = 8421376,
            c[0][-1207959552] = 8389122,
            c[0][-939524096] = 8388610,
            c[0][-671088640] = 32770,
            c[0][-402653184] = 514,
            c[0][-134217728] = 8388608,
            c[0][1] = 32768,
            c[0][268435457] = 2,
            c[0][536870913] = 8421888,
            c[0][805306369] = 8388608,
            c[0][1073741825] = 8421378,
            c[0][1342177281] = 33280,
            c[0][1610612737] = 512,
            c[0][1879048193] = 8389122,
            c[0][-2147483647] = 8421890,
            c[0][-1879048191] = 8421376,
            c[0][-1610612735] = 8388610,
            c[0][-1342177279] = 33282,
            c[0][-1073741823] = 514,
            c[0][-805306367] = 8389120,
            c[0][-536870911] = 32770,
            c[0][-268435455] = 0,
            c[0][134217729] = 8421890,
            c[0][402653185] = 8421376,
            c[0][671088641] = 8388608,
            c[0][939524097] = 512,
            c[0][1207959553] = 32768,
            c[0][1476395009] = 8388610,
            c[0][1744830465] = 2,
            c[0][2013265921] = 33282,
            c[0][-2013265919] = 32770,
            c[0][-1744830463] = 8389122,
            c[0][-1476395007] = 514,
            c[0][-1207959551] = 8421888,
            c[0][-939524095] = 8389120,
            c[0][-671088639] = 0,
            c[0][-402653183] = 33280,
            c[0][-134217727] = 8421378,
            c[1] = new Array,
            c[1][0] = 1074282512,
            c[1][16777216] = 16384,
            c[1][33554432] = 524288,
            c[1][50331648] = 1074266128,
            c[1][67108864] = 1073741840,
            c[1][83886080] = 1074282496,
            c[1][100663296] = 1073758208,
            c[1][117440512] = 16,
            c[1][134217728] = 540672,
            c[1][150994944] = 1073758224,
            c[1][167772160] = 1073741824,
            c[1][184549376] = 540688,
            c[1][201326592] = 524304,
            c[1][218103808] = 0,
            c[1][234881024] = 16400,
            c[1][251658240] = 1074266112,
            c[1][8388608] = 1073758208,
            c[1][25165824] = 540688,
            c[1][41943040] = 16,
            c[1][58720256] = 1073758224,
            c[1][75497472] = 1074282512,
            c[1][92274688] = 1073741824,
            c[1][109051904] = 524288,
            c[1][125829120] = 1074266128,
            c[1][142606336] = 524304,
            c[1][159383552] = 0,
            c[1][176160768] = 16384,
            c[1][192937984] = 1074266112,
            c[1][209715200] = 1073741840,
            c[1][226492416] = 540672,
            c[1][243269632] = 1074282496,
            c[1][260046848] = 16400,
            c[1][268435456] = 0,
            c[1][285212672] = 1074266128,
            c[1][301989888] = 1073758224,
            c[1][318767104] = 1074282496,
            c[1][335544320] = 1074266112,
            c[1][352321536] = 16,
            c[1][369098752] = 540688,
            c[1][385875968] = 16384,
            c[1][402653184] = 16400,
            c[1][419430400] = 524288,
            c[1][436207616] = 524304,
            c[1][452984832] = 1073741840,
            c[1][469762048] = 540672,
            c[1][486539264] = 1073758208,
            c[1][503316480] = 1073741824,
            c[1][520093696] = 1074282512,
            c[1][276824064] = 540688,
            c[1][293601280] = 524288,
            c[1][310378496] = 1074266112,
            c[1][327155712] = 16384,
            c[1][343932928] = 1073758208,
            c[1][360710144] = 1074282512,
            c[1][377487360] = 16,
            c[1][394264576] = 1073741824,
            c[1][411041792] = 1074282496,
            c[1][427819008] = 1073741840,
            c[1][444596224] = 1073758224,
            c[1][461373440] = 524304,
            c[1][478150656] = 0,
            c[1][494927872] = 16400,
            c[1][511705088] = 1074266128,
            c[1][528482304] = 540672,
            c[2] = new Array,
            c[2][0] = 260,
            c[2][1048576] = 0,
            c[2][2097152] = 67109120,
            c[2][3145728] = 65796,
            c[2][4194304] = 65540,
            c[2][5242880] = 67108868,
            c[2][6291456] = 67174660,
            c[2][7340032] = 67174400,
            c[2][8388608] = 67108864,
            c[2][9437184] = 67174656,
            c[2][10485760] = 65792,
            c[2][11534336] = 67174404,
            c[2][12582912] = 67109124,
            c[2][13631488] = 65536,
            c[2][14680064] = 4,
            c[2][15728640] = 256,
            c[2][524288] = 67174656,
            c[2][1572864] = 67174404,
            c[2][2621440] = 0,
            c[2][3670016] = 67109120,
            c[2][4718592] = 67108868,
            c[2][5767168] = 65536,
            c[2][6815744] = 65540,
            c[2][7864320] = 260,
            c[2][8912896] = 4,
            c[2][9961472] = 256,
            c[2][11010048] = 67174400,
            c[2][12058624] = 65796,
            c[2][13107200] = 65792,
            c[2][14155776] = 67109124,
            c[2][15204352] = 67174660,
            c[2][16252928] = 67108864,
            c[2][16777216] = 67174656,
            c[2][17825792] = 65540,
            c[2][18874368] = 65536,
            c[2][19922944] = 67109120,
            c[2][20971520] = 256,
            c[2][22020096] = 67174660,
            c[2][23068672] = 67108868,
            c[2][24117248] = 0,
            c[2][25165824] = 67109124,
            c[2][26214400] = 67108864,
            c[2][27262976] = 4,
            c[2][28311552] = 65792,
            c[2][29360128] = 67174400,
            c[2][30408704] = 260,
            c[2][31457280] = 65796,
            c[2][32505856] = 67174404,
            c[2][17301504] = 67108864,
            c[2][18350080] = 260,
            c[2][19398656] = 67174656,
            c[2][20447232] = 0,
            c[2][21495808] = 65540,
            c[2][22544384] = 67109120,
            c[2][23592960] = 256,
            c[2][24641536] = 67174404,
            c[2][25690112] = 65536,
            c[2][26738688] = 67174660,
            c[2][27787264] = 65796,
            c[2][28835840] = 67108868,
            c[2][29884416] = 67109124,
            c[2][30932992] = 67174400,
            c[2][31981568] = 4,
            c[2][33030144] = 65792,
            c[3] = new Array,
            c[3][0] = 2151682048,
            c[3][65536] = 2147487808,
            c[3][131072] = 4198464,
            c[3][196608] = 2151677952;
            c[3][262144] = 0,
            c[3][327680] = 4198400,
            c[3][393216] = 2147483712,
            c[3][458752] = 4194368,
            c[3][524288] = 2147483648,
            c[3][589824] = 4194304,
            c[3][655360] = 64,
            c[3][720896] = 2147487744,
            c[3][786432] = 2151678016,
            c[3][851968] = 4160,
            c[3][917504] = 4096,
            c[3][983040] = 2151682112,
            c[3][32768] = 2147487808,
            c[3][98304] = 64,
            c[3][163840] = 2151678016,
            c[3][229376] = 2147487744,
            c[3][294912] = 4198400,
            c[3][360448] = 2151682112,
            c[3][425984] = 0,
            c[3][491520] = 2151677952,
            c[3][557056] = 4096,
            c[3][622592] = 2151682048,
            c[3][688128] = 4194304,
            c[3][753664] = 4160,
            c[3][819200] = 2147483648,
            c[3][884736] = 4194368,
            c[3][950272] = 4198464,
            c[3][1015808] = 2147483712,
            c[3][1048576] = 4194368,
            c[3][1114112] = 4198400,
            c[3][1179648] = 2147483712,
            c[3][1245184] = 0,
            c[3][1310720] = 4160,
            c[3][1376256] = 2151678016,
            c[3][1441792] = 2151682048,
            c[3][1507328] = 2147487808,
            c[3][1572864] = 2151682112,
            c[3][1638400] = 2147483648,
            c[3][1703936] = 2151677952,
            c[3][1769472] = 4198464,
            c[3][1835008] = 2147487744,
            c[3][1900544] = 4194304,
            c[3][1966080] = 64,
            c[3][2031616] = 4096,
            c[3][1081344] = 2151677952,
            c[3][1146880] = 2151682112,
            c[3][1212416] = 0,
            c[3][1277952] = 4198400,
            c[3][1343488] = 4194368,
            c[3][1409024] = 2147483648,
            c[3][1474560] = 2147487808,
            c[3][1540096] = 64,
            c[3][1605632] = 2147483712,
            c[3][1671168] = 4096,
            c[3][1736704] = 2147487744,
            c[3][1802240] = 2151678016,
            c[3][1867776] = 4160,
            c[3][1933312] = 2151682048,
            c[3][1998848] = 4194304,
            c[3][2064384] = 4198464,
            c[4] = new Array,
            c[4][0] = 128,
            c[4][4096] = 17039360,
            c[4][8192] = 262144,
            c[4][12288] = 536870912,
            c[4][16384] = 537133184,
            c[4][20480] = 16777344,
            c[4][24576] = 553648256,
            c[4][28672] = 262272,
            c[4][32768] = 16777216,
            c[4][36864] = 537133056,
            c[4][40960] = 536871040,
            c[4][45056] = 553910400,
            c[4][49152] = 553910272,
            c[4][53248] = 0,
            c[4][57344] = 17039488,
            c[4][61440] = 553648128,
            c[4][2048] = 17039488,
            c[4][6144] = 553648256,
            c[4][10240] = 128,
            c[4][14336] = 17039360,
            c[4][18432] = 262144,
            c[4][22528] = 537133184,
            c[4][26624] = 553910272,
            c[4][30720] = 536870912,
            c[4][34816] = 537133056,
            c[4][38912] = 0,
            c[4][43008] = 553910400,
            c[4][47104] = 16777344,
            c[4][51200] = 536871040,
            c[4][55296] = 553648128,
            c[4][59392] = 16777216,
            c[4][63488] = 262272,
            c[4][65536] = 262144,
            c[4][69632] = 128,
            c[4][73728] = 536870912,
            c[4][77824] = 553648256,
            c[4][81920] = 16777344,
            c[4][86016] = 553910272,
            c[4][90112] = 537133184,
            c[4][94208] = 16777216,
            c[4][98304] = 553910400,
            c[4][102400] = 553648128,
            c[4][106496] = 17039360,
            c[4][110592] = 537133056,
            c[4][114688] = 262272,
            c[4][118784] = 536871040,
            c[4][122880] = 0,
            c[4][126976] = 17039488,
            c[4][67584] = 553648256,
            c[4][71680] = 16777216,
            c[4][75776] = 17039360,
            c[4][79872] = 537133184,
            c[4][83968] = 536870912,
            c[4][88064] = 17039488,
            c[4][92160] = 128,
            c[4][96256] = 553910272,
            c[4][100352] = 262272,
            c[4][104448] = 553910400,
            c[4][108544] = 0,
            c[4][112640] = 553648128,
            c[4][116736] = 16777344,
            c[4][120832] = 262144,
            c[4][124928] = 537133056,
            c[4][129024] = 536871040,
            c[5] = new Array,
            c[5][0] = 268435464,
            c[5][256] = 8192,
            c[5][512] = 270532608,
            c[5][768] = 270540808,
            c[5][1024] = 268443648,
            c[5][1280] = 2097152,
            c[5][1536] = 2097160,
            c[5][1792] = 268435456,
            c[5][2048] = 0,
            c[5][2304] = 268443656,
            c[5][2560] = 2105344,
            c[5][2816] = 8,
            c[5][3072] = 270532616,
            c[5][3328] = 2105352,
            c[5][3584] = 8200,
            c[5][3840] = 270540800,
            c[5][128] = 270532608,
            c[5][384] = 270540808,
            c[5][640] = 8,
            c[5][896] = 2097152,
            c[5][1152] = 2105352,
            c[5][1408] = 268435464,
            c[5][1664] = 268443648,
            c[5][1920] = 8200,
            c[5][2176] = 2097160,
            c[5][2432] = 8192,
            c[5][2688] = 268443656,
            c[5][2944] = 270532616,
            c[5][3200] = 0,
            c[5][3456] = 270540800,
            c[5][3712] = 2105344,
            c[5][3968] = 268435456,
            c[5][4096] = 268443648,
            c[5][4352] = 270532616,
            c[5][4608] = 270540808,
            c[5][4864] = 8200,
            c[5][5120] = 2097152,
            c[5][5376] = 268435456,
            c[5][5632] = 268435464,
            c[5][5888] = 2105344,
            c[5][6144] = 2105352,
            c[5][6400] = 0,
            c[5][6656] = 8,
            c[5][6912] = 270532608,
            c[5][7168] = 8192,
            c[5][7424] = 268443656,
            c[5][7680] = 270540800,
            c[5][7936] = 2097160,
            c[5][4224] = 8,
            c[5][4480] = 2105344,
            c[5][4736] = 2097152,
            c[5][4992] = 268435464,
            c[5][5248] = 268443648,
            c[5][5504] = 8200,
            c[5][5760] = 270540808,
            c[5][6016] = 270532608,
            c[5][6272] = 270540800,
            c[5][6528] = 270532616,
            c[5][6784] = 8192,
            c[5][7040] = 2105352,
            c[5][7296] = 2097160,
            c[5][7552] = 0,
            c[5][7808] = 268435456,
            c[5][8064] = 268443656,
            c[6] = new Array,
            c[6][0] = 1048576,
            c[6][16] = 33555457,
            c[6][32] = 1024,
            c[6][48] = 1049601,
            c[6][64] = 34604033,
            c[6][80] = 0,
            c[6][96] = 1,
            c[6][112] = 34603009,
            c[6][128] = 33555456;
            c[6][144] = 1048577,
            c[6][160] = 33554433,
            c[6][176] = 34604032,
            c[6][192] = 34603008,
            c[6][208] = 1025,
            c[6][224] = 1049600,
            c[6][240] = 33554432,
            c[6][8] = 34603009,
            c[6][24] = 0,
            c[6][40] = 33555457,
            c[6][56] = 34604032,
            c[6][72] = 1048576,
            c[6][88] = 33554433,
            c[6][104] = 33554432,
            c[6][120] = 1025,
            c[6][136] = 1049601,
            c[6][152] = 33555456,
            c[6][168] = 34603008,
            c[6][184] = 1048577,
            c[6][200] = 1024,
            c[6][216] = 34604033,
            c[6][232] = 1,
            c[6][248] = 1049600,
            c[6][256] = 33554432,
            c[6][272] = 1048576,
            c[6][288] = 33555457,
            c[6][304] = 34603009,
            c[6][320] = 1048577,
            c[6][336] = 33555456,
            c[6][352] = 34604032,
            c[6][368] = 1049601,
            c[6][384] = 1025,
            c[6][400] = 34604033,
            c[6][416] = 1049600,
            c[6][432] = 1,
            c[6][448] = 0,
            c[6][464] = 34603008,
            c[6][480] = 33554433,
            c[6][496] = 1024,
            c[6][264] = 1049600,
            c[6][280] = 33555457,
            c[6][296] = 34603009,
            c[6][312] = 1,
            c[6][328] = 33554432,
            c[6][344] = 1048576,
            c[6][360] = 1025,
            c[6][376] = 34604032,
            c[6][392] = 33554433,
            c[6][408] = 34603008,
            c[6][424] = 0,
            c[6][440] = 34604033,
            c[6][456] = 1049601,
            c[6][472] = 1024,
            c[6][488] = 33555456,
            c[6][504] = 1048577,
            c[7] = new Array,
            c[7][0] = 134219808,
            c[7][1] = 131072,
            c[7][2] = 134217728,
            c[7][3] = 32,
            c[7][4] = 131104,
            c[7][5] = 134350880,
            c[7][6] = 134350848,
            c[7][7] = 2048,
            c[7][8] = 134348800,
            c[7][9] = 134219776,
            c[7][10] = 133120,
            c[7][11] = 134348832,
            c[7][12] = 2080,
            c[7][13] = 0,
            c[7][14] = 134217760,
            c[7][15] = 133152,
            c[7][-2147483648] = 2048,
            c[7][-2147483647] = 134350880,
            c[7][-2147483646] = 134219808,
            c[7][-2147483645] = 134217728,
            c[7][-2147483644] = 134348800,
            c[7][-2147483643] = 133120,
            c[7][-2147483642] = 133152,
            c[7][-2147483641] = 32,
            c[7][-2147483640] = 134217760,
            c[7][-2147483639] = 2080,
            c[7][-2147483638] = 131104,
            c[7][-2147483637] = 134350848,
            c[7][-2147483636] = 0,
            c[7][-2147483635] = 134348832,
            c[7][-2147483634] = 134219776,
            c[7][-2147483633] = 131072,
            c[7][16] = 133152,
            c[7][17] = 134350848,
            c[7][18] = 32,
            c[7][19] = 2048,
            c[7][20] = 134219776,
            c[7][21] = 134217760,
            c[7][22] = 134348832,
            c[7][23] = 131072,
            c[7][24] = 0,
            c[7][25] = 131104,
            c[7][26] = 134348800,
            c[7][27] = 134219808,
            c[7][28] = 134350880,
            c[7][29] = 133120,
            c[7][30] = 2080,
            c[7][31] = 134217728,
            c[7][-2147483632] = 131072,
            c[7][-2147483631] = 2048,
            c[7][-2147483630] = 134348832,
            c[7][-2147483629] = 133152,
            c[7][-2147483628] = 32,
            c[7][-2147483627] = 134348800,
            c[7][-2147483626] = 134217728,
            c[7][-2147483625] = 134219808,
            c[7][-2147483624] = 134350880,
            c[7][-2147483623] = 134217760,
            c[7][-2147483622] = 134219776,
            c[7][-2147483621] = 0,
            c[7][-2147483620] = 133120,
            c[7][-2147483619] = 2080,
            c[7][-2147483618] = 131104,
            c[7][-2147483617] = 134350848,
            a.prototype._exchangeLR = function(e, t) {
                var o = (this.lhs >> e ^ this.rhs) & t;
                this.rhs ^= o,
                this.lhs ^= o << e
            }
            ,
            a.prototype._exchangeRL = function(e, t) {
                var o = (this.rhs >> e ^ this.lhs) & t;
                this.lhs ^= o,
                this.rhs ^= o << e
            }
            ,
            a.prototype.initialPerm = function(e, t) {
                var o = e.slice(t, t + 8);
                this.lhs = (o[0] << 24) + (o[1] << 16) + (o[2] << 8) + o[3],
                this.rhs = (o[4] << 24) + (o[5] << 16) + (o[6] << 8) + o[7],
                this._exchangeLR(4, 252645135),
                this._exchangeLR(16, 65535),
                this._exchangeRL(2, 858993459),
                this._exchangeRL(8, 16711935),
                this._exchangeLR(1, 1431655765)
            }
            ,
            a.prototype.round = function(e) {
                for (var t = this.rhs, o = this.lhs, n = 0, r = 0; r < 8; r++) {
                    var i = (t ^ e[r]) & a.SBOX_MASK[r];
                    n += a.SBOX[r][i]
                }
                this.lhs = t,
                this.rhs = o ^ n
            }
            ,
            a.prototype.finalPerm = function(e, t) {
                var o = this.lhs;
                this.lhs = this.rhs,
                this.rhs = o,
                this._exchangeLR(1, 1431655765),
                this._exchangeRL(8, 16711935),
                this._exchangeRL(2, 858993459),
                this._exchangeLR(16, 65535),
                this._exchangeLR(4, 252645135),
                e[t] = this.lhs >> 24 & 255,
                e[t + 1] = this.lhs >> 16 & 255,
                e[t + 2] = this.lhs >> 8 & 255,
                e[t + 3] = 255 & this.lhs,
                e[t + 4] = this.rhs >> 24 & 255,
                e[t + 5] = this.rhs >> 16 & 255,
                e[t + 6] = this.rhs >> 8 & 255,
                e[t + 7] = 255 & this.rhs
            }
            ;
            var s = t.DES = {
                _blocksize: 2,
                _keyschedule: null,
                _state: new a,
                _init: function(t) {
                    this._keyschedule = new e(t)
                },
                encrypt: function(o, r, a) {
                    a = a || {};
                    var c = a.mode || new t.mode.OFB;
                    c.fixOptions && c.fixOptions(a);
                    var u = o.constructor == String ? i.stringToBytes(o) : o
                      , l = a.iv || n.randomBytes(8)
                      , h = r.constructor == String ? t.PBKDF2(r, l, 8, {
                        asBytes: !0
                    }) : r;
                    return this._keyschedule = new e(h),
                    c.encrypt(s, u, l),
                    u = a.iv ? u : l.concat(u),
                    a && a.asBytes ? u : n.bytesToBase64(u)
                },
                _encryptblock: function(e, t) {
                    this._state.initialPerm(e, t);
                    for (var o = 0; o <= 15; o++)
                        this._state.round(this._keyschedule.getKey(o));
                    this._state.finalPerm(e, t)
                },
                decrypt: function(o, r, a) {
                    a = a || {};
                    var c = a.mode || new t.mode.OFB;
                    c.fixOptions && c.fixOptions(a);
                    var u = o.constructor == String ? n.base64ToBytes(o) : o
                      , l = a.iv || u.splice(0, 8)
                      , h = r.constructor == String ? t.PBKDF2(r, l, 32, {
                        asBytes: !0
                    }) : r;
                    return this._keyschedule = new e(h),
                    c.decrypt(s, u, l),
                    a && a.asBytes ? u : i.bytesToString(u)
                },
                _decryptblock: function(e, t) {
                    this._state.initialPerm(e, t);
                    for (var o = 15; o >= 0; o--)
                        this._state.round(this._keyschedule.getKey(o));
                    this._state.finalPerm(e, t)
                }
            }
        }()
    },
    QotN: function(e, t, o) {
        !function() {
            var e = "undefined" == typeof window ? o("Cv7i").Crypto : window.Crypto
              , t = e.util
              , n = e.charenc
              , r = n.UTF8
              , i = n.Binary
              , a = e.MD5 = function(e, o) {
                var n = t.wordsToBytes(a._md5(e));
                return o && o.asBytes ? n : o && o.asString ? i.bytesToString(n) : t.bytesToHex(n)
            }
            ;
            a._md5 = function(e) {
                e.constructor == String && (e = r.stringToBytes(e));
                for (var o = t.bytesToWords(e), n = 8 * e.length, i = 1732584193, c = -271733879, s = -1732584194, u = 271733878, l = 0; l < o.length; l++)
                    o[l] = 16711935 & (o[l] << 8 | o[l] >>> 24) | 4278255360 & (o[l] << 24 | o[l] >>> 8);
                o[n >>> 5] |= 128 << n % 32,
                o[14 + (n + 64 >>> 9 << 4)] = n;
                for (var h = a._ff, d = a._gg, p = a._hh, f = a._ii, l = 0; l < o.length; l += 16) {
                    var g = i
                      , m = c
                      , y = s
                      , v = u;
                    i = h(i, c, s, u, o[l + 0], 7, -680876936),
                    u = h(u, i, c, s, o[l + 1], 12, -389564586),
                    s = h(s, u, i, c, o[l + 2], 17, 606105819),
                    c = h(c, s, u, i, o[l + 3], 22, -1044525330),
                    i = h(i, c, s, u, o[l + 4], 7, -176418897),
                    u = h(u, i, c, s, o[l + 5], 12, 1200080426),
                    s = h(s, u, i, c, o[l + 6], 17, -1473231341),
                    c = h(c, s, u, i, o[l + 7], 22, -45705983),
                    i = h(i, c, s, u, o[l + 8], 7, 1770035416),
                    u = h(u, i, c, s, o[l + 9], 12, -1958414417),
                    s = h(s, u, i, c, o[l + 10], 17, -42063),
                    c = h(c, s, u, i, o[l + 11], 22, -1990404162),
                    i = h(i, c, s, u, o[l + 12], 7, 1804603682),
                    u = h(u, i, c, s, o[l + 13], 12, -40341101),
                    s = h(s, u, i, c, o[l + 14], 17, -1502002290),
                    c = h(c, s, u, i, o[l + 15], 22, 1236535329),
                    i = d(i, c, s, u, o[l + 1], 5, -165796510),
                    u = d(u, i, c, s, o[l + 6], 9, -1069501632),
                    s = d(s, u, i, c, o[l + 11], 14, 643717713),
                    c = d(c, s, u, i, o[l + 0], 20, -373897302),
                    i = d(i, c, s, u, o[l + 5], 5, -701558691),
                    u = d(u, i, c, s, o[l + 10], 9, 38016083),
                    s = d(s, u, i, c, o[l + 15], 14, -660478335),
                    c = d(c, s, u, i, o[l + 4], 20, -405537848),
                    i = d(i, c, s, u, o[l + 9], 5, 568446438),
                    u = d(u, i, c, s, o[l + 14], 9, -1019803690),
                    s = d(s, u, i, c, o[l + 3], 14, -187363961),
                    c = d(c, s, u, i, o[l + 8], 20, 1163531501),
                    i = d(i, c, s, u, o[l + 13], 5, -1444681467),
                    u = d(u, i, c, s, o[l + 2], 9, -51403784),
                    s = d(s, u, i, c, o[l + 7], 14, 1735328473),
                    c = d(c, s, u, i, o[l + 12], 20, -1926607734),
                    i = p(i, c, s, u, o[l + 5], 4, -378558),
                    u = p(u, i, c, s, o[l + 8], 11, -2022574463),
                    s = p(s, u, i, c, o[l + 11], 16, 1839030562),
                    c = p(c, s, u, i, o[l + 14], 23, -35309556),
                    i = p(i, c, s, u, o[l + 1], 4, -1530992060),
                    u = p(u, i, c, s, o[l + 4], 11, 1272893353),
                    s = p(s, u, i, c, o[l + 7], 16, -155497632),
                    c = p(c, s, u, i, o[l + 10], 23, -1094730640),
                    i = p(i, c, s, u, o[l + 13], 4, 681279174),
                    u = p(u, i, c, s, o[l + 0], 11, -358537222),
                    s = p(s, u, i, c, o[l + 3], 16, -722521979),
                    c = p(c, s, u, i, o[l + 6], 23, 76029189),
                    i = p(i, c, s, u, o[l + 9], 4, -640364487),
                    u = p(u, i, c, s, o[l + 12], 11, -421815835),
                    s = p(s, u, i, c, o[l + 15], 16, 530742520),
                    c = p(c, s, u, i, o[l + 2], 23, -995338651),
                    i = f(i, c, s, u, o[l + 0], 6, -198630844),
                    u = f(u, i, c, s, o[l + 7], 10, 1126891415),
                    s = f(s, u, i, c, o[l + 14], 15, -1416354905),
                    c = f(c, s, u, i, o[l + 5], 21, -57434055),
                    i = f(i, c, s, u, o[l + 12], 6, 1700485571),
                    u = f(u, i, c, s, o[l + 3], 10, -1894986606),
                    s = f(s, u, i, c, o[l + 10], 15, -1051523),
                    c = f(c, s, u, i, o[l + 1], 21, -2054922799),
                    i = f(i, c, s, u, o[l + 8], 6, 1873313359),
                    u = f(u, i, c, s, o[l + 15], 10, -30611744),
                    s = f(s, u, i, c, o[l + 6], 15, -1560198380),
                    c = f(c, s, u, i, o[l + 13], 21, 1309151649),
                    i = f(i, c, s, u, o[l + 4], 6, -145523070),
                    u = f(u, i, c, s, o[l + 11], 10, -1120210379),
                    s = f(s, u, i, c, o[l + 2], 15, 718787259),
                    c = f(c, s, u, i, o[l + 9], 21, -343485551),
                    i = i + g >>> 0,
                    c = c + m >>> 0,
                    s = s + y >>> 0,
                    u = u + v >>> 0
                }
                return t.endian([i, c, s, u])
            }
            ,
            a._ff = function(e, t, o, n, r, i, a) {
                var c = e + (t & o | ~t & n) + (r >>> 0) + a;
                return (c << i | c >>> 32 - i) + t
            }
            ,
            a._gg = function(e, t, o, n, r, i, a) {
                var c = e + (t & n | o & ~n) + (r >>> 0) + a;
                return (c << i | c >>> 32 - i) + t
            }
            ,
            a._hh = function(e, t, o, n, r, i, a) {
                var c = e + (t ^ o ^ n) + (r >>> 0) + a;
                return (c << i | c >>> 32 - i) + t
            }
            ,
            a._ii = function(e, t, o, n, r, i, a) {
                var c = e + (o ^ (t | ~n)) + (r >>> 0) + a;
                return (c << i | c >>> 32 - i) + t
            }
            ,
            a._blocksize = 16,
            a._digestsize = 16
        }()
    },
    SqlD: function(e, t, o) {
        !function() {
            var e = "undefined" == typeof window ? o("Cv7i").Crypto : window.Crypto
              , t = e.util;
            t.u32 = function(e) {
                return e >>> 0
            }
            ,
            t.add = function() {
                for (var e = this.u32(arguments[0]), t = 1; t < arguments.length; t++)
                    e = this.u32(e + this.u32(arguments[t]));
                return e
            }
            ,
            t.mult = function(e, t) {
                return this.add((4294901760 & t) * e, (65535 & t) * e)
            }
            ,
            t.gt = function(e, t) {
                return this.u32(e) > this.u32(t)
            }
            ,
            t.lt = function(e, t) {
                return this.u32(e) < this.u32(t)
            }
        }()
    },
    UsrQ: function(e, t, o) {
        !function() {
            var e = "undefined" == typeof window ? o("Cv7i").Crypto : window.Crypto
              , t = e.util
              , n = e.charenc
              , r = n.UTF8
              , i = n.Binary;
            e.PBKDF2 = function(o, n, a, c) {
                function s(t, o) {
                    return e.HMAC(u, o, t, {
                        asBytes: !0
                    })
                }
                o.constructor == String && (o = r.stringToBytes(o)),
                n.constructor == String && (n = r.stringToBytes(n));
                for (var u = c && c.hasher || e.SHA1, l = c && c.iterations || 1, h = [], d = 1; h.length < a; ) {
                    for (var p = s(o, n.concat(t.wordsToBytes([d]))), f = p, g = 1; g < l; g++) {
                        f = s(o, f);
                        for (var m = 0; m < p.length; m++)
                            p[m] ^= f[m]
                    }
                    h = h.concat(p),
                    d++
                }
                return h.length = a,
                c && c.asBytes ? h : c && c.asString ? i.bytesToString(h) : t.bytesToHex(h)
            }
        }()
    },
    Xp4A: function(e, t, o) {
        "use strict";
        o.d(t, "a", function() {
            return n
        }),
        o("+stQ").Crypto;
        var n = function(e, t) {
            var o = new Crypto.mode.CBC(Crypto.pad.pkcs7)
              , n = Crypto.util.base64ToBytes(e)
              , r = Crypto.util.base64ToBytes(t)
              , i = Crypto.AES.decrypt(n, r, {
                asBytes: !0,
                mode: o
            })
              , a = Crypto.charenc.UTF8.bytesToString(i).replace(/\s*\n*\s{2,}/g, "</p><p>");
            return a = a.replace(/\n+/g, "</p><p>"),
            a = "<p>" + a + "</p>"
        }
    },
    YGSe: function(e, t, o) {
        !function() {
            var e, t = "undefined" == typeof window ? o("Cv7i").Crypto : window.Crypto, n = t.util, r = t.charenc, i = r.UTF8, a = (r.Binary,
            []), c = [], s = t.Rabbit = {
                encrypt: function(e, o) {
                    var r = i.stringToBytes(e)
                      , a = n.randomBytes(8)
                      , c = o.constructor == String ? t.PBKDF2(o, a, 32, {
                        asBytes: !0
                    }) : o;
                    return s._rabbit(r, c, n.bytesToWords(a)),
                    n.bytesToBase64(a.concat(r))
                },
                decrypt: function(e, o) {
                    var r = n.base64ToBytes(e)
                      , a = r.splice(0, 8)
                      , c = o.constructor == String ? t.PBKDF2(o, a, 32, {
                        asBytes: !0
                    }) : o;
                    return s._rabbit(r, c, n.bytesToWords(a)),
                    i.bytesToString(r)
                },
                _rabbit: function(e, t, o) {
                    s._keysetup(t),
                    o && s._ivsetup(o);
                    for (var n = [], r = 0; r < e.length; r++) {
                        if (r % 16 == 0) {
                            s._nextstate(),
                            n[0] = a[0] ^ a[5] >>> 16 ^ a[3] << 16,
                            n[1] = a[2] ^ a[7] >>> 16 ^ a[5] << 16,
                            n[2] = a[4] ^ a[1] >>> 16 ^ a[7] << 16,
                            n[3] = a[6] ^ a[3] >>> 16 ^ a[1] << 16;
                            for (var i = 0; i < 4; i++)
                                n[i] = 16711935 & (n[i] << 8 | n[i] >>> 24) | 4278255360 & (n[i] << 24 | n[i] >>> 8);
                            for (var c = 120; c >= 0; c -= 8)
                                n[c / 8] = n[c >>> 5] >>> 24 - c % 32 & 255
                        }
                        e[r] ^= n[r % 16]
                    }
                },
                _keysetup: function(t) {
                    a[0] = t[0],
                    a[2] = t[1],
                    a[4] = t[2],
                    a[6] = t[3],
                    a[1] = t[3] << 16 | t[2] >>> 16,
                    a[3] = t[0] << 16 | t[3] >>> 16,
                    a[5] = t[1] << 16 | t[0] >>> 16,
                    a[7] = t[2] << 16 | t[1] >>> 16,
                    c[0] = n.rotl(t[2], 16),
                    c[2] = n.rotl(t[3], 16),
                    c[4] = n.rotl(t[0], 16),
                    c[6] = n.rotl(t[1], 16),
                    c[1] = 4294901760 & t[0] | 65535 & t[1],
                    c[3] = 4294901760 & t[1] | 65535 & t[2],
                    c[5] = 4294901760 & t[2] | 65535 & t[3],
                    c[7] = 4294901760 & t[3] | 65535 & t[0],
                    e = 0;
                    for (var o = 0; o < 4; o++)
                        s._nextstate();
                    for (var o = 0; o < 8; o++)
                        c[o] ^= a[o + 4 & 7]
                },
                _ivsetup: function(e) {
                    var t = n.endian(e[0])
                      , o = n.endian(e[1])
                      , r = t >>> 16 | 4294901760 & o
                      , i = o << 16 | 65535 & t;
                    c[0] ^= t,
                    c[1] ^= r,
                    c[2] ^= o,
                    c[3] ^= i,
                    c[4] ^= t,
                    c[5] ^= r,
                    c[6] ^= o,
                    c[7] ^= i;
                    for (var a = 0; a < 4; a++)
                        s._nextstate()
                },
                _nextstate: function() {
                    for (var t = [], o = 0; o < 8; o++)
                        t[o] = c[o];
                    c[0] = c[0] + 1295307597 + e >>> 0,
                    c[1] = c[1] + 3545052371 + (c[0] >>> 0 < t[0] >>> 0 ? 1 : 0) >>> 0,
                    c[2] = c[2] + 886263092 + (c[1] >>> 0 < t[1] >>> 0 ? 1 : 0) >>> 0,
                    c[3] = c[3] + 1295307597 + (c[2] >>> 0 < t[2] >>> 0 ? 1 : 0) >>> 0,
                    c[4] = c[4] + 3545052371 + (c[3] >>> 0 < t[3] >>> 0 ? 1 : 0) >>> 0,
                    c[5] = c[5] + 886263092 + (c[4] >>> 0 < t[4] >>> 0 ? 1 : 0) >>> 0,
                    c[6] = c[6] + 1295307597 + (c[5] >>> 0 < t[5] >>> 0 ? 1 : 0) >>> 0,
                    c[7] = c[7] + 3545052371 + (c[6] >>> 0 < t[6] >>> 0 ? 1 : 0) >>> 0,
                    e = c[7] >>> 0 < t[7] >>> 0 ? 1 : 0;
                    for (var n = [], o = 0; o < 8; o++) {
                        var r = a[o] + c[o] >>> 0
                          , i = 65535 & r
                          , s = r >>> 16
                          , u = ((i * i >>> 17) + i * s >>> 15) + s * s
                          , l = ((4294901760 & r) * r >>> 0) + ((65535 & r) * r >>> 0) >>> 0;
                        n[o] = u ^ l
                    }
                    a[0] = n[0] + (n[7] << 16 | n[7] >>> 16) + (n[6] << 16 | n[6] >>> 16),
                    a[1] = n[1] + (n[0] << 8 | n[0] >>> 24) + n[7],
                    a[2] = n[2] + (n[1] << 16 | n[1] >>> 16) + (n[0] << 16 | n[0] >>> 16),
                    a[3] = n[3] + (n[2] << 8 | n[2] >>> 24) + n[1],
                    a[4] = n[4] + (n[3] << 16 | n[3] >>> 16) + (n[2] << 16 | n[2] >>> 16),
                    a[5] = n[5] + (n[4] << 8 | n[4] >>> 24) + n[3],
                    a[6] = n[6] + (n[5] << 16 | n[5] >>> 16) + (n[4] << 16 | n[4] >>> 16),
                    a[7] = n[7] + (n[6] << 8 | n[6] >>> 24) + n[5]
                }
            }
        }()
    },
    Z6so: function(e, t, o) {
        !function() {
            var e = "undefined" == typeof window ? o("Cv7i").Crypto : window.Crypto
              , t = e.util
              , n = e.charenc
              , r = n.UTF8
              , i = n.Binary
              , a = e.SHA1 = function(e, o) {
                var n = t.wordsToBytes(a._sha1(e));
                return o && o.asBytes ? n : o && o.asString ? i.bytesToString(n) : t.bytesToHex(n)
            }
            ;
            a._sha1 = function(e) {
                e.constructor == String && (e = r.stringToBytes(e));
                var o = t.bytesToWords(e)
                  , n = 8 * e.length
                  , i = []
                  , a = 1732584193
                  , c = -271733879
                  , s = -1732584194
                  , u = 271733878
                  , l = -1009589776;
                o[n >> 5] |= 128 << 24 - n % 32,
                o[15 + (n + 64 >>> 9 << 4)] = n;
                for (var h = 0; h < o.length; h += 16) {
                    for (var d = a, p = c, f = s, g = u, m = l, y = 0; y < 80; y++) {
                        if (y < 16)
                            i[y] = o[h + y];
                        else {
                            var v = i[y - 3] ^ i[y - 8] ^ i[y - 14] ^ i[y - 16];
                            i[y] = v << 1 | v >>> 31
                        }
                        var b = (a << 5 | a >>> 27) + l + (i[y] >>> 0) + (y < 20 ? 1518500249 + (c & s | ~c & u) : y < 40 ? 1859775393 + (c ^ s ^ u) : y < 60 ? (c & s | c & u | s & u) - 1894007588 : (c ^ s ^ u) - 899497514);
                        l = u,
                        u = s,
                        s = c << 30 | c >>> 2,
                        c = a,
                        a = b
                    }
                    a += d,
                    c += p,
                    s += f,
                    u += g,
                    l += m
                }
                return [a, c, s, u, l]
            }
            ,
            a._blocksize = 16,
            a._digestsize = 20
        }()
    },
    Zt7E: function(e, t, o) {
        (function(t, o) {
            /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */
            !function(t, n) {
                e.exports = function() {
                    "use strict";
                    function e(e) {
                        var t = typeof e;
                        return null !== e && ("object" === t || "function" === t)
                    }
                    function r(e) {
                        return "function" == typeof e
                    }
                    function i(e) {
                        Q = e
                    }
                    function a(e) {
                        K = e
                    }
                    function c() {
                        return void 0 !== q ? function() {
                            q(u)
                        }
                        : s()
                    }
                    function s() {
                        var e = setTimeout;
                        return function() {
                            return e(u, 1)
                        }
                    }
                    function u() {
                        for (var e = 0; e < H; e += 2)
                            (0,
                            Z[e])(Z[e + 1]),
                            Z[e] = void 0,
                            Z[e + 1] = void 0;
                        H = 0
                    }
                    function l(e, t) {
                        var o = arguments
                          , n = this
                          , r = new this.constructor(d);
                        void 0 === r[ee] && P(r);
                        var i = n._state;
                        return i ? function() {
                            var e = o[i - 1];
                            K(function() {
                                return A(i, r, e, n._result)
                            })
                        }() : _(n, r, e, t),
                        r
                    }
                    function h(e) {
                        var t = this;
                        if (e && "object" == typeof e && e.constructor === t)
                            return e;
                        var o = new t(d);
                        return k(o, e),
                        o
                    }
                    function d() {}
                    function p() {
                        return new TypeError("You cannot resolve a promise with itself")
                    }
                    function f() {
                        return new TypeError("A promises callback cannot return that same promise.")
                    }
                    function g(e) {
                        try {
                            return e.then
                        } catch (e) {
                            return re.error = e,
                            re
                        }
                    }
                    function m(e, t, o, n) {
                        try {
                            e.call(t, o, n)
                        } catch (e) {
                            return e
                        }
                    }
                    function y(e, t, o) {
                        K(function(e) {
                            var n = !1
                              , r = m(o, t, function(o) {
                                n || (n = !0,
                                t !== o ? k(e, o) : w(e, o))
                            }, function(t) {
                                n || (n = !0,
                                B(e, t))
                            }, "Settle: " + (e._label || " unknown promise"));
                            !n && r && (n = !0,
                            B(e, r))
                        }, e)
                    }
                    function v(e, t) {
                        t._state === oe ? w(e, t._result) : t._state === ne ? B(e, t._result) : _(t, void 0, function(t) {
                            return k(e, t)
                        }, function(t) {
                            return B(e, t)
                        })
                    }
                    function b(e, t, o) {
                        t.constructor === e.constructor && o === l && t.constructor.resolve === h ? v(e, t) : o === re ? (B(e, re.error),
                        re.error = null) : void 0 === o ? w(e, t) : r(o) ? y(e, t, o) : w(e, t)
                    }
                    function k(t, o) {
                        t === o ? B(t, p()) : e(o) ? b(t, o, g(o)) : w(t, o)
                    }
                    function C(e) {
                        e._onerror && e._onerror(e._result),
                        I(e)
                    }
                    function w(e, t) {
                        e._state === te && (e._result = t,
                        e._state = oe,
                        0 !== e._subscribers.length && K(I, e))
                    }
                    function B(e, t) {
                        e._state === te && (e._state = ne,
                        e._result = t,
                        K(C, e))
                    }
                    function _(e, t, o, n) {
                        var r = e._subscribers
                          , i = r.length;
                        e._onerror = null,
                        r[i] = t,
                        r[i + oe] = o,
                        r[i + ne] = n,
                        0 === i && e._state && K(I, e)
                    }
                    function I(e) {
                        var t = e._subscribers
                          , o = e._state;
                        if (0 !== t.length) {
                            for (var n = void 0, r = void 0, i = e._result, a = 0; a < t.length; a += 3)
                                n = t[a],
                                r = t[a + o],
                                n ? A(o, n, r, i) : r(i);
                            e._subscribers.length = 0
                        }
                    }
                    function T() {
                        this.error = null
                    }
                    function S(e, t) {
                        try {
                            return e(t)
                        } catch (e) {
                            return ie.error = e,
                            ie
                        }
                    }
                    function A(e, t, o, n) {
                        var i = r(o)
                          , a = void 0
                          , c = void 0
                          , s = void 0
                          , u = void 0;
                        if (i) {
                            if (a = S(o, n),
                            a === ie ? (u = !0,
                            c = a.error,
                            a.error = null) : s = !0,
                            t === a)
                                return void B(t, f())
                        } else
                            a = n,
                            s = !0;
                        t._state !== te || (i && s ? k(t, a) : u ? B(t, c) : e === oe ? w(t, a) : e === ne && B(t, a))
                    }
                    function x(e, t) {
                        try {
                            t(function(t) {
                                k(e, t)
                            }, function(t) {
                                B(e, t)
                            })
                        } catch (t) {
                            B(e, t)
                        }
                    }
                    function D() {
                        return ae++
                    }
                    function P(e) {
                        e[ee] = ae++,
                        e._state = void 0,
                        e._result = void 0,
                        e._subscribers = []
                    }
                    function R(e, t) {
                        this._instanceConstructor = e,
                        this.promise = new e(d),
                        this.promise[ee] || P(this.promise),
                        z(t) ? (this.length = t.length,
                        this._remaining = t.length,
                        this._result = new Array(this.length),
                        0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0,
                        this._enumerate(t),
                        0 === this._remaining && w(this.promise, this._result))) : B(this.promise, E())
                    }
                    function E() {
                        return new Error("Array Methods must be provided an Array")
                    }
                    function L(e) {
                        return new R(this,e).promise
                    }
                    function j(e) {
                        var t = this;
                        return new t(z(e) ? function(o, n) {
                            for (var r = e.length, i = 0; i < r; i++)
                                t.resolve(e[i]).then(o, n)
                        }
                        : function(e, t) {
                            return t(new TypeError("You must pass an array to race."))
                        }
                        )
                    }
                    function F(e) {
                        var t = this
                          , o = new t(d);
                        return B(o, e),
                        o
                    }
                    function M() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }
                    function O() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }
                    function U(e) {
                        this[ee] = D(),
                        this._result = this._state = void 0,
                        this._subscribers = [],
                        d !== e && ("function" != typeof e && M(),
                        this instanceof U ? x(this, e) : O())
                    }
                    function N() {
                        var e = void 0;
                        if (void 0 !== o)
                            e = o;
                        else if ("undefined" != typeof self)
                            e = self;
                        else
                            try {
                                e = Function("return this")()
                            } catch (e) {
                                throw new Error("polyfill failed because global object is unavailable in this environment")
                            }
                        var t = e.Promise;
                        if (t) {
                            var n = null;
                            try {
                                n = Object.prototype.toString.call(t.resolve())
                            } catch (e) {}
                            if ("[object Promise]" === n && !t.cast)
                                return
                        }
                        e.Promise = U
                    }
                    var J = void 0;
                    J = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }
                    ;
                    var z = J
                      , H = 0
                      , q = void 0
                      , Q = void 0
                      , K = function(e, t) {
                        Z[H] = e,
                        Z[H + 1] = t,
                        2 === (H += 2) && (Q ? Q(u) : $())
                    }
                      , G = "undefined" != typeof window ? window : void 0
                      , W = G || {}
                      , Y = W.MutationObserver || W.WebKitMutationObserver
                      , V = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t)
                      , X = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel
                      , Z = new Array(1e3)
                      , $ = void 0;
                    $ = V ? function() {
                        return function() {
                            return t.nextTick(u)
                        }
                    }() : Y ? function() {
                        var e = 0
                          , t = new Y(u)
                          , o = document.createTextNode("");
                        return t.observe(o, {
                            characterData: !0
                        }),
                        function() {
                            o.data = e = ++e % 2
                        }
                    }() : X ? function() {
                        var e = new MessageChannel;
                        return e.port1.onmessage = u,
                        function() {
                            return e.port2.postMessage(0)
                        }
                    }() : void 0 === G ? function() {
                        try {
                            var e = n(0);
                            return q = e.runOnLoop || e.runOnContext,
                            c()
                        } catch (e) {
                            return s()
                        }
                    }() : s();
                    var ee = Math.random().toString(36).substring(16)
                      , te = void 0
                      , oe = 1
                      , ne = 2
                      , re = new T
                      , ie = new T
                      , ae = 0;
                    return R.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === te && t < e.length; t++)
                            this._eachEntry(e[t], t)
                    }
                    ,
                    R.prototype._eachEntry = function(e, t) {
                        var o = this._instanceConstructor
                          , n = o.resolve;
                        if (n === h) {
                            var r = g(e);
                            if (r === l && e._state !== te)
                                this._settledAt(e._state, t, e._result);
                            else if ("function" != typeof r)
                                this._remaining--,
                                this._result[t] = e;
                            else if (o === U) {
                                var i = new o(d);
                                b(i, e, r),
                                this._willSettleAt(i, t)
                            } else
                                this._willSettleAt(new o(function(t) {
                                    return t(e)
                                }
                                ), t)
                        } else
                            this._willSettleAt(n(e), t)
                    }
                    ,
                    R.prototype._settledAt = function(e, t, o) {
                        var n = this.promise;
                        n._state === te && (this._remaining--,
                        e === ne ? B(n, o) : this._result[t] = o),
                        0 === this._remaining && w(n, this._result)
                    }
                    ,
                    R.prototype._willSettleAt = function(e, t) {
                        var o = this;
                        _(e, void 0, function(e) {
                            return o._settledAt(oe, t, e)
                        }, function(e) {
                            return o._settledAt(ne, t, e)
                        })
                    }
                    ,
                    U.all = L,
                    U.race = j,
                    U.resolve = h,
                    U.reject = F,
                    U._setScheduler = i,
                    U._setAsap = a,
                    U._asap = K,
                    U.prototype = {
                        constructor: U,
                        then: l,
                        catch: function(e) {
                            return this.then(null, e)
                        }
                    },
                    U.polyfill = N,
                    U.Promise = U,
                    U
                }()
            }()
        }
        ).call(t, o("pBGv"), o("h6ac"))
    },
    "c+KG": function(e, t, o) {
        "use strict";
        var n = o("fAMm");
        o("Zt7E").polyfill(),
        o("6kQO");
        var r = {
            getUserInfo: function(e) {
                return fetch(n.a.user.info + "?token=" + e).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getAccountInfo: function(e) {
                return fetch(n.a.user.account + "?token=" + e).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getUserConfig: function(e) {
                return fetch(n.a.user.config + "?token=" + e).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getUserDetail: function(e) {
                return fetch(n.a.user.detail + "?token=" + e).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getMonthlyInfo: function(e) {
                return fetch(n.a.month.user + "?token=" + e, {
                    method: "POST"
                }).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            setAutoPurchase: function(e, t) {
                return fetch(n.a.user.config + "?token=" + e, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "autoPurchase=" + t
                }).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getBookshelf: function(e) {
                return fetch(n.a.user.bookshelf + "?token=" + e).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            toggleBookshelf: function(e, t, o, r) {
                return fetch(n.a.user.bookshelf, {
                    method: o ? "PUT" : "DELETE",
                    headers: {
                        "content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "token=" + e + "&books=" + t + "&type=" + r
                }).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getVoucher: function(e, t, o) {
                return fetch(n.a.voucher.useable + "?token=" + e + "&start=" + t + "&limit=" + o).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            exchangTicket: function(e, t, o, r) {
                return fetch(n.a.voucher.activitiespay + "?token=" + e, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "platform=Android&userId=" + t + "&code=" + o + (r ? "&channelName=" + r : "")
                }).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getPayLogInfo: function(e, t, o) {
                return fetch(n.a.log.payLog + "?token=" + e + "&platform=android&start=" + t + "&limit=" + o).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getCostLogInfo: function(e, t, o) {
                return fetch(n.a.log.costLog + "?token=" + e + "&platform=android&start=" + t + "&limit=" + o).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getSmgCode: function(e) {
                return fetch(n.a.mobileBind.validate + "?token=" + e).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            sendSmgCode: function(e, t, o) {
                return fetch(n.a.mobileBind.send, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "mobile=" + t + "&type=" + e + "&token=" + o
                }).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            submitMobileBind: function(e, t, o, r) {
                return fetch(n.a.mobileBind.submit, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "mobile=" + t + "&type=" + e + "&token=" + r + "&code=" + o
                }).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            bindMobile: function(e, t, o, r) {
                return fetch(n.a.mobileBind.bindMobile, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "mobile=" + t + "&type=" + e + "&token=" + r + "&code=" + o
                }).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getUserInfoForUserId: function(e, t) {
                return "openId" == e ? fetch(n.a.getInfoForUserId + "info?openId=" + t + "&refresh=" + Math.random()).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                }) : (console.log(n.a.getInfoForUserId + t + "/info"),
                fetch(n.a.getInfoForUserId + t + "/info").then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                }))
            },
            bindUserInfoForUserId: function(e, t) {
                return fetch(n.a.getInfoForUserId + e + "/info?openId=" + t).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getUserSignInfo: function(e) {
                return fetch(n.a.sign.judgeSignIn + "?token=" + e).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            userSignIn: function(e, t) {
                return fetch(n.a.sign.signIn + "?activityId=" + e + "&type=2&token=" + t + "&from=mweb").then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getUserReSignIn: function(e, t, o) {
                return fetch(n.a.sign.reSignIn, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "day=" + t + "&activityId=" + e + "&token=" + o
                }).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getCpsThirdBookRecord: function(e) {
                return fetch(n.a.cpsThirdBookRecord + "?token=" + e + "&refresh=" + Math.random()).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            getUserInfoForTianyi: function(e, t, o, r, i, a) {
                return fetch(n.a.user.tianyi, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "unionId=" + e + "&avatar=" + t + "&name=" + o + "&sign=" + r + "&channelName=" + i + "&promoterId=" + a
                }).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            pvUvStatistics: function(e, t, o) {
                return fetch(n.a.cpsPvUv, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "X-AuthToken": "9SyECk96oDsTmXfogIieDI0c"
                    },
                    body: JSON.stringify({
                        mwebPUS: [{
                            product_line: "1",
                            code: e,
                            user_id: t,
                            create_time: o
                        }]
                    })
                }).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            },
            iosAppActivityStatistics: function(e, t, o, r) {
                return console.log(JSON.stringify({
                    active: [{
                        client_version: "",
                        app_market: "",
                        user_id: "",
                        device_imei: "",
                        device_mac: "",
                        event_type: "3",
                        custom_param1: e,
                        custom_param2: t,
                        custom_param12: o,
                        log_time: r
                    }]
                })),
                fetch(n.a.statisticsForIosAppActivity, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "X-AuthToken": "9SyECk96oDseielmXfogIiewadabca"
                    },
                    body: JSON.stringify({
                        active: [{
                            client_version: "",
                            app_market: "",
                            user_id: "0000",
                            device_imei: "",
                            device_mac: "",
                            event_type: "3",
                            custom_param1: e,
                            custom_param2: t,
                            custom_param12: o,
                            log_time: r
                        }]
                    })
                }).then(function(e) {
                    return e.json()
                }, function(e) {
                    console.log("error")
                })
            }
        };
        t.a = r
    },
    cGZm: function(e, t, o) {
        !function() {
            var e = "undefined" == typeof window ? o("Cv7i").Crypto : window.Crypto
              , t = e.util
              , n = e.charenc
              , r = n.UTF8
              , i = n.Binary
              , a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
              , c = e.SHA256 = function(e, o) {
                var n = t.wordsToBytes(c._sha256(e));
                return o && o.asBytes ? n : o && o.asString ? i.bytesToString(n) : t.bytesToHex(n)
            }
            ;
            c._sha256 = function(e) {
                e.constructor == String && (e = r.stringToBytes(e));
                var o, n, i, c, s, u, l, h, d, p, f, g, m = t.bytesToWords(e), y = 8 * e.length, v = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], b = [];
                m[y >> 5] |= 128 << 24 - y % 32,
                m[15 + (y + 64 >> 9 << 4)] = y;
                for (var d = 0; d < m.length; d += 16) {
                    o = v[0],
                    n = v[1],
                    i = v[2],
                    c = v[3],
                    s = v[4],
                    u = v[5],
                    l = v[6],
                    h = v[7];
                    for (var p = 0; p < 64; p++) {
                        if (p < 16)
                            b[p] = m[p + d];
                        else {
                            var k = b[p - 15]
                              , C = b[p - 2]
                              , w = (k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3
                              , B = (C << 15 | C >>> 17) ^ (C << 13 | C >>> 19) ^ C >>> 10;
                            b[p] = w + (b[p - 7] >>> 0) + B + (b[p - 16] >>> 0)
                        }
                        var _ = s & u ^ ~s & l
                          , I = o & n ^ o & i ^ n & i
                          , T = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22);
                        f = (h >>> 0) + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + _ + a[p] + (b[p] >>> 0),
                        g = T + I,
                        h = l,
                        l = u,
                        u = s,
                        s = c + f >>> 0,
                        c = i,
                        i = n,
                        n = o,
                        o = f + g >>> 0
                    }
                    v[0] += o,
                    v[1] += n,
                    v[2] += i,
                    v[3] += c,
                    v[4] += s,
                    v[5] += u,
                    v[6] += l,
                    v[7] += h
                }
                return v
            }
            ,
            c._blocksize = 16,
            c._digestsize = 32
        }()
    },
    dABt: function(e, t, o) {
        "use strict";
        o("Zt7E").polyfill(),
        o("6kQO");
        var n = {
            initWechatJSSDK: function() {
                fetch(location.protocol + "//api.zhuishushenqi.com/wechats/jssdk_init?url=" + encodeURIComponent(location.href.split("#")[0])).then(function(e) {
                    return e.json()
                }).then(function(e) {
                    wx.config({
                        debug: e.jsApi.debug,
                        appId: e.jsApi.appId,
                        timestamp: e.jsApi.timestamp,
                        nonceStr: e.jsApi.nonceStr,
                        signature: e.jsApi.signature,
                        jsApiList: e.jsApi.jsApiList
                    })
                })
            }
        };
        t.a = n
    },
    fAMm: function(e, t, o) {
        "use strict";
        o.d(t, "a", function() {
            return a
        });
        var n = location.protocol.split(":")[0] + "://"
          , r = n + "api.zhuishushenqi.com"
          , i = n + "chapter2.zhuishushenqi.com/chapter/"
          , a = {
            configInfo: r + "/config/info",
            oauth2: {
                weibo: {
                    appKey: "1116216234",
                    client_secret: "6c73b3dba9fdad4687a973e9de26b4ee",
                    url: "https://api.weibo.com/oauth2/authorize?client_id=1116216234&response_type=code&redirect_uri=" + encodeURIComponent(n) + "m.zhuishushenqi.com%2Flogin?type=SinaWeibo"
                },
                qq: {
                    appId: "101355089",
                    redirectURI: location.origin + "/login?type=QQ"
                }
            },
            cdn: n + "statics.zhuishushenqi.com",
            getBookDetail: r + "/book/",
            getBookBestComment: r + "/post/review/best-by-book",
            getBookAllComment: r + "/post/review/by-book",
            getCommentDetail: r + "/post/review/",
            getBookSource: r + "/btoc",
            getBookMixSource: r + "/ctoc",
            getBookChapterList: r + "/btoc/",
            getBookChapterDetail: i,
            getBookChapterPrice: r + "/purchase/batchInfo",
            batchBuyBookChapter: r + "/v2/purchase/batchBuy",
            singleBuyBookChapter: r + "/purchase/buy",
            getBookChapterBought: r + "/purchase/book/",
            explore: {
                advs: r + "/recommendPage/node/spread/575f74f27a4a60dc78a435a3?pl=ios",
                nodes: r + "/recommendPage/nodes/575f74f27a4a60dc78a435a3",
                books: r + "/recommendPage/books/",
                ranking: r + "/recommendPage/bookStore/ranking"
            },
            home: {
                nodes: r + "/recommendPage/nodes/5910018c8094b1e228e5868f"
            },
            getRecommendNodeBooks: r + "/recommendPage/node/books/all/",
            category: {
                statistics: r + "/cats/lv2/statistics",
                level: r + "/cats/lv2",
                books: r + "/book/by-categories"
            },
            ranking: {
                rank: r + "/ranking/gender",
                rankv2: r + "/v2/ranking/gender",
                rankv3: r + "/v3/ranking/gender",
                books: r + "/ranking/"
            },
            bookList: {
                tags: r + "/book-list/tagType",
                books: r + "/book-list",
                detail: r + "/book-list/"
            },
            search: r + "/book/fuzzy-search",
            login: r + "/user/login",
            weiboLogin: r + "/mweb/user/access_token",
            log: {
                payLog: r + "/charge/order",
                costLog: r + "/purchase/record"
            },
            pay: {
                weixin: r + "/mweb/charge/wechatpay",
                alipay: r + "/mweb/charge/alipay",
                weixinForMonthly: r + "/mweb/monthy/wechatpay",
                alipayForMonthly: r + "/mweb/monthy/alipay",
                productId: r + "/charge/product?platform=mweb",
                productIdFor: r + "/charge/product?platform=",
                confirm: r + "/charge/order/",
                monthlyProducts: r + "/charge/monthly/product?platform=mweb",
                weixinForSignIn: r + "/mweb/charge/signIn/weixinpay",
                forPartner: r + "/charge/union/product"
            },
            publicPay: {
                charge: {
                    android: r + "/charge/v2/product?platform=android&rule=1&token=",
                    ios: r + "/charge/v2/product?platform=ios&token="
                },
                vip: {
                    android: r + "/charge/monthly/product?platform=android&token=",
                    ios: r + "/charge/v2/monthly/product/"
                }
            },
            user: {
                info: r + "/user/info",
                account: r + "/user/account",
                config: r + "/mweb/user/config",
                detail: r + "/user/detail-info",
                bookshelf: r + "/user/bookshelf",
                tianyi: r + "/mweb/tianyi/user/login"
            },
            month: {
                advs: r + "/recommendPage/node/spread/575f74f27a4a60dc78a435a4",
                node: r + "/recommendPage/nodes/575f74f27a4a60dc78a435a4",
                books: r + "/recommendPage/books/",
                user: r + "/user/monthly/info"
            },
            mobileBind: {
                send: r + "/sms/samton/sendSms",
                submit: r + "/sms/samton/checkSms",
                mobile: r + "/user/detail-info",
                validate: r + "/sms/time",
                bindMobile: r + "/sms/samton/bindMobile"
            },
            wechat: {
                init: r + "/wechats/jssdk_init",
                shareLink: r + "/wechats/event"
            },
            original: {
                advs: r + "/recommendPage/node/spread/58992b1e00cb98d4f280c036",
                nodes: r + "/recommendPage/nodes/58992b1e00cb98d4f280c036",
                books: r + "/recommendPage/books/"
            },
            cartoon: {
                advs: r + "/recommendPage/node/spread/5950f5f3234f7e781de4e774",
                nodes: r + "/recommendPage/nodes/5950f5f3234f7e781de4e774",
                books: r + "/recommendPage/books/"
            },
            summerSale: {
                doc: r + "/book-discount"
            },
            voucher: {
                activitiespay: r + "/charge/activitiespay",
                useable: r + "/voucher",
                unuseable: r + "/voucher",
                expired: r + "/voucher"
            },
            chapterList: r + "/mweb/books/toc/",
            getWechatChannelQrcode: "http://wx.zhuishushenqi.com/QRCode/GetQR?tgid=",
            bookRecord: r + "/user/mweb/readRecord",
            getInfoForUserId: r + "/mweb/userApp/",
            cpsbook: r + "/cps",
            cpsBookRecord: r + "/cps/book-record",
            readRecord: r + "/user/book/readRecord",
            sign: {
                judgeSignIn: r + "/user/v2/judgeSignIn",
                signIn: r + "/user/signIn",
                reSignIn: r + "/user/reSignIn",
                paySignInForWeChat: r + "/charge/signIn/weixinpay"
            },
            cpsThirdQrCode: n + "yqfapi.zhuishushenqi.com/api/Merchant/GetPromotionInfo/",
            cpsThirdBookRecord: r + "/mweb/user/bookRecord",
            cpsPvUv: "https://d.1391.com/v1.0.0/h/warehouse/mweb/pvuv/batch/receive/pu",
            baiduCooperation: r + "/book-cooperation/baidu/chapters/keys",
            statisticsForIosAppActivity: "https://d.1391.com:50251/v1.0.0/h/warehouse/log/active/batch/receive/1/2"
        }
    },
    fG19: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o("fAfE")
          , r = o("+2+0")
          , i = o("IwmS")
          , a = o("fAMm")
          , c = o("Xp4A")
          , s = o("c+KG")
          , u = o("6nTU")
          , l = o("dABt")
          , h = o("6orE");
        o.n(h),
        o("nW7E"),
        r.b();
        var d = function(e, t, o) {
            var n, r = null;
            return function() {
                var i = this
                  , a = arguments
                  , c = +new Date;
                clearTimeout(r),
                n || (n = c),
                c - n >= o ? (e.apply(i, a),
                n = c) : r = h.setTimeout(function() {
                    e.apply(i, a)
                }, t)
            }
        };
        n.default.component("chapterList", {
            data: function() {
                return {
                    chapterListBlockTopIndex: 0,
                    chapterListBlock: [],
                    chapterListTopPlaceholderHeight: 0,
                    chapterListBottomPlaceholderHeight: 0,
                    chapterListScrollTop: 0,
                    chapterListItemHeight: Math.ceil(100 / 75 * lib.flexible.rem)
                }
            },
            props: ["bookName", "showDirectoryPanel", "bookId", "chapterIndex", "chapterList", "userInfo", "bookDetail", "chapterBought", "onDirectoryPanelClose", "onChapterListClick"],
            render: function(e) {
                var t = this
                  , o = (t.bookName,
                t.showDirectoryPanel)
                  , n = (t.bookId,
                t.chapterIndex)
                  , r = t.chapterList
                  , i = t.userInfo
                  , a = t.bookDetail;
                return t.chapterBought,
                t.onDirectoryPanelClose,
                t.onChapterListClick,
                e("div", {
                    class: {
                        "page-read-chapter-list": !0,
                        "show-panel": o
                    },
                    style: "-webkit-transform:translateX(-100%)",
                    on: {
                        click: function(e) {
                            t.onDirectoryPanelClose()
                        }
                    }
                }, [e("div", {
                    class: "content"
                }, [e("div", {
                    class: "top-bar"
                }, [e("p", null, [t.bookName]), e("p", null, ["目录"])]), e("ul", {
                    class: "directory-list",
                    attrs: {
                        id: "J_chapterList"
                    },
                    on: {
                        scroll: t.onChapterListScroll
                    }
                }, [0 === r.length ? e("div", {
                    class: "loading"
                }, []) : null, e("div", {
                    attrs: {
                        id: "J_placeholder_top"
                    },
                    style: {
                        height: t.chapterListTopPlaceholderHeight
                    }
                }, []), r.map(function(o, c) {
                    if (c >= t.chapterListBlockTopIndex && c < (r.length > 50 ? t.chapterListBlockTopIndex + 50 : r.length))
                        return e("li", {
                            key: "chapterListKey_" + c,
                            class: n - 1 == c ? "current" : "",
                            on: {
                                click: function(e) {
                                    e.preventDefault(),
                                    e.stopPropagation(),
                                    t.onChapterListClick(c + 1)
                                }
                            }
                        }, [e("a", {
                            attrs: {
                                href: "javascript:void(0)"
                            }
                        }, [e("div", {
                            class: "title"
                        }, [c + 1, "-", o.title]), i && i.isMonthly && a.allowMonthly || t.chapterIsBought(o) ? "" : e("span", {
                            class: "vip"
                        }, [])])])
                }), e("div", {
                    attrs: {
                        id: "J_placeholder_bottom"
                    },
                    style: {
                        height: t.chapterListBottomPlaceholderHeight
                    }
                }, [])])])])
            },
            methods: {
                onChapterListScroll: function(e) {
                    var t = this
                      , o = t.chapterList;
                    if (o.length > 50) {
                        var n, r, i = e.target.scrollTop, a = t.chapterListItemHeight, c = Math.ceil(i / a) ? Math.ceil(i / a) : 1, s = o.length - c <= 50 ? o.length - 50 : 25 * (Math.ceil(c / 25) - 1), u = (t.chapterListScrollTop,
                        o.length % 25 < 25 ? 50 - o.length % 25 : 0);
                        n = s * a + "px",
                        r = o.length - c <= 50 ? "0px" : (o.length - s - u) * a + "px",
                        t.chapterListScrollTop = i,
                        t.chapterListBlockTopIndex = s,
                        t.chapterListTopPlaceholderHeight = n,
                        t.chapterListBottomPlaceholderHeight = r
                    }
                },
                chapterIsBought: function(e) {
                    var t = this
                      , o = !1
                      , n = t.chapterBought;
                    if (e.isVip) {
                        for (var r = 0; r < n.length; r++)
                            if (n[r]._id === e.id) {
                                o = !0;
                                break
                            }
                    } else
                        o = !0;
                    return o
                }
            }
        }),
        new n.default({
            el: "#J_readerWraper",
            data: {
                height: i.l(),
                isAsynData: !1,
                isFetching: i.b.get() && 1 == J_hiddenIsVipChapter.value,
                bookId: J_hiddenBookId.value,
                bookName: J_hiddenBookName.value,
                tocName: J_hiddenTocName.value,
                bookDetail: {},
                chapterIndex: +J_hiddenChapterIndex.value,
                isVip: 1 == J_hiddenIsVipChapter.value,
                accountCache: i.b.get(),
                isLogin: !(!i.b.get() || !i.b.get().token),
                isSubscribe: !1,
                userInfo: {},
                userConfig: {},
                chapterBought: [],
                currentChapterIsBought: 1 != J_hiddenIsVipChapter.value,
                chapterPriceInfo: {},
                chapterPayResult: null,
                chapterList: [],
                chapterListTemp: [],
                chapterSource: null,
                chapterDetail: JSON.parse(J_hiddenChapterDetail.value),
                chapterDetailArr: JSON.parse(J_hiddenChapterDetail.value) ? [JSON.parse(J_hiddenChapterDetail.value)] : [],
                showGuidePanel: !i.A.guide.get(),
                showControllPanel: !1,
                showDirectoryPanel: !1,
                theme: J_hiddenTheme.value,
                fontSize: +J_hiddenFontSize.value,
                cpsChannel: i.e.get(),
                cpsChannelBuyId: i.j("cpsChannelId") || i.j("promoterId") ? i.j("cpsChannelId") || i.j("promoterId") : i.f.get() ? i.f.get().cpsChannelId : "1",
                qrcodeDesc: "【追书神器服务号】，追书更方便，天天免费读\n截图，去微信扫一扫，从相册选择图片关注\n或去微信搜索【追书神器服务号】并关注",
                qrcodeSrc: "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQFt8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyWlNHZE1WYjRmUTAxMDAwMDAwM0kAAgSSRUdZAwQAAAAA",
                shouldScroll: !0,
                shouldScrollTimer: null,
                isPromotion: i.j("isPromotion"),
                modalBoxShow: !1,
                cpsThirdQrCodeId: i.j("cpsThirdQrCodeId"),
                showCpsThirdQrCode: !1,
                cpsThirdQrCodeContent: {},
                cpsThirdQrCodeUrl: "",
                localBooks: i.s.get() ? i.s.get() : [],
                bookRecord: "[{}]",
                readRecord: {},
                scrollLoadable: !0,
                showSetBookShelf: !1,
                loadType: "",
                showReadRecord: !1,
                fromBaidu: i.j("fromBaidu") || "",
                baiduT: i.j("t") || "",
                baiduSign: i.j("sign") || ""
            },
            created: function() {
                window.scrollTo(0, 0);
                var e = this
                  , t = i.A.controll.get()
                  , o = void 0;
                i.A.chapter.set(e.bookId, e.chapterIndex),
                e.theme = t && t.theme ? t.theme : e.theme,
                e.fontSize = t && t.fontSize ? t.fontSize : e.fontSize,
                e.getWechatChannelQrcode(),
                e.getBookDetail(),
                e.getBookshelf(),
                e.accountCache ? (o = e.initLoggedUser(),
                e.isVip ? o.then(function() {
                    return e.initBookChapterSource()
                }).then(function() {
                    e.getChapterDetail(e.chapterIndex)
                }) : (e.initBookChapterSource(),
                e.chapterDetailArr[0].isAsynData = !1,
                e.chapterDetailArr[0].cpIndex = e.chapterIndex,
                e.chapterDetailArr[0].currentChapterIsBought = e.currentChapterIsBought)) : e.fromBaidu ? (e.getBaiduCooperationKeys().then(function(t) {
                    e.chapterBought = t.keys
                }),
                e.isVip ? e.initBookChapterSource().then(function() {
                    e.getChapterDetail(e.chapterIndex)
                }) : (e.initBookChapterSource(),
                e.chapterDetailArr[0].isAsynData = !1,
                e.chapterDetailArr[0].cpIndex = e.chapterIndex,
                e.chapterDetailArr[0].currentChapterIsBought = e.currentChapterIsBought)) : (e.initBookChapterSource(),
                e.chapterDetailArr[0].isAsynData = !1,
                e.chapterDetailArr[0].cpIndex = e.chapterIndex,
                e.chapterDetailArr[0].currentChapterIsBought = e.currentChapterIsBought),
                i.q() && l.a.initWechatJSSDK(),
                i.q() && wx.ready(function() {
                    i.o({
                        title: "惊呆了！《" + e.bookName + "》，你一定要看！",
                        link: a.a.wechat.shareLink + "/book/" + e.bookId
                    })
                }),
                e.cpsThirdQrCodeId && (e.accountCache ? s.a.pvUvStatistics(e.cpsThirdQrCodeId, e.accountCache.user._id, i.g(new Date)) : s.a.pvUvStatistics(e.cpsThirdQrCodeId, "0000", i.g(new Date))),
                window.addEventListener("mousewheel", function(e) {
                    1 === e.deltaY && e.preventDefault()
                })
            },
            mounted: function() {
                window.scrollTo(0, 0);
                var e = this;
                e.isPromotion && e.chapterIndex > 10 && (e.modalBoxShow = !0),
                e.cpsThirdQrCodeId && e.getCpsThirdQrCode(e.cpsThirdQrCodeId, function() {
                    e.chapterIndex > e.cpsThirdQrCodeContent.FollowChapterId && (e.cpsThirdQrCodeContent.FollowType ? (e.cpsThirdQrCodeUrl = e.cpsThirdQrCodeContent.FollowTypeUrl,
                    e.showCpsThirdQrCode = !0) : location.href = e.cpsThirdQrCodeContent.FollowTypeUrl)
                }),
                window.onscroll = d(function() {
                    e.onReaderScroll()
                }, 0, 50)
            },
            methods: {
                getWechatChannelQrcode: function() {
                    var e = this
                      , t = e.cpsChannel ? e.cpsChannel.cpsChannelName : "100000159";
                    u.a.getWechatChannelQrcode(t).then(function(t) {
                        0 === t.code && (e.qrcodeDesc = t.result.qrcontent,
                        e.qrcodeSrc = t.result.qrurl)
                    })
                },
                updatedLocalBookRecord: function(e) {
                    var t = this
                      , o = void 0;
                    if (e) {
                        for (var n = 0; n < t.localBooks.length; n++)
                            t.localBooks[n]._id == t.bookId && (o = t.localBooks[n].cover,
                            t.localBooks[n] = {
                                _id: t.bookId,
                                cover: o,
                                title: t.bookName,
                                chapterIndexCache: e,
                                readRecord: {
                                    updated: (new Date).getTime()
                                }
                            });
                        i.s.set(t.localBooks)
                    } else {
                        for (var n = 0; n < t.localBooks.length; n++)
                            t.localBooks[n]._id == t.bookId && (o = t.localBooks[n].cover,
                            t.localBooks[n] = {
                                _id: t.bookId,
                                cover: o,
                                title: t.chapterDetail.title,
                                chapterIndexCache: t.chapterDetail.cpIndex,
                                readRecord: {
                                    updated: (new Date).getTime()
                                }
                            });
                        i.s.set(t.localBooks)
                    }
                },
                getReadRecord: function(e, t) {
                    var o = this;
                    u.a.getReadRecord(e, t).then(function(e) {
                        e && e.ok && (o.readRecord = e.record,
                        o.readRecord.book && o.readRecord.order !== o.chapterIndex && (o.showReadRecord = !0))
                    })
                },
                onReadRecordButtonClick: function(e) {
                    var t = this;
                    e ? (t.onChapterListClick(t.readRecord.order),
                    t.showReadRecord = !1) : t.showReadRecord = !1
                },
                uploadBookRecord: function(e) {
                    var t = this;
                    t.bookRecord = JSON.parse(t.bookRecord),
                    t.bookRecord[0].book = t.bookId,
                    t.bookRecord[0].tocId = t.chapterSource ? t.chapterSource._id : "",
                    t.bookRecord[0].title = t.chapterDetail.title || "",
                    t.bookRecord[0].tocName = t.chapterSource ? t.chapterSource.source : "",
                    t.bookRecord[0].order = e || t.chapterDetail.cpIndex,
                    t.bookRecord[0].wordIndex = 1,
                    t.bookRecord = JSON.stringify(t.bookRecord),
                    u.a.uploadBookRecord(t.accountCache.token, t.bookRecord)
                },
                toggleControllPanel: function(e) {
                    var t = this;
                    requestAnimationFrame(function() {
                        t.showControllPanel = e
                    }, 0)
                },
                onReaderGuidePanelClick: function() {},
                onReaderContentClick: function() {
                    this.toggleControllPanel(!0)
                },
                onPageReadOptionClick: function(e) {
                    var t = this;
                    e.stopPropagation(),
                    t.toggleControllPanel(!1)
                },
                onPreChapterClick: function() {
                    var e = this
                      , t = !1
                      , o = void 0;
                    if (e.loadType = "pre",
                    e.chapterIndex > 1) {
                        for (var n = e.chapterDetailArr.length - 1; n >= 0; n--)
                            e.chapterDetailArr[n].currentChapterIsBought ? e.chapterDetailArr[n].cpIndex == e.chapterIndex - 1 && (t = !0,
                            o = e.chapterDetailArr[n].title,
                            e.chapterDetail = e.chapterDetailArr[n],
                            e.accountCache ? e.uploadBookRecord() : e.updatedLocalBookRecord()) : e.chapterDetailArr.splice(n, 1);
                        e.currentChapterIsBought = !0,
                        t ? (document.title = e.bookName + "小说全文阅读无弹窗_" + o + "-追书神器官网",
                        document.documentElement.scrollTop = document.getElementById("J_cpIndex_" + (e.chapterIndex - 1)).offsetTop,
                        document.body.scrollTop = document.getElementById("J_cpIndex_" + (e.chapterIndex - 1)).offsetTop,
                        window.history.replaceState({}, 0, "/book/" + e.bookId + "/" + (e.chapterIndex - 1) + location.search),
                        e.chapterIndex = e.chapterIndex - 1,
                        i.A.chapter.set(e.bookId, e.chapterIndex)) : e.getChapterDetail(e.chapterIndex - 1)
                    }
                },
                onNextChapterClick: function() {
                    var e = this
                      , t = !1
                      , o = void 0;
                    if (e.loadType = "next",
                    e.chapterIndex < e.chapterList.length) {
                        for (var n = e.chapterDetailArr.length - 1; n >= 0; n--)
                            e.chapterDetailArr[n].currentChapterIsBought ? e.chapterDetailArr[n].cpIndex == e.chapterIndex + 1 && (t = !0,
                            o = e.chapterDetailArr[n].title,
                            e.chapterDetail = e.chapterDetailArr[n],
                            e.accountCache ? e.uploadBookRecord() : e.updatedLocalBookRecord()) : e.chapterDetailArr.splice(n, 1);
                        t ? (document.title = e.bookName + "小说全文阅读无弹窗_" + o + "-追书神器官网",
                        document.documentElement.scrollTop = document.getElementById("J_cpIndex_" + (e.chapterIndex + 1)).offsetTop,
                        document.body.scrollTop = document.getElementById("J_cpIndex_" + (e.chapterIndex + 1)).offsetTop,
                        window.history.replaceState({}, 0, "/book/" + e.bookId + "/" + (e.chapterIndex + 1) + location.search),
                        e.chapterIndex = e.chapterIndex + 1,
                        i.A.chapter.set(e.bookId, e.chapterIndex)) : this.getChapterDetail(e.chapterIndex + 1)
                    } else
                        location.href = "/continue/" + e.bookId
                },
                onChapterListClick: function(e) {
                    var t = this
                      , o = !1;
                    t.loadType = "chapterList",
                    t.scrollLoadable = !1;
                    for (var n = 0; n < t.chapterDetailArr.length; n++)
                        t.chapterDetailArr[n].cpIndex == e && (o = !0,
                        t.chapterDetail = t.chapterDetailArr[n],
                        t.accountCache ? t.uploadBookRecord() : t.updatedLocalBookRecord());
                    o ? (document.documentElement.scrollTop = document.getElementById("J_cpIndex_" + e).offsetTop,
                    document.body.scrollTop = document.getElementById("J_cpIndex_" + e).offsetTop,
                    window.history.replaceState({}, 0, "/book/" + t.bookId + "/" + e + location.search),
                    requestAnimationFrame(function() {
                        t.showControllPanel = !1,
                        t.showDirectoryPanel = !1,
                        t.chapterIndex = e,
                        t.scrollLoadable = !0,
                        i.A.chapter.set(t.bookId, t.chapterIndex)
                    }, 0)) : (t.isFetching = !0,
                    t.chapterDetailArr = [],
                    t.getChapterDetail(e))
                },
                onDirectoryButtonClick: function() {
                    var e = this;
                    e.toggleControllPanel(!1),
                    e.showDirectoryPanel = !0,
                    0 === e.chapterList.length && h.setTimeout(function() {
                        e.getBookChapterList()
                    }, 200)
                },
                onThemeButtonClick: function(e) {
                    var t = this;
                    this.theme = e,
                    this.toggleControllPanel(!1),
                    i.A.controll.set({
                        theme: t.theme
                    })
                },
                onChangeFontsize: function(e) {
                    var t = this
                      , o = "less" === e ? t.fontSize - 2 : t.fontSize + 2;
                    if ("less" === e && 16 === t.fontSize || "plus" === e && 24 === t.fontSize)
                        return t.toggleControllPanel(!1),
                        !1;
                    requestAnimationFrame(function() {
                        t.fontSize = o,
                        i.A.controll.set({
                            fontSize: o
                        })
                    }, 0)
                },
                onPageChargePanelClick: function(e) {
                    var t = this;
                    e.stopPropagation(),
                    t.toggleControllPanel(!0)
                },
                stopBlur: function(e) {
                    e.stopPropagation()
                },
                onDirectoryPanelClose: function() {
                    this.showDirectoryPanel = !1
                },
                onModalBoxClose: function() {
                    this.modalBoxShow = !1
                },
                isInBookshelf: function(e) {
                    for (var t = !1, o = 0; o < e.length; o++)
                        if (e[o]._id === this.bookId) {
                            t = !0;
                            break
                        }
                    return t
                },
                getBookshelf: function() {
                    var e = this;
                    e.accountCache ? s.a.getBookshelf(e.accountCache.token).then(function(t) {
                        if (e.isSubscribe = e.isInBookshelf(t.bookshelf),
                        e.isSubscribe) {
                            for (var o = 0; o < t.bookshelf.length; o++)
                                if (t.bookshelf[o]._id === e.bookId) {
                                    e.readRecord = t.bookshelf[o].readRecord,
                                    e.readRecord.book && e.readRecord.order !== e.chapterIndex && (e.showReadRecord = !0,
                                    e.accountCache ? e.uploadBookRecord(e.chapterIndex) : e.updatedLocalBookRecord(e.chapterIndex));
                                    break
                                }
                        } else
                            e.getReadRecord(e.bookId, e.accountCache.token)
                    }) : e.isSubscribe = e.isInBookshelf(e.localBooks)
                },
                toggleBookshelf: function(e, t) {
                    var o = this;
                    o.accountCache ? s.a.toggleBookshelf(o.accountCache.token, o.bookId, !o.isSubscribe, t).then(function() {
                        o.isSubscribe = !o.isSubscribe,
                        "back" == e && history.go(-1)
                    }) : (o.isSubscribe ? (o.localBooks.forEach(function(e, t, n) {
                        e._id == o.bookId && n.splice(t, 1)
                    }),
                    i.s.set(o.localBooks)) : (o.localBooks.push({
                        _id: o.bookId,
                        cover: "/icon/img-bk.png",
                        title: o.bookName,
                        chapterIndexCache: o.chapterIndex,
                        readRecord: {
                            updated: (new Date).getTime()
                        }
                    }),
                    i.s.set(o.localBooks)),
                    o.isSubscribe = !o.isSubscribe,
                    "back" == e && history.go(-1))
                },
                getBookChapterList: function() {
                    var e = this;
                    u.a.getBookChapterList(e.bookId).then(function(t) {
                        e.chapterList = t.data.toc.chapters
                    })
                },
                getUserInfo: function() {
                    var e = this;
                    return s.a.getAccountInfo(e.accountCache.token)
                },
                getUserConfig: function() {
                    var e = this;
                    return s.a.getUserConfig(e.accountCache.token)
                },
                getBookChapterBought: function() {
                    var e = this;
                    return u.a.getBookChapterBought(e.accountCache.token, e.bookId)
                },
                getBookSource: function() {
                    var e = this;
                    return u.a.getBookSource(e.bookId)
                },
                getBookChapterListMweb: function() {
                    var e = this;
                    return u.a.getBookChapterListMweb(e.chapterSource._id)
                },
                getBookMixSource: function() {
                    var e = this;
                    return u.a.getBookMixSource(e.bookId)
                },
                getBookChapterPrice: function() {
                    var e = this;
                    return u.a.getBookChapterPrice(e.accountCache.token, e.bookId, e.chapterSource._id, e.chapterIndex, 1)
                },
                chapterBoughtFilter: function(e) {
                    var t = this.chapterBought;
                    return !!e.isVip && 0 == t.filter(function(t) {
                        return t._id === e.id
                    }).length
                },
                initLoggedUser: function() {
                    var e = this;
                    return e.getUserInfo().then(function(t) {
                        return e.userInfo = t,
                        e.getUserConfig()
                    }).then(function(t) {
                        return e.userConfig = t.user,
                        e.getBookChapterBought()
                    }).then(function(t) {
                        e.fromBaidu ? e.getBaiduCooperationKeys().then(function(t) {
                            e.chapterBought = t.keys
                        }) : e.chapterBought = t.keys
                    })
                },
                updateUserInfo: function() {
                    var e = this;
                    e.getUserInfo().then(function(t) {
                        e.userInfo = t
                    })
                },
                getBookDetail: function() {
                    var e = this;
                    u.a.getBookDetail(e.bookId).then(function(t) {
                        e.bookDetail = t,
                        e.setLocalRecord()
                    })
                },
                initBookChapterSource: function() {
                    var e = this;
                    return e.getBookSource().then(function(t) {
                        if (t && t.length > 0 && (e.chapterSource = t[0],
                        0 === e.chapterList.length))
                            return e.getBookChapterListMweb()
                    }).then(function(t) {
                        t && t.chapters && t.chapters.length > 0 ? (e.chapterList = t.chapters,
                        e.bookName = t.bookName) : e.getBookMixSource().then(function(t) {
                            t && t.length > 0 && (e.chapterSource = t[0],
                            0 === e.chapterList.length && e.getBookChapterListMweb().then(function(t) {
                                t && t.chapters && t.chapters.length > 0 && (e.chapterList = t.chapters,
                                e.bookName = t.bookName)
                            }))
                        })
                    })
                },
                chapterIsBought: function(e, t) {
                    var o = !1;
                    if (!1 === t.isVip)
                        o = !0;
                    else
                        for (var n = 0; n < e.length; n++)
                            if (e[n]._id === t.id) {
                                o = !0;
                                break
                            }
                    return o
                },
                getBoughtChapterKey: function(e, t) {
                    for (var o = null, n = 0; n < t.length; n++)
                        t[n]._id === e && (o = t[n].key);
                    return o
                },
                getChapterDetail: function(e) {
                    var t = this
                      , o = t.bookId
                      , n = t.chapterSource
                      , r = t.chapterList
                      , a = t.chapterBought
                      , s = t.userConfig
                      , l = t.userInfo
                      , h = (t.chapterDetailArr,
                    t.accountCache)
                      , d = void 0
                      , p = void 0
                      , f = t.chapterList[e - 1].link
                      , g = void t.chapterList[e - 1].id
                      , m = location.search;
                    t.isFetching = !0,
                    t.isAsynData = !0,
                    i.A.chapter.set(t.bookId, e),
                    requestAnimationFrame(function() {
                        t.showControllPanel = !1,
                        t.showDirectoryPanel = !1,
                        t.chapterIndex = e
                    }, 0),
                    t.isPromotion && e > 10 && (t.modalBoxShow = !0),
                    t.cpsThirdQrCodeId && e > t.cpsThirdQrCodeContent.FollowChapterId && (t.cpsThirdQrCodeContent.FollowType ? (t.cpsThirdQrCodeUrl = t.cpsThirdQrCodeContent.FollowTypeUrl,
                    t.showCpsThirdQrCode = !0) : location.href = t.cpsThirdQrCodeContent.FollowTypeUrl),
                    window.history.replaceState({}, 0, "/book/" + o + "/" + e + m),
                    window._czc && window._czc.push(["_trackPageview", location.pathname + m]),
                    window.ga && window.ga("set", "page", location.pathname + m),
                    window.ga && window.ga("send", "pageview"),
                    u.a.getBookChapterDetailMweb(f).then(function(f) {
                        if (f && f.ok)
                            if (g = f.chapter,
                            g.body = g.cpContent || g.body,
                            p = t.chapterIsBought(a, r[e - 1])) {
                                if (!1 === r[e - 1].isVip ? (g.body = g.body.replace(/\s*\n*\s{2,}/g, "</p><p>"),
                                g.body = g.body.replace(/\n+/g, "</p><p>"),
                                g.body = "<p>" + g.body + "</p>") : g.body = c.a(g.body, t.getBoughtChapterKey(g.id, a)),
                                t.currentChapterIsBought = p,
                                t.chapterDetail = g,
                                g.cpIndex = e,
                                g.isAsynData = !0,
                                g.currentChapterIsBought = p,
                                t.chapterDetailArr.push(g),
                                t.isFetching = !1,
                                i.C(t.bookName + "-" + e + "，" + g.title),
                                "scroll" === t.loadType)
                                    t.scrollLoadable = !0;
                                else if ("chapterList" === t.loadType) {
                                    var m = [];
                                    document.documentElement.scrollTop = 0,
                                    document.body.scrollTop = 0,
                                    m.push(g),
                                    t.chapterDetailArr = m,
                                    t.scrollLoadable = !0
                                }
                                t.accountCache ? t.uploadBookRecord() : t.updatedLocalBookRecord(),
                                i.A.chapter.set(t.bookId, t.chapterIndex)
                            } else
                                h && h.token ? t.getBookChapterPrice().then(function(f) {
                                    d = f,
                                    l && l.isMonthly && d.allowMonthly || s.autoPurchase && i.c.get(o) ? 9 === t.bookDetail.buytype ? u.a.batchBuyBookChapter(h.token, r.length, o, n._id, t.cpsChannelBuyId).then(function(o) {
                                        o && o.ok ? (a = o.chapters,
                                        t.chapterPayResult = o,
                                        t.chapterBought = a,
                                        g.body = c.a(g.body, t.getBoughtChapterKey(g.id, a)),
                                        t.chapterDetail = g,
                                        g.cpIndex = e,
                                        g.isAsynData = !0,
                                        g.currentChapterIsBought = !0,
                                        t.chapterDetailArr.push(g),
                                        t.currentChapterIsBought = !0,
                                        t.bookRecordAndPosition()) : (t.chapterPayResult = o,
                                        t.chapterDetail = g,
                                        g.cpIndex = e,
                                        g.isAsynData = !0,
                                        g.currentChapterIsBought = !1,
                                        t.chapterDetailArr.push(g),
                                        t.chapterPriceInfo = d,
                                        t.currentChapterIsBought = !1),
                                        t.isFetching = !1,
                                        i.C(t.bookName + "-" + e + "，" + g.title),
                                        t.updateUserInfo()
                                    }) : u.a.singleBuyBookChapter(h.token, g.id, t.cpsChannelBuyId).then(function(o) {
                                        o && o.ok ? (g.body = c.a(g.cpContent || g.body, o.key),
                                        a.push({
                                            _id: o._id,
                                            key: o.key
                                        }),
                                        t.chapterPayResult = o,
                                        t.chapterBought = a,
                                        t.chapterDetail = g,
                                        g.cpIndex = e,
                                        g.isAsynData = !0,
                                        g.currentChapterIsBought = !0,
                                        t.chapterDetailArr.push(g),
                                        t.currentChapterIsBought = !0) : (t.chapterPayResult = o,
                                        t.chapterDetail = g,
                                        g.cpIndex = e,
                                        g.isAsynData = !0,
                                        g.currentChapterIsBought = !1,
                                        t.chapterDetailArr.push(g),
                                        t.chapterPriceInfo = d,
                                        t.currentChapterIsBought = !1),
                                        t.isFetching = !1,
                                        i.C(t.bookName + "-" + e + "，" + g.title),
                                        t.updateUserInfo()
                                    }).then(function() {
                                        t.bookRecordAndPosition()
                                    }) : (t.currentChapterIsBought = p,
                                    t.chapterPriceInfo = d,
                                    t.chapterDetail = g,
                                    g.cpIndex = e,
                                    g.currentChapterIsBought = p,
                                    g.isAsynData = !0,
                                    t.chapterDetailArr.push(g),
                                    t.isFetching = !1)
                                }) : (t.currentChapterIsBought = p,
                                t.chapterDetail = g,
                                g.cpIndex = e,
                                g.isAsynData = !0,
                                g.currentChapterIsBought = p,
                                t.chapterDetailArr.push(g),
                                t.isFetching = !1)
                    }).then(function() {
                        t.setLocalRecord(),
                        requestAnimationFrame(function() {
                            if ("scroll" === t.loadType)
                                ;
                            else if ("pre" === t.loadType) {
                                var e = t.chapterDetailArr;
                                e.sort(function(e, t) {
                                    return e.cpIndex - t.cpIndex
                                }),
                                t.chapterDetailArr = e,
                                document.documentElement.scrollTop = 0,
                                document.body.scrollTop = 0
                            } else
                                "next" === t.loadType && document.getElementById("J_cpIndex_" + t.chapterIndex) && (document.documentElement.scrollTop = document.getElementById("J_cpIndex_" + t.chapterIndex).offsetTop,
                                document.body.scrollTop = document.getElementById("J_cpIndex_" + t.chapterIndex).offsetTop)
                        }, 0)
                    })
                },
                buyCurrentChapter: function() {
                    var e = this
                      , t = i.b.get()
                      , o = (e.userInfo,
                    e.bookId)
                      , n = e.chapterSource
                      , r = (e.currentCapterIndex,
                    e.chapterBought)
                      , a = e.chapterDetail
                      , s = e.chapterList
                      , l = e.chapterIndex;
                    e.chapterDetailArr,
                    e.chapterList[l - 1].id,
                    t && t.token && (e.isFetching = !0,
                    9 === e.bookDetail.buytype ? u.a.batchBuyBookChapter(t.token, s.length, o, n._id, e.cpsChannelBuyId).then(function(t) {
                        t && t.ok ? (i.c.set(o),
                        r = t.chapters,
                        e.chapterPayResult = t,
                        e.chapterBought = r,
                        a.body = c.a(a.body, e.getBoughtChapterKey(a.id, r)),
                        e.chapterDetail = a,
                        e.currentChapterIsBought = !0,
                        i.C(e.bookName + "-" + e.chapterIndex + "，" + a.title),
                        e.updateUserInfo()) : e.chapterPayResult = t,
                        e.isFetching = !1,
                        e.scrollLoadable = !0
                    }) : u.a.singleBuyBookChapter(t.token, a.id, e.cpsChannelBuyId).then(function(t) {
                        t && t.ok ? (i.c.set(o),
                        a.body = c.a(a.cpContent || a.body, t.key),
                        r.push({
                            _id: t._id,
                            key: t.key
                        }),
                        e.chapterPayResult = t,
                        e.chapterBought = r,
                        e.chapterDetail = a,
                        e.currentChapterIsBought = !0,
                        i.C(e.bookName + "-" + e.chapterIndex + "，" + a.title),
                        e.updateUserInfo()) : e.chapterPayResult = t,
                        e.isFetching = !1
                    }).then(function() {
                        requestAnimationFrame(function() {
                            document.documentElement.scrollTop = document.getElementById("J_cpIndex_" + e.chapterIndex).offsetTop,
                            document.body.scrollTop = document.getElementById("J_cpIndex_" + e.chapterIndex).offsetTop,
                            e.scrollLoadable = !0,
                            e.accountCache ? e.uploadBookRecord() : e.updatedLocalBookRecord()
                        }, 0)
                    }))
                },
                onReaderScroll: function() {
                    var e = this
                      , t = document.documentElement.scrollTop || document.body.scrollTop
                      , o = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                      , n = document.body.scrollHeight;
                    e.currentChapterIsBought && t + o > n - 5 && e.scrollLoadable && (e.scrollLoadable = !1,
                    e.loadType = "scroll",
                    h.setTimeout(function() {
                        e.chapterIndex < e.chapterList.length ? e.getChapterDetail(e.chapterDetailArr[e.chapterDetailArr.length - 1].cpIndex + 1) : location.href = "/continue/" + e.bookId
                    }, 200))
                },
                bookRecordAndPosition: function() {
                    var e = this;
                    if (i.A.chapter.set(e.bookId, e.chapterIndex),
                    e.accountCache ? e.uploadBookRecord() : e.updatedLocalBookRecord(),
                    "next" === e.loadType)
                        document.getElementById("J_cpIndex_" + e.chapterIndex) && (document.documentElement.scrollTop = document.getElementById("J_cpIndex_" + e.chapterIndex).offsetTop,
                        document.body.scrollTop = document.getElementById("J_cpIndex_" + e.chapterIndex).offsetTop);
                    else if ("scroll" === e.loadType)
                        e.scrollLoadable = !0;
                    else if ("chapterList" === e.loadType) {
                        var t = [];
                        t.push(e.chapterDetail),
                        e.chapterDetailArr = t,
                        e.scrollLoadable = !0,
                        document.documentElement.scrollTop = 0,
                        document.body.scrollTop = 0
                    } else if ("pre" === e.loadType) {
                        var o = e.chapterDetailArr;
                        o.sort(function(e, t) {
                            return e.cpIndex - t.cpIndex
                        }),
                        e.chapterDetailArr = o,
                        document.documentElement.scrollTop = 0,
                        document.body.scrollTop = 0
                    }
                },
                backSetBookShelf: function() {
                    var e = this;
                    e.isSubscribe ? history.go(-1) : e.showSetBookShelf = !0
                },
                backClickSetBookShelf: function(e) {
                    var t = this;
                    e ? t.toggleBookshelf("back") : history.go(-1)
                },
                getCpsThirdQrCode: function(e, t) {
                    var o = this;
                    u.a.getCpsThirdQrCode(e).then(function(e) {
                        e && 200 === e.ResultNO && e.Data.IsMustFollow && (o.cpsThirdQrCodeContent = e.Data,
                        t())
                    })
                },
                toPayPage: function() {
                    var e = this;
                    i.G.set(),
                    location.href = "/pay/h5/index?paySource=/book/" + e.bookId + "/" + e.chapterIndex
                },
                getBaiduCooperationKeys: function() {
                    var e = this;
                    return u.a.getBaiduCooperationKeys(e.bookId, e.baiduT, e.baiduSign)
                },
                setLocalRecord: function() {
                    var e = this
                      , t = i.B.get() || []
                      , o = !1;
                    0 !== t.length ? (t.forEach(function(t, n, r) {
                        t._id === e.bookId && (o = !0,
                        t.index = e.chapterIndex,
                        t.time = new Date)
                    }),
                    o ? i.B.set(t) : (t.push({
                        _id: e.bookDetail._id,
                        cover: e.bookDetail.cover,
                        title: e.bookDetail.title,
                        index: e.chapterIndex,
                        time: new Date
                    }),
                    t.length > 20 && t.splice(0, 1),
                    i.B.set(t))) : (console.log(i.g(new Date)),
                    t.push({
                        _id: e.bookDetail._id,
                        cover: e.bookDetail.cover,
                        title: e.bookDetail.title,
                        index: e.chapterIndex,
                        time: new Date
                    }),
                    i.B.set(t))
                }
            }
        })
    },
    imdR: function(e, t, o) {
        !function() {
            var e = "undefined" == typeof window ? o("Cv7i").Crypto : window.Crypto
              , t = e.util
              , n = e.charenc
              , r = n.UTF8
              , i = (n.Binary,
            e.MARC4 = {
                encrypt: function(o, n) {
                    var a = r.stringToBytes(o)
                      , c = t.randomBytes(16)
                      , s = n.constructor == String ? e.PBKDF2(n, c, 32, {
                        asBytes: !0
                    }) : n;
                    return i._marc4(a, s, 1536),
                    t.bytesToBase64(c.concat(a))
                },
                decrypt: function(o, n) {
                    var a = t.base64ToBytes(o)
                      , c = a.splice(0, 16)
                      , s = n.constructor == String ? e.PBKDF2(n, c, 32, {
                        asBytes: !0
                    }) : n;
                    return i._marc4(a, s, 1536),
                    r.bytesToString(a)
                },
                _marc4: function(e, t, o) {
                    var n, r, i, a;
                    for (n = 0,
                    i = []; n < 256; n++)
                        i[n] = n;
                    for (n = 0,
                    r = 0; n < 256; n++)
                        r = (r + i[n] + t[n % t.length]) % 256,
                        a = i[n],
                        i[n] = i[r],
                        i[r] = a;
                    n = r = 0;
                    for (var t = -o; t < e.length; t++)
                        n = (n + 1) % 256,
                        r = (r + i[n]) % 256,
                        a = i[n],
                        i[n] = i[r],
                        i[r] = a,
                        t < 0 || (e[t] ^= i[(i[n] + i[r]) % 256])
                }
            })
        }()
    },
    nW7E: function(e, t) {},
    pBGv: function(e, t) {
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function n() {
            throw new Error("clearTimeout has not been defined")
        }
        function r(e) {
            if (l === setTimeout)
                return setTimeout(e, 0);
            if ((l === o || !l) && setTimeout)
                return l = setTimeout,
                setTimeout(e, 0);
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }
        function i(e) {
            if (h === clearTimeout)
                return clearTimeout(e);
            if ((h === n || !h) && clearTimeout)
                return h = clearTimeout,
                clearTimeout(e);
            try {
                return h(e)
            } catch (t) {
                try {
                    return h.call(null, e)
                } catch (t) {
                    return h.call(this, e)
                }
            }
        }
        function a() {
            g && p && (g = !1,
            p.length ? f = p.concat(f) : m = -1,
            f.length && c())
        }
        function c() {
            if (!g) {
                var e = r(a);
                g = !0;
                for (var t = f.length; t; ) {
                    for (p = f,
                    f = []; ++m < t; )
                        p && p[m].run();
                    m = -1,
                    t = f.length
                }
                p = null,
                g = !1,
                i(e)
            }
        }
        function s(e, t) {
            this.fun = e,
            this.array = t
        }
        function u() {}
        var l, h, d = e.exports = {};
        !function() {
            try {
                l = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                l = o
            }
            try {
                h = "function" == typeof clearTimeout ? clearTimeout : n
            } catch (e) {
                h = n
            }
        }();
        var p, f = [], g = !1, m = -1;
        d.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
            f.push(new s(e,t)),
            1 !== f.length || g || r(c)
        }
        ,
        s.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        d.title = "browser",
        d.browser = !0,
        d.env = {},
        d.argv = [],
        d.version = "",
        d.versions = {},
        d.on = u,
        d.addListener = u,
        d.once = u,
        d.off = u,
        d.removeListener = u,
        d.removeAllListeners = u,
        d.emit = u,
        d.prependListener = u,
        d.prependOnceListener = u,
        d.listeners = function(e) {
            return []
        }
        ,
        d.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        d.cwd = function() {
            return "/"
        }
        ,
        d.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        d.umask = function() {
            return 0
        }
    },
    qrAv: function(e, t, o) {
        (function(e, t) {
            !function(e, o) {
                "use strict";
                function n(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), o = 0; o < t.length; o++)
                        t[o] = arguments[o + 1];
                    var n = {
                        callback: e,
                        args: t
                    };
                    return u[s] = n,
                    c(s),
                    s++
                }
                function r(e) {
                    delete u[e]
                }
                function i(e) {
                    var t = e.callback
                      , n = e.args;
                    switch (n.length) {
                    case 0:
                        t();
                        break;
                    case 1:
                        t(n[0]);
                        break;
                    case 2:
                        t(n[0], n[1]);
                        break;
                    case 3:
                        t(n[0], n[1], n[2]);
                        break;
                    default:
                        t.apply(o, n)
                    }
                }
                function a(e) {
                    if (l)
                        setTimeout(a, 0, e);
                    else {
                        var t = u[e];
                        if (t) {
                            l = !0;
                            try {
                                i(t)
                            } finally {
                                r(e),
                                l = !1
                            }
                        }
                    }
                }
                if (!e.setImmediate) {
                    var c, s = 1, u = {}, l = !1, h = e.document, d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    d = d && d.setTimeout ? d : e,
                    "[object process]" === {}.toString.call(e.process) ? function() {
                        c = function(e) {
                            t.nextTick(function() {
                                a(e)
                            })
                        }
                    }() : function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0
                              , o = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            }
                            ,
                            e.postMessage("", "*"),
                            e.onmessage = o,
                            t
                        }
                    }() ? function() {
                        var t = "setImmediate$" + Math.random() + "$"
                          , o = function(o) {
                            o.source === e && "string" == typeof o.data && 0 === o.data.indexOf(t) && a(+o.data.slice(t.length))
                        };
                        e.addEventListener ? e.addEventListener("message", o, !1) : e.attachEvent("onmessage", o),
                        c = function(o) {
                            e.postMessage(t + o, "*")
                        }
                    }() : e.MessageChannel ? function() {
                        var e = new MessageChannel;
                        e.port1.onmessage = function(e) {
                            a(e.data)
                        }
                        ,
                        c = function(t) {
                            e.port2.postMessage(t)
                        }
                    }() : h && "onreadystatechange"in h.createElement("script") ? function() {
                        var e = h.documentElement;
                        c = function(t) {
                            var o = h.createElement("script");
                            o.onreadystatechange = function() {
                                a(t),
                                o.onreadystatechange = null,
                                e.removeChild(o),
                                o = null
                            }
                            ,
                            e.appendChild(o)
                        }
                    }() : function() {
                        c = function(e) {
                            setTimeout(a, 0, e)
                        }
                    }(),
                    d.setImmediate = n,
                    d.clearImmediate = r
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }
        ).call(t, o("h6ac"), o("pBGv"))
    },
    vY1U: function(e, t, o) {
        !function() {
            function e(e, t) {
                for (var o = 0, n = 0; n < 8; n++) {
                    1 & t && (o ^= e);
                    var r = 128 & e;
                    e = e << 1 & 255,
                    r && (e ^= 27),
                    t >>>= 1
                }
                return o
            }
            for (var t = "undefined" == typeof window ? o("Cv7i").Crypto : window.Crypto, n = t.util, r = t.charenc, i = r.UTF8, a = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], c = [], s = 0; s < 256; s++)
                c[a[s]] = s;
            for (var u = [], l = [], h = [], d = [], p = [], f = [], s = 0; s < 256; s++)
                u[s] = e(s, 2),
                l[s] = e(s, 3),
                h[s] = e(s, 9),
                d[s] = e(s, 11),
                p[s] = e(s, 13),
                f[s] = e(s, 14);
            var g, m, y, v = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], b = [[], [], [], []], k = t.AES = {
                encrypt: function(e, o, r) {
                    r = r || {};
                    var a = r.mode || new t.mode.OFB;
                    a.fixOptions && a.fixOptions(r);
                    var c = e.constructor == String ? i.stringToBytes(e) : e
                      , s = r.iv || n.randomBytes(4 * k._blocksize)
                      , u = o.constructor == String ? t.PBKDF2(o, s, 32, {
                        asBytes: !0
                    }) : o;
                    return k._init(u),
                    a.encrypt(k, c, s),
                    c = r.iv ? c : s.concat(c),
                    r && r.asBytes ? c : n.bytesToBase64(c)
                },
                decrypt: function(e, o, r) {
                    r = r || {};
                    var a = r.mode || new t.mode.OFB;
                    a.fixOptions && a.fixOptions(r);
                    var c = e.constructor == String ? n.base64ToBytes(e) : e
                      , s = r.iv || c.splice(0, 4 * k._blocksize)
                      , u = o.constructor == String ? t.PBKDF2(o, s, 32, {
                        asBytes: !0
                    }) : o;
                    return k._init(u),
                    a.decrypt(k, c, s),
                    r && r.asBytes ? c : i.bytesToString(c)
                },
                _blocksize: 4,
                _encryptblock: function(e, t) {
                    for (var o = 0; o < k._blocksize; o++)
                        for (var n = 0; n < 4; n++)
                            b[o][n] = e[t + 4 * n + o];
                    for (var o = 0; o < 4; o++)
                        for (var n = 0; n < 4; n++)
                            b[o][n] ^= y[n][o];
                    for (var r = 1; r < m; r++) {
                        for (var o = 0; o < 4; o++)
                            for (var n = 0; n < 4; n++)
                                b[o][n] = a[b[o][n]];
                        b[1].push(b[1].shift()),
                        b[2].push(b[2].shift()),
                        b[2].push(b[2].shift()),
                        b[3].unshift(b[3].pop());
                        for (var n = 0; n < 4; n++) {
                            var i = b[0][n]
                              , c = b[1][n]
                              , s = b[2][n]
                              , h = b[3][n];
                            b[0][n] = u[i] ^ l[c] ^ s ^ h,
                            b[1][n] = i ^ u[c] ^ l[s] ^ h,
                            b[2][n] = i ^ c ^ u[s] ^ l[h],
                            b[3][n] = l[i] ^ c ^ s ^ u[h]
                        }
                        for (var o = 0; o < 4; o++)
                            for (var n = 0; n < 4; n++)
                                b[o][n] ^= y[4 * r + n][o]
                    }
                    for (var o = 0; o < 4; o++)
                        for (var n = 0; n < 4; n++)
                            b[o][n] = a[b[o][n]];
                    b[1].push(b[1].shift()),
                    b[2].push(b[2].shift()),
                    b[2].push(b[2].shift()),
                    b[3].unshift(b[3].pop());
                    for (var o = 0; o < 4; o++)
                        for (var n = 0; n < 4; n++)
                            b[o][n] ^= y[4 * m + n][o];
                    for (var o = 0; o < k._blocksize; o++)
                        for (var n = 0; n < 4; n++)
                            e[t + 4 * n + o] = b[o][n]
                },
                _decryptblock: function(e, t) {
                    for (var o = 0; o < k._blocksize; o++)
                        for (var n = 0; n < 4; n++)
                            b[o][n] = e[t + 4 * n + o];
                    for (var o = 0; o < 4; o++)
                        for (var n = 0; n < 4; n++)
                            b[o][n] ^= y[4 * m + n][o];
                    for (var r = 1; r < m; r++) {
                        b[1].unshift(b[1].pop()),
                        b[2].push(b[2].shift()),
                        b[2].push(b[2].shift()),
                        b[3].push(b[3].shift());
                        for (var o = 0; o < 4; o++)
                            for (var n = 0; n < 4; n++)
                                b[o][n] = c[b[o][n]];
                        for (var o = 0; o < 4; o++)
                            for (var n = 0; n < 4; n++)
                                b[o][n] ^= y[4 * (m - r) + n][o];
                        for (var n = 0; n < 4; n++) {
                            var i = b[0][n]
                              , a = b[1][n]
                              , s = b[2][n]
                              , u = b[3][n];
                            b[0][n] = f[i] ^ d[a] ^ p[s] ^ h[u],
                            b[1][n] = h[i] ^ f[a] ^ d[s] ^ p[u],
                            b[2][n] = p[i] ^ h[a] ^ f[s] ^ d[u],
                            b[3][n] = d[i] ^ p[a] ^ h[s] ^ f[u]
                        }
                    }
                    b[1].unshift(b[1].pop()),
                    b[2].push(b[2].shift()),
                    b[2].push(b[2].shift()),
                    b[3].push(b[3].shift());
                    for (var o = 0; o < 4; o++)
                        for (var n = 0; n < 4; n++)
                            b[o][n] = c[b[o][n]];
                    for (var o = 0; o < 4; o++)
                        for (var n = 0; n < 4; n++)
                            b[o][n] ^= y[n][o];
                    for (var o = 0; o < k._blocksize; o++)
                        for (var n = 0; n < 4; n++)
                            e[t + 4 * n + o] = b[o][n]
                },
                _init: function(e) {
                    g = e.length / 4,
                    m = g + 6,
                    k._keyexpansion(e)
                },
                _keyexpansion: function(e) {
                    y = [];
                    for (var t = 0; t < g; t++)
                        y[t] = [e[4 * t], e[4 * t + 1], e[4 * t + 2], e[4 * t + 3]];
                    for (var t = g; t < k._blocksize * (m + 1); t++) {
                        var o = [y[t - 1][0], y[t - 1][1], y[t - 1][2], y[t - 1][3]];
                        t % g == 0 ? (o.push(o.shift()),
                        o[0] = a[o[0]],
                        o[1] = a[o[1]],
                        o[2] = a[o[2]],
                        o[3] = a[o[3]],
                        o[0] ^= v[t / g]) : g > 6 && t % g == 4 && (o[0] = a[o[0]],
                        o[1] = a[o[1]],
                        o[2] = a[o[2]],
                        o[3] = a[o[3]]),
                        y[t] = [y[t - g][0] ^ o[0], y[t - g][1] ^ o[1], y[t - g][2] ^ o[2], y[t - g][3] ^ o[3]]
                    }
                }
            }
        }()
    }
}, [39]);
