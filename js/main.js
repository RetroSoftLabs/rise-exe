(() => {
    "use strict";
    var t, s = {
            8733: (e, t, s) => {
                s.d(t, {
                    Z: () => p,
                    k: () => c
                });
                var i = s(9980),
                    n = s(9202),
                    o = (s(3915), s(5315)),
                    r = s(3698),
                    a = s(4547),
                    l = s(4909),
                    h = s(2608),
                    d = s(4071);
                class c {
                    spectate(e) {
                        if (a.Z.alive) return !1;
                        i.Z.spectating = !0;
                        const t = d.Z.fromSize(e ? 3 : 1);
                        t.writeUInt8(2), e && t.writeInt16LE(e), n.Z.send(t)
                    }
                    join() {
                        const e = d.Z.fromSize(1);
                        e.writeUInt8(1), (0, l.uY)(e), n.Z.send(e)
                    }
                    spectateLockToggle() {
                        n.Z.sendOpcode(10)
                    }
                    feed(e) {
                        const t = !!arguments.length,
                            s = d.Z.fromSize(t ? 2 : 1);
                        s.writeUInt8(21), t && s.writeUInt8(+e), n.Z.send(s)
                    }
                    freezeMouse(e) {
                        i.Z.running && (void 0 === e && (e = !i.Z.mouseFrozen), e && (this.stopMovement(!1), this.lockLinesplit(!1), i.Z.updateMouse(!0), n.Z.sendMouse()), i.Z.mouseFrozen = e, i.Z.emit("update-cautions", {
                            mouseFrozen: e
                        }))
                    }
                    stopMovement(e) {
                        i.Z.running && (void 0 === e && (e = !i.Z.moveToCenterOfCells), e && (this.freezeMouse(!1), this.lockLinesplit(!1)), this.moveToCenterOfCells = e, i.Z.emit("update-cautions", {
                            moveToCenterOfCells: e
                        }))
                    }
                    lockLinesplit(e) {
                        i.Z.running && (void 0 === e && (e = !i.Z.stopMovePackets), e && (i.Z.updateMouse(), n.Z.sendMouse(), n.Z.sendOpcode(15), this.freezeMouse(!1), this.stopMovement(!1)), i.Z.stopMovePackets = e, i.Z.emit("update-cautions", {
                            lockLinesplit: e
                        }))
                    }
                    linesplit() {
                        this.linesplitUnlock && clearTimeout(this.linesplitUnlock), this.freezeMouse(!0), this.split(3), this.linesplitUnlock = setTimeout((() => {
                            delete this.linesplitUnlock, this.freezeMouse(!1)
                        }), 1500)
                    }
                    split(e, t = 0) {
                        if (i.Z.stopMovePackets || n.Z.sendMouse(), t) return void setTimeout((() => this.split(e)), t);
                        const s = d.Z.fromSize(2);
                        s.writeUInt8(17), s.writeUInt8(e), n.Z.send(s), i.Z.splitCount += e, i.Z.splitCount <= 2 ? i.Z.moveWaitUntil = performance.now() + 300 : (i.Z.moveWaitUntil = 0, i.Z.splitCount = 0)
                    }
                    zoom(e) {
                        const t = 1 - r.Z.cameraZoomSpeed / 100;
                        let s = 0;
                        e.detail ? s = e.detail / 3 : e.wheelDelta && (s = e.wheelDelta / -120);
                        const n = Math.pow(t, s);
                        i.Z.mouseZoom = (0, l.IV)(i.Z.mouseZoom * n, i.Z.mouseZoomMin, 1)
                    }
                    setZoomLevel(e) {
                        i.Z.mouseZoom = .8 / Math.pow(2, e - 1)
                    }
                    findPlayerUnderMouse(e) {
                        const {
                            x: t,
                            y: s
                        } = i.Z.mouse;
                        let n = 0,
                            o = null;
                        return [...h.u.values()].filter((e => !!e.isPlayerCell)).sort(((e, t) => e.size - t.size)).forEach((i => {
                            const r = i.x - t,
                                a = i.y - s,
                                l = Math.sqrt(Math.abs(r * r + a * a)) - i.size;
                            e ? l < n && (n = l, o = i) : l <= 0 && (n = i.size, o = i)
                        })), o
                    }
                    toggleSkins(e) {
                        void 0 === e && (e = !r.Z.skinsEnabled), r.Z.set("skinsEnabled", e), o.Z.invalidateVisibility()
                    }
                    toggleNames(e) {
                        void 0 === e && (e = !r.Z.namesEnabled), r.Z.set("namesEnabled", e), o.Z.invalidateVisibility()
                    }
                    toggleMass(e) {
                        void 0 === e && (e = !r.Z.massEnabled), r.Z.set("massEnabled", e), o.Z.invalidateVisibility()
                    }
                    toggleFood(e) {
                        void 0 === e && (e = !r.Z.foodVisible), r.Z.set("foodVisible", e), i.Z.scene.food.visible = e
                    }
                    toggleHud(e) {
                        void 0 === e && (e = !r.Z.showHud), r.Z.set("showHud", e), i.Z.app.showHud = e
                    }
                    toggleChat(e) {
                        void 0 === e && (e = !r.Z.showChat), r.Z.set("showChat", e), i.Z.running && i.Z.emit("chat-visible", {
                            visible: e
                        })
                    }
                    toggleChatToast() {
                        void 0 === state && (state = !r.Z.showChatToast), r.Z.set("showChatToast", state), i.Z.running && i.Z.emit("chat-visible", {
                            visibleToast: state
                        })
                    }
                }
                const u = new c;
                s.g.actionManager = u;
                const p = u
            },
            4893: (e, t, s) => {
                s.r(t);
                var i = s(9980),
                    n = s(9102),
                    o = s(9875),
                    r = s(8913),
                    a = s(8733);
                const l = n.Z.view,
                    h = new Set;
                let d = !1;
                window.addEventListener("blur", (() => h.clear()));
                const c = e => (e.preventDefault(), e.returnValue = "Are you sure you want to close the page?");
                i.Z.on("game-stopped", (() => {
                    window.removeEventListener("beforeunload", c, {
                        capture: !0
                    }), d = !1
                })), i.Z.on("game-started", (() => {
                    window.addEventListener("beforeunload", c, {
                        capture: !0
                    }), d = !0
                })), window.addEventListener("resize", (() => {
                    d && i.Z.scene.setPosition()
                })), l.addEventListener("mousedown", (e => {
                    if (!d) return;
                    if (e.preventDefault(), l.focus(), i.Z.spectating && 0 === e.button) {
                        const e = a.Z.findPlayerUnderMouse();
                        return void(e && a.Z.spectate(e.pid))
                    }
                    const t = "MOUSE" + e.button;
                    r.Z.press(t)
                })), l.addEventListener("mouseup", (e => {
                    if (!d) return;
                    const t = `MOUSE${e.button}`;
                    h.delete(t), r.Z.release(t)
                })), l.addEventListener("mousemove", (e => {
                    if (!d) return;
                    const t = new o.Z(e.clientX, e.clientY);
                    if (settings.mouseFreezeSoft) {
                        const {
                            x: e,
                            y: s
                        } = i.Z.rawMouse;
                        t.x === e && t.y === s || a.Z.freezeMouse(!1)
                    }
                    i.Z.rawMouse.set(t), i.Z.updateMouse()
                })), l.addEventListener("wheel", (e => {
                    d && a.Z.zoom(e)
                }), {
                    passive: !0
                }), document.body.addEventListener("keydown", (e => {
                    if (!d) return;
                    const t = e.target === l;
                    if (!t && e.target !== document.body) return;
                    const s = r.Z.convertKey(e.code);
                    e.ctrlKey && "TAB" === s || h.has(s) || (h.add(s), "ESCAPE" === s ? i.Z.replaying ? (h.clear(), i.Z.stop(), i.Z.showMenu(!0)) : i.Z.deathTimeout ? i.Z.triggerAutoRespawn() : i.Z.showMenu() : "ENTER" === s ? i.Z.emit("chat-focus") : t && r.Z.press(s) && e.preventDefault())
                })), document.body.addEventListener("keyup", (e => {
                    if (!d) return;
                    const t = r.Z.convertKey(e.code);
                    h.delete(t), r.Z.release(t)
                }))
            },
            9980: (e, t, s) => {
                s.d(t, {
                    Z: () => Z,
                    l: () => f
                });
                var i = s(4547),
                    n = s(3698),
                    o = s(9102),
                    r = s(7024),
                    a = s(1050),
                    l = s(6412),
                    h = s(9875),
                    d = s(4909),
                    c = s(7187),
                    u = s.n(c),
                    p = s(2213),
                    m = s(2608);
                const g = (e, t) => {
                        let s = 0;
                        switch (e) {
                            default: s = t / 10;
                            break;
                            case 1:
                                    s = t / 20;
                                break;
                            case 3:
                                    s = t / 5
                        }
                        return Math.ceil(s)
                    },
                    w = e => 0 === e ? "thin" : 1 === e ? "normal" : 2 == e ? "bold" : void 0;
                class f extends(u()) {
                    constructor() {
                        super(), this.running = !1, this.protocol, this.gamemodeId, this.instanceSeed, this.replaying, this.playerId, this.multiboxPid, this.activePid, this.tagId, this.spectating = !1, this.alive = i.Z.alive = !1, this.centerPosition = new h.Z(0, 0), this.score = 0, this.highestScore = 0, this.serverTick, this.clientVersion = 30, this.renderer = o.Z, this.skinLoader = new l.Z, r.J8.load(n.Z.virusImageUrl), this.settings = n.Z, this.timeStamp, this.pingStamp, this.state = i.Z, this.connection, this.actions, this.cells = m.u, this.cellQueue = new Array(Math.pow(2, 15) - 1), this.cellCount = 0, this.ownedCells = new Set, this.rawMouse = new h.Z, this.mouse = new h.Z, this.mouseZoom, this.mouseZoomMin, this.border, this.food, this.camera, this.massTextPool = [], this.crownPool = [], this.scene, this.playerManager, this.ticker = null, this.splitCount = 0, this.moveWaitUntil, this.stopMovePackets, this.mouseFrozen, this.moveInterval;
                        let e = this.intervals = [];
                        e.push(setInterval((() => this.emit("every-second")), 1e3)), e.push(setInterval((() => this.emit("every-minute")), 6e4)), this.app, this.ticksSinceDeath, this.deathTimeout, this.nameTextStyle, this.massTextStyle, this.compileNameFontStyle(), this.compileMassFontStyle()
                    }
                    start(e) {
                        if (!(e.protocol && e.instanceSeed && e.playerId && e.border)) throw new Error("Lacking mandatory data");
                        this.running = !0, this.protocol = e.protocol, this.gamemodeId = e.gamemodeId || 0, this.instanceSeed = e.instanceSeed, this.replaying = !1, this.playerId = e.playerId, this.multiboxPid = null, this.activePid = e.playerId, this.tagId = null, this.spectating = !1, this.alive = i.Z.alive = !1, this.centerPosition.reset(), this.score = 0, this.highestScore = 0, this.serverTick = 0, this.timeStamp = 0, this.pingStamp = 0, m.u.clear(), this.cellCount = 0, this.ownedCells.clear(), m.pj.clear(), this.rawMouse.reset(), this.mouse.reset(), this.mouseZoom = .3, this.mouseZoomMin = .01;
                        let t = this.border = e.border;
                        this.food = e.food, this.camera = {
                            timeStamp: 0,
                            spectator: new h.Z,
                            computedPosition: new h.Z,
                            oldPosition: new h.Z(t.x, t.y),
                            newPosition: new h.Z(t.x, t.y),
                            oldScale: this.mouseZoom,
                            newScale: this.mouseZoom
                        }, this.massTextPool = [], this.crownPool = [], this.scene = new a.Z(this, t), this.playerManager.reset(), this.ticker = new p.Ticker, this.ticker.add(this.onTick.bind(this)), i.Z.selectedServer && i.Z.connectionUrl !== i.Z.selectedServer.url && (i.Z.selectedServer = null), this.replaying || (this.splitCount = 0, this.moveWaitUntil = 0, this.stopMovePackets = !1, this.moveToCenterOfCells = !1, this.mouseFrozen = !1, n.Z.minimapEnabled, n.Z.showChat, this.emit("leaderboard-show"), this.emit("stats-visible"), this.moveInterval = setInterval((() => {
                            this.stopMovePackets || (this.moveToCenterOfCells ? this.connection.sendOpcode(9) : this.connection.sendMouse())
                        }), 40), i.Z.interactible = !0, this.on("every-second", f.everySecond)), this.frames = 0, this.ticker.start(), this.emit("game-started")
                    }
                    stop() {
                        if (!this.running) return;
                        this.running = !1, delete this.protocol, delete this.gamemodeId, delete this.instanceSeed, delete this.replaying, delete this.playerId, delete this.multiboxPid, delete this.activePid, delete this.tagId, this.spectating = !1, this.alive = i.Z.alive = !1, this.centerPosition.reset(), i.Z.spectators = 0, i.Z.interactible = !1, i.Z.playButtonDisabled = !1, i.Z.playButtonText = "Play", this.score = 0, this.highestScore = 0, this.serverTick = 0, this.timeStamp = 0, this.pingStamp = 0, this.clearCells(), this.rawMouse.reset(), this.mouse.reset(), delete this.mouseZoom, delete this.mouseZoomMin, delete this.border, delete this.food, delete this.camera, this.playerManager.reset();
                        let {
                            scene: e
                        } = this;
                        e && (e.destroyBackgroundImage(!1), e.uninstallMassTextFont(), e.container.destroy({
                            children: !0
                        }), delete this.scene), this.renderer.clear(), r.oJ.reset(), r.it.reset();
                        let t = this.massTextPool;
                        for (; t.length;) t.pop().destroy(!0);
                        for (delete this.massTextPool, t = this.crownPool; t.length;) t.pop().destroy();
                        delete this.crownPool, delete this.splitCount, delete this.moveWaitUntil, delete this.stopMovePackets, delete this.moveToCenterOfCells, delete this.mouseFrozen, clearInterval(this.moveInterval), delete this.moveInterval, this.off("every-second", f.everySecond), this.skinLoader.clearCallbacks(), this.emit("minimap-stats-visible", !0), this.emit("stats-visible", !1), this.emit("chat-visible", {
                            visible: !1
                        }), this.emit("leaderboard-hide"), this.emit("minimap-hide"), this.emit("minimap-destroy"), this.emit("show-replay-controls", !1), this.emit("cells-changed", 0), this.emit("reset-cautions"), delete this.frames, this.ticker.stop(), this.ticker = null, this.emit("game-stopped")
                    }
                    static everySecond() {
                        y.pingStamp = performance.now(), y.connection.sendOpcode(3)
                    }
                    showMenu(e) {
                        const {
                            app: t
                        } = this;
                        if (void 0 === e && (e = !t.showMenu), t.showMenu = e, (0, d.Kz)(0, "Menu " + (e ? "opened" : "closed")), e) this.emit("menu-opened");
                        else {
                            const e = document.activeElement;
                            e && "chatbox-input" !== e.id && o.Z.view.focus(), this.stopMovePackets = !1
                        }
                        return e
                    }
                    clearCells() {
                        let e;
                        for (e of m.u.values()) e.destroy();
                        for (e of(m.u.clear(), m.pj.values())) e.destroySprite();
                        m.pj.clear()
                    }
                    triggerAutoRespawn() {
                        i.Z.deathDelay = !1, i.Z.autoRespawning = !1, this.actions.join(), delete this.ticksSinceDeath
                    }
                    triggerDeathDelay() {
                        clearTimeout(this.deathTimeout), delete this.deathTimeout, i.Z.deathDelay = !1, i.Z.isAutoRespawning = !1, this.showMenu(!1), this.app.showDeathScreen = !0
                    }
                    onTick() {
                        const e = this.timeStamp = performance.now();
                        e >= this.moveWaitUntil && (this.updateMouse(), this.splitCount = 0);
                        let {
                            cellQueue: t
                        } = this, s = m.pj.size, i = m.u.size, n = Array.from(m.pj), r = 0, a = s, l = 1023;
                        for (; r < a;) {
                            const e = n.slice(r, r += l);
                            t.unshift(...e)
                        }
                        for (n = Array.from(m.u.values()), r = 0, a = i, l = 8191; r < a;) {
                            const e = n.slice(r, r += l);
                            t.unshift(...e)
                        }
                        const h = s + i;
                        for (let s = 0; s < h; s++) {
                            let i = t[s];
                            i.update(e) && m.pj.has(i) && (i.destroySprite(), m.pj.delete(i))
                        }
                        t.length = 0, this.scene.sort();
                        let d = this.updateCamera(!1);
                        NaN !== d ? (this.score = d, this.highestScore = Math.max(d, this.highestScore || 0)) : (this.score = 0, this.highestScore = 0), o.Z.render(this.scene.container), this.frames++
                    }
                    compileNameFontStyle() {
                        let e = {
                            fontFamily: n.Z.cellNameFont,
                            fontSize: 80,
                            fontWeight: w(n.Z.cellNameWeight)
                        };
                        n.Z.cellNameOutline && (e.stroke = parseInt(n.Z.cellNameOutlineColor, 16), e.strokeThickness = g(n.Z.cellNameOutline, e.fontSize), e.lineJoin = n.Z.cellMassSmoothOutline ? "round" : "miter"), this.nameTextStyle = e
                    }
                    compileMassFontStyle() {
                        let e = {
                            fontFamily: n.Z.cellMassFont,
                            fontSize: 56 + 20 * n.Z.cellMassTextSize,
                            fontWeight: w(n.Z.cellMassWeight),
                            lineJoin: "round",
                            fill: parseInt(n.Z.cellMassColor, 16)
                        };
                        n.Z.cellMassOutline && (e.stroke = parseInt(n.Z.cellMassOutlineColor, 16), e.strokeThickness = g(n.Z.cellMassOutline, e.fontSize), e.lineJoin = n.Z.cellMassSmoothOutline ? "round" : "miter"), this.massTextStyle = e
                    }
                    updateCamera(e) {
                        const {
                            camera: t
                        } = this, {
                            oldPosition: s,
                            newPosition: i
                        } = t;
                        let o = this.timeStamp - t.timeStamp;
                        const r = (0, d.IV)(o / n.Z.cameraMoveDelay, 0, 1),
                            a = (0, d.IV)(o / n.Z.cameraZoomDelay, 0, 1);
                        let l = this.scene.container,
                            h = s.copy().lerp(i, r);
                        l.pivot.set(h.x, h.y);
                        let c = (0, d.t7)(t.oldScale, t.newScale, a);
                        l.scale.set(c);
                        let u, p, m = this.mouseZoom;
                        if (this.spectating) u = t.spectator, p = NaN;
                        else {
                            u = this.centerPosition, u.reset(), p = 0;
                            const {
                                ownedCells: e
                            } = this;
                            if (0 !== e.size) {
                                let t, s = 0;
                                for (t of e) {
                                    let e = Math.round(Math.pow(t.nSize / 10, 2));
                                    u.add(t.nx * e, t.ny * e), p += e, s += t.nSize
                                }
                                u.divide(p), n.Z.autoZoom && (m *= Math.pow(Math.min(64 / s, 1), .27))
                            } else u.set(i)
                        }
                        if (!e) return p;
                        i.set(u), t.newScale = m, s.set(h), t.oldScale = c, t.timeStamp = y.timeStamp
                    }
                    updateMouse(e = !1) {
                        if (this.mouseFrozen && !e) return;
                        const t = this.scene.container,
                            {
                                rawMouse: s,
                                mouse: i
                            } = this;
                        i.set((0, d.IV)(t.pivot.x + (s.x - window.innerWidth / 2) / t.scale.x, -32768, 32767), (0, d.IV)(t.pivot.y + (s.y - window.innerHeight / 2) / t.scale.y, -32768, 32767))
                    }
                    seededRandom(e) {
                        return (e = Math.sin(e) * (1e4 + this.instanceSeed)) - Math.floor(e)
                    }
                    setTagId(e) {
                        return (e = e || 0) !== this.tagId && (this.tagId = e, !0)
                    }
                    getMassText(e) {
                        return !n.Z.shortMass || e < 1e3 ? e.toFixed(0) : (e / 1e3).toFixed(1) + "k"
                    }
                }
                let y = new f;
                s.g.gameObject = y;
                const Z = y
            },
            8913: (e, t, s) => {
                s.d(t, {
                    I: () => h,
                    Z: () => d
                });
                var i = s(9980),
                    n = s(3698),
                    o = s(4547),
                    r = s(4909);
                const a = new Map([
                        ["toggleAutoRespawn", () => {
                            const e = n.Z.autoRespawn;
                            n.Z.set("autoRespawn", !e), e && o.Z.isAutoRespawning && i.Z.triggerDeathDelay(!0), Swal.toast.fire({
                                title: "Auto respawn " + (e ? "disabled" : "enabled"),
                                type: "info",
                                timer: 1500
                            })
                        }],
                        ["respawn", () => {
                            o.Z.deathDelay || o.Z.playButtonDisabled || (actionManager.join(), i.Z.showMenu(!1))
                        }],
                        ["feed", actionManager.feed.bind(actionManager)],
                        ["feedMacro", actionManager.feed.bind(actionManager, !0)],
                        ["split", actionManager.split.bind(actionManager, 1)],
                        ["splitx2", () => actionManager.split(2, n.Z.delayDoublesplit ? 40 : 0)],
                        ["splitx3", actionManager.split.bind(actionManager, 3)],
                        ["splitMax", actionManager.split.bind(actionManager, 4)],
                        ["split32", actionManager.split.bind(actionManager, 5)],
                        ["split64", actionManager.split.bind(actionManager, 6)],
                        ["split128", actionManager.split.bind(actionManager, 7)],
                        ["split256", actionManager.split.bind(actionManager, 8)],
                        ["linesplit", actionManager.linesplit.bind(actionManager)],
                        ["freezeMouse", actionManager.freezeMouse.bind(actionManager)],
                        ["lockLinesplit", actionManager.lockLinesplit.bind(actionManager)],
                        ["stopMovement", actionManager.stopMovement.bind(actionManager)],
                        ["toggleSkins", actionManager.toggleSkins.bind(actionManager)],
                        ["toggleNames", actionManager.toggleNames.bind(actionManager)],
                        ["toggleFood", actionManager.toggleFood.bind(actionManager)],
                        ["toggleMass", actionManager.toggleMass.bind(actionManager)],
                        ["toggleChat", actionManager.toggleChat.bind(actionManager)],
                        ["toggleChatToast", actionManager.toggleChatToast.bind(actionManager)],
                        ["toggleHud", actionManager.toggleHud.bind(actionManager)],
                        ["spectateLock", actionManager.spectateLockToggle.bind(actionManager)],
                        ["zoomLevel1", actionManager.setZoomLevel.bind(actionManager, 1)],
                        ["zoomLevel2", actionManager.setZoomLevel.bind(actionManager, 2)],
                        ["zoomLevel3", actionManager.setZoomLevel.bind(actionManager, 3)],
                        ["zoomLevel4", actionManager.setZoomLevel.bind(actionManager, 4)],
                        ["zoomLevel5", actionManager.setZoomLevel.bind(actionManager, 5)]
                    ]),
                    l = {
                        feed: "W",
                        feedMacro: "MOUSE0",
                        split: "SPACE",
                        splitx2: "G",
                        splitx3: "H",
                        splitMax: "T",
                        split32: "",
                        split64: "",
                        linesplit: "Z",
                        lockLinesplit: "",
                        respawn: "",
                        toggleAutoRespawn: "",
                        stopMovement: "",
                        toggleSkins: "",
                        toggleNames: "",
                        toggleMass: "",
                        spectateLock: "Q",
                        selectPlayer: "MOUSE1",
                        saveReplay: "R",
                        toggleChat: "",
                        toggleChatToast: "",
                        toggleHud: "",
                        zoomLevel1: "1",
                        zoomLevel2: "2",
                        zoomLevel3: "3",
                        zoomLevel4: "4",
                        zoomLevel5: "5",
                        switchMultibox: ""
                    };
                class h {
                    constructor() {
                        this.version = 2, this.pressed = new Map, this.released = new Map, this.hotkeys = null, this.resetObsoleteHotkeys(), this.load()
                    }
                    resetObsoleteHotkeys() {
                        +localStorage.getItem("hotkeysVersion") !== this.version && (localStorage.setItem("hotkeysVersion", this.version), localStorage.getItem("hotkeys") && localStorage.removeItem("hotkeys"))
                    }
                    load() {
                        try {
                            const e = JSON.parse(localStorage.getItem("hotkeys"));
                            if ("object" != typeof e) throw new Error("Parsing hotkeys failed, opting to defaults");
                            for (const t in l) t in e || (e[t] = l[t]);
                            this.hotkeys = e
                        } catch (e) {
                            (0, r.Kz)(2, "string" == typeof e ? e : e && e.message || "Error occurred while parsing hotkeys"), this.hotkeys = {...l
                            }
                        }
                        this.loadHandlers(this.hotkeys)
                    }
                    save() {
                        localStorage.setItem("hotkeys", JSON.stringify(this.hotkeys))
                    }
                    reset() {
                        return localStorage.removeItem("hotkeys"), this.load(), this.hotkeys
                    }
                    get() {
                        return this.hotkeys
                    }
                    set(e, t) {
                        if (!a.has(e)) return !1;
                        if (this.hotkeys[e] === t) return !0;
                        if (t)
                            for (const e of Object.entries(this.hotkeys)) e[1] === t && (this.hotkeys[e[0]] = "");
                        return this.hotkeys[e] = t, this.save(), this.loadHandlers(this.hotkeys), !0
                    }
                    loadHandlers(e) {
                        this.pressed.clear();
                        for (const t in e) {
                            if (!a.has(t)) {
                                (0, r.Kz)(1, `Invalid handler name '${t}' in hotkeys`);
                                continue
                            }
                            const s = e[t],
                                i = a.get(t);
                            this.pressed.set(s, i)
                        }
                        this.released.clear(), "feedMacro" in e && this.released.set(e.feedMacro, actionManager.feed.bind(actionManager, !1))
                    }
                    press(e) {
                        if (!this.pressed.has(e)) return !1;
                        return this.pressed.get(e)(), !0
                    }
                    release(e) {
                        if (!this.released.has(e)) return;
                        this.released.get(e)()
                    }
                    convertKey(e) {
                        return e ? e.toString().toUpperCase().replace(/^(LEFT|RIGHT|NUMPAD|DIGIT|KEY)/, "") : "Unknown"
                    }
                }
                const d = new h
            },
            5315: (e, t, s) => {
                s.d(t, {
                    X: () => r,
                    Z: () => a
                });
                var i = s(3915),
                    n = s(4909);
                const o = decodeURIComponent("%F0%9F%A4%96");
                class r {
                    constructor() {
                        this.players = new Map, this.playersRemoving = [], this.botCount = 0
                    }
                    reset() {
                        this.players.forEach(((e, t) => this.remove(t))), this.botCount = 0, this.playersRemoving.splice(0, this.playersRemoving.length)
                    }
                    getPlayer(e) {
                        const {
                            players: t
                        } = this;
                        return t.has(e) ? t.get(e) : null
                    }
                    set({
                        pid: e,
                        nickname: t,
                        skin: s,
                        skinUrl: r,
                        nameColor: a,
                        tagId: l,
                        bot: h
                    }) {
                        let d;
                        a && console.log(a), this.players.has(e) ? d = this.players.get(e) : (this.players.set(e, d = new i.Z(e, !!h)), h && (this.botCount++, t = o)), s && (r = `https://skins.vanis.io/s/${s}`);
                        const c = d.setName(t, a),
                            u = d.setSkin(r),
                            p = d.setTagId(l);
                        return (0, n.Kz)(0, "[UPDATE]", e, "=", d), (c || u || p) && d.invalidateVisibility(), d
                    }
                    invalidateVisibility(e) {
                        for (const t of this.players.values()) e && e.has(t) || t.invalidateVisibility()
                    }
                    remove(e, t = !1) {
                        if (!this.players.has(e)) return;
                        if (t) return void this.playersRemoving.push(e);
                        const s = this.players.get(e);
                        (0, n.Kz)(0, "[REMOVE]", e, "=", s), s.bot && this.botCount--, s.destroy(), this.players.delete(e)
                    }
                    sweepRemovedPlayers() {
                        const {
                            playersRemoving: e
                        } = this;
                        for (; e.length;) {
                            const t = e.shift();
                            this.remove(t)
                        }
                    }
                }
                const a = new r
            },
            3915: (t, s, i) => {
                i.d(s, {
                    Z: () => g
                });
                var n = i(9980),
                    o = i(9102),
                    r = i(3698),
                    a = i(2210),
                    l = i(2608),
                    h = i(4909),
                    d = i(2213);
                const c = r.Z.cellSize,
                    u = r.Z.cellBorderSize,
                    p = e => {
                        e = e || 0;
                        return (new d.Graphics).lineStyle(u, 0, .5).beginFill(e).drawCircle(0, 0, c / 2).endFill()
                    },
                    m = p(0);
                class g {
                    constructor(e, t) {
                        this.pid = e, this.bot = t, this.skinUrl = null, this.tagId = null, this.isMe, e == n.Z.playerId && (this.isMe = !0), this.texture = d.RenderTexture.create(c, c), this.cellContainer = this.createCellContainer(), this.renderCell(), this.hasCrown, this.nameFromServer, this.nameColorFromServer
                    }
                    get visibility() {
                        return 2 - +(n.Z.tagId === this.tagId)
                    }
                    setOutline(t) {
                        t = t || 0, this.outlineColor = e;
                        const s = c / 2,
                            i = (new d.Graphics).lineStyle(20, t, 1).drawCircle(0, 0, s - 9.5).endFill();
                        i.pivot.set(-s), o.Z.render(i, this.texture, !1)
                    }
                    setCrown(e) {
                        this.hasCrown = e, l.u.forEach((t => {
                            t.pid === this.pid && (e ? t.addCrown() : t.removeCrown())
                        }))
                    }
                    createCellContainer() {
                        const e = new d.Container;
                        return e.pivot.set(-c / 2), e.addChild(p(this.getCellColor())), e
                    }
                    createSkinSprite(e) {
                        const t = new d.BaseTexture(e),
                            s = new d.Texture(t),
                            i = new d.Sprite(s);
                        return i.width = i.height = c, i.anchor.set(.5), i
                    }
                    renderCell() {
                        console.assert(this.cellContainer.children.length <= 3, "cellContainer has unexpected sprites"), o.Z.render(this.cellContainer, this.texture, !0), this.outlineColor && this.setOutline(this.outlineColor)
                    }
                    setTagId(e) {
                        return e = e || null, this.tagId !== e && (this.tagId = e, !0)
                    }
                    setNameColor(e) {
                        return e = e ? parseInt(e, 16) : null, this.nameColor = e, this.nameColorCss = e && "#" + e.toString(16), e
                    }
                    setName(e, t) {
                        return e = e || "Unnamed", (this.nameFromServer !== e || this.nameColorFromServer !== t) && (this.nameFromServer = e, this.nameColorFromServer = t, this.applyNameToSprite(), !0)
                    }
                    applyNameToSprite() {
                        let e = "Unnamed" === this.nameFromServer,
                            t = "Long Name" === this.nameFromServer,
                            s = e ? "" : this.nameFromServer;
                        const i = this.name,
                            o = this.nameColor;
                        let a;
                        if (a = e || t ? this.setNameColor(null) : this.setNameColor(this.nameColorFromServer), this.setNameSprite(s, a), !e && !t && this.nameSprite.texture.width > r.Z.cellLongNameThreshold && (t = !0, s = "Long Name", a = this.setNameColor(null), this.setNameSprite(s, a)), this.name = e ? "Unnamed" : s, i !== this.name || o !== this.nameColor) {
                            const e = a || (this.isMe ? 16747520 : null);
                            n.Z.emit("minimap-create-node", this.pid, s, a, e)
                        }
                    }
                    setNameSprite(e, t) {
                        this.nameSprite ? this.nameSprite.text = e : this.nameSprite = new d.Text(e, n.Z.nameTextStyle), this.nameSprite.style.fill = t || 16777215, this.nameSprite.updateText()
                    }
                    setSkin(e) {
                        if ((e = e || null) === this.skinUrl) return !1;
                        this.abortSkinLoaderIfExist();
                        return this.destroySkin() && this.renderCell(), this.skinUrl = e, this.skinShown && this.loadSkinAndRender(), !0
                    }
                    destroySkin() {
                        return !!this.skinSprite && (this.skinSprite.mask = null, this.skinSprite.destroy(!0), this.skinSprite = null, !0)
                    }
                    loadSkinAndRender() {
                        this.abortSkinLoader && (0, h.Kz)(1, "loadSkinAndRender() called while other skin was loading"), this.abortSkinLoaderIfExist(), this.abortSkinLoader = n.Z.skinLoader.loadSkin(this.skinUrl, (e => {
                            this.skinSprite = this.createSkinSprite(e), this.skinSprite.mask = m, this.cellContainer.addChild(this.skinSprite.mask, this.skinSprite), this.renderCell()
                        }))
                    }
                    invalidateVisibility() {
                        let e = r.Z.namesEnabled,
                            t = r.Z.skinsEnabled,
                            s = r.Z.massEnabled;
                        this.isMe ? (e = r.Z.showOwnName, t = r.Z.showOwnSkin, s = r.Z.showOwnMass) : (e = r.Z.showNames >= this.visibility, t = r.Z.showSkins >= this.visibility, s = r.Z.showMass >= this.visibility), e = r.Z.namesEnabled && e, t = r.Z.skinsEnabled && t, s = r.Z.massEnabled && s, t && !this.skinShown ? this.skinSprite ? (this.skinSprite.visible = !0, this.renderCell()) : this.skinUrl && this.loadSkinAndRender() : !t && this.skinShown && (this.abortSkinLoaderIfExist(), this.skinSprite && (this.skinSprite.visible = !1, this.renderCell())), this.nameShown = e, this.skinShown = t, this.massShown = s, this.nameColorShown = r.Z.showNameColor
                    }
                    abortSkinLoaderIfExist() {
                        this.abortSkinLoader && (this.abortSkinLoader(), this.abortSkinLoader = null)
                    }
                    getCellColor() {
                        const e = n.Z.seededRandom(this.pid),
                            t = Math.floor(e * (this.bot ? a.O5 : a.RB).length);
                        return (this.bot ? a.O5 : a.RB)[t]
                    }
                    destroy() {
                        this.abortSkinLoaderIfExist(), this.destroySkin(), this.cellContainer.removeChild(m), this.cellContainer.destroy(!0), this.cellContainer = null, this.texture.destroy(!0), this.texture.clearedFromCache = !0, this.texture = null, this.nameSprite && (this.nameSprite.destroy(!0), this.nameSprite = null), n.Z.emit("minimap-destroy-node", this.pid), this.destroyed = !0
                    }
                }
                g.prototype.destroyed = !1
            },
            3698: (e, t, s) => {
                s.d(t, {
                    Z: () => r
                });
                const i = new Map([
                        ["useWebGL", !0],
                        ["gameResolution", 1],
                        ["smallTextThreshold", 40],
                        ["autoZoom", !1],
                        ["rememeberEjecting", !0],
                        ["autoRespawn", !1],
                        ["mouseFreezeSoft", !0],
                        ["drawDelay", 120],
                        ["cameraMoveDelay", 150],
                        ["cameraZoomDelay", 150],
                        ["cameraZoomSpeed", 10],
                        ["replayDuration", 8],
                        ["showReplaySaved", 2],
                        ["showNames", 2],
                        ["showMass", 2],
                        ["showSkins", 1],
                        ["showOwnName", !0],
                        ["showOwnMass", !0],
                        ["showOwnSkin", !0],
                        ["showCrown", !0],
                        ["foodVisible", !0],
                        ["eatAnimation", !0],
                        ["showHud", !0],
                        ["showLeaderboard", !0],
                        ["showServerName", !1],
                        ["showChat", !0],
                        ["showChatToast", !1],
                        ["minimapEnabled", !0],
                        ["minimapLocations", !0],
                        ["showFPS", !0],
                        ["showPing", !0],
                        ["showCellCount", !0],
                        ["showPlayerScore", !1],
                        ["showPlayerMass", !0],
                        ["showClock", !1],
                        ["showSessionTime", !1],
                        ["showPlayerCount", !1],
                        ["showSpectators", !1],
                        ["showRestartTiming", !1],
                        ["showBlockedMessageCount", !0],
                        ["filterChatMessages", !0],
                        ["clearChatMessages", !0],
                        ["backgroundColor", "101010"],
                        ["borderColor", "000000"],
                        ["foodColor", "ffffff"],
                        ["ejectedColor", "ffa500"],
                        ["cellNameOutlineColor", "000000"],
                        ["cursorImageUrl", null],
                        ["backgroundImageUrl", "img/background.png"],
                        ["virusImageUrl", "img/virus.png"],
                        ["cellMassColor", "ffffff"],
                        ["cellMassOutlineColor", "000000"],
                        ["cellNameFont", "Hind Madurai"],
                        ["cellNameWeight", 1],
                        ["cellNameOutline", 2],
                        ["cellNameSmoothOutline", !0],
                        ["cellLongNameThreshold", 750],
                        ["cellMassFont", "Ubuntu"],
                        ["cellMassWeight", 2],
                        ["cellMassOutline", 2],
                        ["cellMassTextSize", 0],
                        ["cellMassSmoothOutline", !0],
                        ["shortMass", !0],
                        ["showBackgroundImage", !0],
                        ["backgroundImageRepeat", !0],
                        ["backgroundDefaultIfUnequal", !0],
                        ["backgroundImageOpacity", .6],
                        ["useFoodColor", !1],
                        ["namesEnabled", !0],
                        ["skinsEnabled", !0],
                        ["massEnabled", !0],
                        ["showLocations", !1],
                        ["cellBorderSize", 1],
                        ["autoHideReplayControls", !1],
                        ["minimapSize", 220],
                        ["minimapFPS", 30],
                        ["minimapSmoothing", .08]
                    ]),
                    n = (e, t) => {
                        let s;
                        switch (e) {
                            case 3:
                                s = t / 5;
                                break;
                            case 1:
                                s = t / 20;
                                break;
                            default:
                                s = t / 10
                        }
                        return Math.ceil(s)
                    },
                    o = e => 0 == e ? "thin" : 2 == e ? "bold" : "normal";
                const r = s.g.settings = new class {
                    constructor() {
                        const e = this.storage = new Map,
                            t = this.userDefinedSettings = this.loadUserDefinedSettings();
                        let s;
                        for (s in t) {
                            const i = t[s];
                            e.set(s, this[s] = i)
                        }
                        i.forEach(((t, s) => {
                            e.has(s) || e.set(s, this[s] = t)
                        })), this.set("skinsEnabled", !0), this.set("namesEnabled", !0), this.set("massEnabled", !0), this.cellSize = 512, this.compileNameFontStyle(), this.compileMassFontStyle()
                    }
                    compileNameFontStyle() {
                        const e = {
                            fontFamily: this.cellNameFont,
                            fontSize: 80,
                            fontWeight: o(this.cellNameWeight)
                        };
                        this.cellNameOutline && (e.stroke = parseInt(this.cellNameOutlineColor, 16), e.strokeThickness = n(this.cellMassOutline, e.fontSize), e.lineJoin = this.cellMassSmoothOutline ? "round" : "miter"), this.nameTextStyle = e
                    }
                    compileMassFontStyle() {
                        const e = {
                            fontFamily: this.cellMassFont,
                            fontSize: 56 + 20 * this.cellMassTextSize,
                            fontWeight: o(this.cellMassWeigh),
                            lineJoin: "round",
                            fill: parseInt(this.cellMassColor, 16)
                        };
                        this.cellMassOutline && (e.stroke = parseInt(this.cellMassOutlineColor, 16), e.strokeThickness = n(this.cellMassOutline, e.fontSize), e.lineJoin = this.cellMassSmoothOutline ? "round" : "miter"), this.massTextStyle = e
                    }
                    getDefault(e) {
                        return i.has(e) ? i.get(e) : null
                    }
                    loadUserDefinedSettings() {
                        if (!("settings" in localStorage)) return {};
                        try {
                            return JSON.parse(localStorage.getItem("settings"))
                        } catch (e) {
                            return {}
                        }
                    }
                    has(e) {
                        const {
                            storage: t
                        } = this;
                        return t.has(e)
                    }
                    get(e) {
                        const {
                            storage: t
                        } = this;
                        return t.has(e) ? t.get(e) : null
                    }
                    set(e, t) {
                        const {
                            storage: s
                        } = this;
                        return (!s.has(e) || s.get(e) !== t) && (s.set(e, this[e] = t), this.userDefinedSettings[e] = t, localStorage.setItem("settings", JSON.stringify(this.userDefinedSettings)), !0)
                    }
                }
            },
            6412: (e, t, s) => {
                s.d(t, {
                    Z: () => o
                });
                var i = s(4909);
                const n = ({
                    callbacks: e
                }, t) => {
                    const s = e.indexOf(t);
                    s >= 0 && e.splice(s, 1)
                };
                class o {
                    constructor() {
                        this.loaders = new Map, this.load()
                    }
                    async load() {
                        let e = new URL(s(6619), s.b);
                        e.host = "localhost:6969", (0, i.Kz)(1, e);
                        const t = await fetch(e),
                            n = URL.createObjectURL(await t.blob());
                        (0, i.Kz)(0, `Skin worker loaded at "${n}"`), this.worker = new Worker(n), this.worker.addEventListener("message", this.onSkinLoaded.bind(this))
                    }
                    createLoader(e) {
                        return {
                            image: null,
                            callbacks: [e]
                        }
                    }
                    clearCallbacks() {
                        this.loaders.clear()
                    }
                    loadSkin(e, t) {
                        if (!this.loaders.has(e)) {
                            const s = this.createLoader(t);
                            return this.loaders.set(e, s), this.worker.postMessage(e), n.bind(null, s, t)
                        }
                        let s = this.loaders.get(e);
                        if (s.image) t(s.image);
                        else if (!s.errored) return s.callbacks.push(t), n.bind(null, s, t);
                        return null
                    }
                    onSkinLoaded(e) {
                        const {
                            url: t,
                            image: s,
                            errored: i
                        } = e.data;
                        let n = this.loaders.get(t);
                        if (i) n.errored = !0, n.callbacks = [];
                        else {
                            n.image = s;
                            const {
                                callbacks: e
                            } = n;
                            for (; e.length;) {
                                e.pop()(s)
                            }
                        }
                    }
                }
            },
            4547: (e, t, s) => {
                s.d(t, {
                    Z: () => i
                });
                const i = {
                    connectionUrl: null,
                    selectedServer: null,
                    spectators: 0,
                    allowed: !1,
                    playButtonDisabled: !1,
                    playButtonText: "Play",
                    deathDelay: !1,
                    autoRespawning: !1,
                    alive: !1
                }
            },
            4909: (e, t, s) => {
                s.d(t, {
                    Am: () => c,
                    IV: () => r,
                    Kz: () => h,
                    t7: () => o,
                    uY: () => d
                });
                var i = s(6455),
                    n = s.n(i);
                const o = (e, t, s) => e + (t - e) * s,
                    r = (e, t, s) => Math.min(s, Math.max(t, e));
                let a = ["INFO", "WARNING", "ERROR", "DEBUG", "FATAL"].map((e => `[${e}]`)),
                    l = new Map([
                        [0, console.log.bind(null, a.shift())],
                        [1, console.warn.bind(null, a.shift())],
                        [2, console.error.bind(null, a.shift())],
                        [3, console.log.bind(null, a.shift())],
                        [4, console.error.bind(null, a.shift())]
                    ]);
                const h = (e, ...t) => {
                        l.has(e) && l.get(e)(...t)
                    },
                    d = e => {
                        e.writeEscapedStringNT("Test"), e.writeEscapedStringNT(""), e.writeEscapedStringNT("https://skins.vanis.io/s/cytos1")
                    };
                s.g.Swal = n();
                let c = n().mixin({
                    toast: !0,
                    position: "top",
                    showConfirmButton: !1,
                    showCloseButton: !0
                })
            },
            9202: (e, t, s) => {
                s.d(t, {
                    Z: () => f,
                    e: () => g
                });
                var i = s(9980),
                    n = s(3698),
                    o = s(4547),
                    r = s(5315),
                    a = s(4909),
                    l = s(4824),
                    h = s(2550),
                    d = s(2741),
                    c = s(7118),
                    u = s(4071);
                const p = (e, t) => {
                    a.Am.fire({
                        icon: t ? "error" : "info",
                        title: e,
                        timer: t ? 5e3 : 2e3
                    })
                };
                let m = null;
                class g {
                    constructor() {
                        this.ws = null, this.opened = !1, this.socketId = null, this.socketCount = 0
                    }
                    init(e) {
                        return fetch(e, {
                            credentials: "omit",
                            signal: m.signal,
                            headers: {
                                Accept: "text/plain"
                            }
                        }).then((e => {
                            const t = 200 === e.status;
                            return t || p("The connection was rejected!", !0), t
                        })).catch((() => (p("A connection couldn't be established", !0), !1)))
                    }
                    async open(e, t) {
                        if (i.Z.running && i.Z.stop(), m && (m.abort(), m = null), m = new AbortController, !await this.init(t || e.replace("ws", "http"))) return;
                        this.close(), i.Z.emit("chat-clear"), this.opened = !0;
                        let s = this.ws = new c.Z(e, "tFoL46WDlZuRja7W6qCl");
                        s.binaryType = "arraybuffer", s.packetCount = 0, s.onopen = () => {
                            this.opened && (this.socketId = s.id = this.socketCount++, o.Z.connectionUrl = e, s.onclose = this.onClosed.bind(this))
                        }, s.onclose = this.onRejected.bind(this), s.onmessage = this.handleMessage.bind(this)
                    }
                    close() {
                        const {
                            ws: e
                        } = this;
                        e && (e.onmessage = null, e.onclose = null, e.onerror = null, e.close(), this.ws = null, o.Z.connectionUrl = null, this.opened = !1)
                    }
                    send(e) {
                        if (e instanceof u.Z && (e = e.view), !this.opened) return !1;
                        const {
                            ws: t
                        } = this;
                        return console.assert(!!t, "Socket not defined?"), t.send(e), !0
                    }
                    onClosed(e) {
                        let t;
                        if (this.socketId = null, this.opened = !1, i.Z.running && i.Z.stop(), 1003 === e.code) t = 1500, p("Server restarting...", !1);
                        else {
                            t = 3500 + ~~(100 * Math.random());
                            let s = "You have been disconnected";
                            e.reason && (s += ` (${e.reason})`), p(s, !0)
                        }
                        setTimeout((() => {
                            this.opened || i.Z.emit("reconnect-server")
                        }), t), i.Z.showMenu(!0)
                    }
                    onRejected() {
                        this.socketId = null, this.opened = !1, p("Connection rejected", !0)
                    }
                    handleMessage(e) {
                        const t = u.Z.fromBuffer(e.data);
                        switch (t.readUInt8()) {
                            case 1:
                                {
                                    const e = (0, l.W)(t);
                                    return i.Z.start(e),
                                    i.Z.mouseZoom -= .25,
                                    void setTimeout((() => {
                                        if (o.Z.alive) return !1;
                                        i.Z.spectating = !0, w.sendOpcode(2)
                                    }), 1500)
                                }
                            case 2:
                                {
                                    const e = new Uint8Array(t.buffer, 1);
                                    return void this.sendJoinData(new d.Z(e).build())
                                }
                            case 3:
                                {
                                    const e = performance.now() - i.Z.pingStamp;
                                    return void(0, a.Kz)(0, `[FRAME #${i.Z.frames}] Ping: ${Math.round(e)}ms | FPS: ${Math.floor(i.Z.ticker.FPS)}`)
                                }
                            case 4:
                                {
                                    let e;
                                    for (; 0 !== (e = t.readUInt16LE());) r.Z.remove(e, !0);
                                    return
                                }
                            case 6:
                                return void i.Z.connection.sendOpcode(6);
                            case 10:
                                {
                                    i.Z.timeStamp = performance.now();
                                    const e = (0, h.Aq)(t);i.Z.cellCount != e && (i.Z.emit("cells-changed", e), i.Z.cellCount = e);
                                    return (o.Z.alive = 0 != e) ? i.Z.spectating = !1 : o.Z.autoRespawning && 37 == ++i.Z.ticksSinceDeath && i.Z.triggerAutoRespawn(),
                                    i.Z.updateCamera(!0),
                                    void r.Z.sweepRemovedPlayers()
                                }
                            case 16:
                                return void(0, l.v)(t);
                            case 17:
                                {
                                    const {
                                        camera: e
                                    } = i.Z;
                                    return void e.spectator.set(t.readInt16LE(), t.readInt16LE())
                                }
                            case 18:
                                return void i.Z.clearCells();
                            case 20:
                                return o.Z.deathDelay = !0, void(n.Z.autoRespawn && !i.Z.app.showMenu ? (o.Z.autoRespawning = !0, i.Z.ticksSinceDeath = 0) : i.Z.deathTimeout = setTimeout(i.Z.triggerDeathDelay.bind(i.Z), 900));
                            case 26:
                                return o.Z.playButtonDisabled = !!t.readUInt8(), void(t.length > t.offset + 1 && (o.Z.playButtonText = t.readString() || "Play"));
                            default:
                                return
                        }
                    }
                    sendJoinData(e) {
                        const t = /^wss?:\/\/[a-zA-Z0-9_-]+\.vanis\.io/i.test(o.Z.connectionUrl) ? localStorage.vanisToken : null,
                            s = u.Z.fromSize(2 + e.length + (t ? t.length : 0));
                        s.writeUInt8(5), s.writeUInt8(i.Z.clientVersion), e.forEach((e => s.writeUInt8(e))), (0, a.uY)(s), t && s.writeStringNT(t), this.send(s)
                    }
                    sendMouse() {
                        const {
                            x: e,
                            y: t
                        } = i.Z.mouse, s = u.Z.fromSize(5);
                        s.writeUInt8(16), s.writeInt16LE(e), s.writeInt16LE(t), this.send(s)
                    }
                    sendOpcode(e) {
                        const t = u.Z.fromSize(1);
                        t.writeUInt8(e), this.send(t)
                    }
                    sendRecaptchaToken(e) {
                        const t = u.Z.fromSize(1 + (e.length + 1));
                        t.writeUInt8(11), t.writeStringNT(e), this.send(t)
                    }
                    sendChatMessage(e) {
                        e = unescape(encodeURIComponent(e));
                        const t = u.Z.fromSize(1 + e.length);
                        t.writeUInt8(99), t.writeString(e), this.send(t)
                    }
                }
                const w = new g,
                    f = w
            },
            2550: (e, t, s) => {
                s.d(t, {
                    Aq: () => r,
                    Iz: () => o,
                    Yl: () => n
                });
                var i = s(9044);
                class n {
                    async init() {
                        if (this.initializing || this.instance) return !1;
                        this.initializing = !0;
                        let e = new URL(s(7992), s.b);
                        e.host = "localhost:6969";
                        const t = await fetch(e),
                            n = {
                                env: {
                                    addOrUpdate: i.eX,
                                    destroy: i.So,
                                    eat: i.RM,
                                    emscripten_notify_memory_growth: e => {}
                                }
                            },
                            o = this.instance = await WebAssembly.instantiate(await WebAssembly.compile(await t.arrayBuffer()), n),
                            {
                                memory: r
                            } = o.exports;
                        return this.HEAPU8 = new Uint8Array(r.buffer), this.HEAPU16 = new Uint8Array(r.buffer), this.HEAPF32 = new Uint8Array(r.buffer), this.HEAPU32 = new Uint8Array(r.buffer), delete this.initializing, !0
                    }
                    deserialize(e, t) {
                        if (!this.instance) return 0;
                        const {
                            deserialize: s,
                            malloc: i,
                            free: n
                        } = this.instance.exports, o = i(e.byteLength);
                        this.HEAPU8.set(e, o);
                        const r = s(o, t);
                        return n(o), r
                    }
                }
                const o = new n;
                o.init();
                const r = e => o.deserialize(new Uint8Array(e.buffer, 1), 0)
            },
            2426: (e, t, s) => {
                s.r(t), s.d(t, {
                    default: () => i
                });
                const i = s.p + "img/coin.png"
            },
            5418: (e, t, s) => {
                s.r(t), s.d(t, {
                    default: () => i
                });
                const i = s.p + "img/favicon.png"
            },
            2055: (e, t, s) => {
                s.d(t, {
                    Z: () => i
                });
                const i = s.p + "img/skin-add.png"
            },
            8962: (e, t, s) => {
                s.d(t, {
                    Z: () => r
                });
                var i = s(6977),
                    n = s(3698),
                    o = s(3961);
                s(5418);
                const r = (0, o.defineComponent)({
                    data: () => ({
                        showHud: n.Z.get("showHud"),
                        showMenu: !0,
                        showDeathScreen: !1,
                        deathStats: null
                    }),
                    components: {
                        mainContainer: i.Z
                    }
                })
            },
            198: (e, t, s) => {
                s.d(t, {
                    Z: () => l
                });
                var i = s(9980),
                    n = s(3698),
                    o = s(8811),
                    r = s(2174),
                    a = s(3961);
                const l = (0, a.defineComponent)({
                    data: () => ({
                        cursorStyleElem: null
                    }),
                    methods: {
                        setCursorUrl(e) {
                            let t = e ? `#canvas, #hud > * { cursor: url('${e}'), auto !important; }` : null,
                                s = this.cursorStyleElem;
                            !t && s ? (s.remove(), s = null) : t && !s && (s = document.createElement("style"), document.head.appendChild(s)), s && (s.innerHTML = t)
                        }
                    },
                    components: {
                        skins: r.Z,
                        playerContainer: o.Z
                    },
                    created() {
                        i.Z.on("set-cursor-url", (e => this.setCursorUrl(e)))
                    },
                    mounted() {
                        this.setCursorUrl(n.Z.get("cursorImageUrl"))
                    }
                })
            },
            6071: (e, t, s) => {
                s.d(t, {
                    Z: () => l
                });
                var i = s(9980),
                    n = s(4547),
                    o = s(4909),
                    r = s(8733),
                    a = s(3961);
                const l = (0, a.defineComponent)({
                    data: () => ({
                        showSettings: !1,
                        showHotkeys: !1,
                        gameState: n.Z,
                        name: localStorage.getItem("nickname") || "",
                        tag: localStorage.getItem("teamtag") || "",
                        skinUrl: "string" == typeof localStorage.skinUrl ? localStorage.getItem("skinUrl") : "https://skins.vanis.io/s/vanis1"
                    }),
                    created() {
                        i.Z.on("skin-click", (e => {
                            this.skinUrl = e
                        }))
                    },
                    methods: {
                        play(e) {
                            console.log(e), e instanceof MouseEvent && e.isTrusted && (console.log("hi"), n.Z.alive || r.Z.join(), i.Z.showMenu(!1))
                        },
                        spectate() {
                            n.Z.alive || (r.Z.spectate(), i.Z.showMenu(!1))
                        },
                        onNameChanged() {
                            localStorage.setItem("nickname", this.name)
                        },
                        onTagChanged() {
                            localStorage.setItem("teamtag", this.tag)
                        },
                        onSkinUrlChanged() {
                            i.Z.emit("skin-url-edit", this.skinUrl)
                        },
                        captureInput(e, t) {
                            if (!e.target.composing) {
                                const s = e.target.value;
                                switch ((0, o.Kz)(0, "capturing input for", t, "=", s), t) {
                                    case "name":
                                        return void(this.name = s);
                                    case "tag":
                                        return void(this.tag = s);
                                    case "skin-url":
                                        return void(this.skinUrl = s)
                                }
                            }
                        }
                    }
                })
            },
            6733: (e, t, s) => {
                s.d(t, {
                    Z: () => r
                });
                var i = s(9980),
                    n = s(4909),
                    o = s(3961);
                const r = (0, o.defineComponent)({
                    data: () => ({
                        selectedSkinIndex: 0,
                        skins: []
                    }),
                    created() {
                        i.Z.on("skin-url-edit", this.onSkinUrlChanged), this.skins = this.loadSkins() || this.getDefaultSkins();
                        const e = +localStorage.getItem("selectedSkinIndex") || 0;
                        this.selectSkin(e)
                    },
                    methods: {
                        loadSkins() {
                            try {
                                if (!("skins" in localStorage)) return null;
                                const e = JSON.parse(localStorage.getItem("skins"));
                                if (!Array.isArray(e)) return (0, n.Kz)(2, "'localStorage.skins' is not an array!"), null;
                                for (let t = e.length; t < 2; t++) e.push("https://skins.vanis.io/s/vanis1");
                                return e
                            } catch (e) {
                                return (0, n.Kz)(2, "Error parsing saved skins", e.message), null
                            }
                        },
                        getDefaultSkins: () => new Array(8).fill("https://skins.vanis.io/s/vanis1"),
                        onSkinUrlChanged(e) {
                            this.$set(this.skins, this.selectedSkinIndex, e), this.saveSkins()
                        },
                        selectSkin(e) {
                            this.selectedSkinIndex = e, localStorage.setItem("selectedSkinIndex", e.toString());
                            const t = this.skins[e];
                            i.Z.emit("skin-click", t)
                        },
                        removeSkin(e) {
                            this.skins.splice(e, 1), this.skins.length < 2 && this.skins.push("https://skins.vanis.io/s/vanis1"), this.saveSkins();
                            const t = Math.max(0, this.selectedSkinIndex - 1);
                            this.selectSkin(t)
                        },
                        addSkin() {
                            const e = this.skins.length;
                            this.skins.push("https://skins.vanis.io/s/vanis1"), this.selectSkin(e), this.saveSkins()
                        },
                        saveSkins() {
                            localStorage.setItem("skins", JSON.stringify(this.skins))
                        }
                    }
                })
            },
            2140: (e, t, s) => {
                s.d(t, {
                    s: () => n
                });
                var i = s(3961);

                function n(e, t, s, n, o, r) {
                    const a = (0, i.resolveComponent)("main-container");
                    return (0, i.openBlock)(), (0, i.createBlock)(a)
                }
            },
            9581: (e, t, s) => {
                s.d(t, {
                    s: () => o
                });
                var i = s(3961);
                const n = {
                    class: "main-container"
                };

                function o(e, t, s, o, r, a) {
                    const l = (0, i.resolveComponent)("skins"),
                        h = (0, i.resolveComponent)("playerContainer");
                    return (0, i.openBlock)(), (0, i.createElementBlock)("div", n, [(0, i.createVNode)(l, {
                        class: "fade-box"
                    }), (0, i.createVNode)(h, {
                        class: "fade-box two"
                    })])
                }
            },
            7199: (e, t, s) => {
                s.d(t, {
                    s: () => c
                });
                var i = s(3961);
                const n = {
                        class: "player-container"
                    },
                    o = {
                        class: "player-data"
                    },
                    r = ["value"],
                    a = ["value"],
                    l = ["value"],
                    h = {
                        class: "game-buttons"
                    },
                    d = {
                        class: "fas fa-play",
                        style: {
                            "margin-right": "4px",
                            "font-size": "0.8rem"
                        }
                    };

                function c(e, t, s, c, u, p) {
                    return (0, i.openBlock)(), (0, i.createElementBlock)("div", n, [(0, i.createElementVNode)("div", o, [(0, i.createElementVNode)("input", {
                        class: "name",
                        type: "text",
                        spellcheck: "false",
                        placeholder: "Nickname",
                        maxlength: "15",
                        value: e.name,
                        onChange: t[0] || (t[0] = t => e.onNameChanged()),
                        onInput: t[1] || (t[1] = t => e.captureInput(t, "name"))
                    }, null, 40, r), (0, i.createElementVNode)("input", {
                        class: "tag",
                        type: "text",
                        spellcheck: "false",
                        placeholder: "Tag",
                        maxlength: "15",
                        value: e.tag,
                        onChange: t[2] || (t[2] = t => e.onTagChanged()),
                        onInput: t[3] || (t[3] = t => e.captureInput(t, "tag"))
                    }, null, 40, a), (0, i.createElementVNode)("input", {
                        type: "text",
                        spellcheck: "false",
                        placeholder: "https://skins.vanis.io/s/",
                        maxlength: "31",
                        value: e.skinUrl,
                        onChange: t[4] || (t[4] = t => e.onSkinUrlChanged()),
                        onInput: t[5] || (t[5] = t => e.captureInput(t, "skinUrl"))
                    }, null, 40, l), (0, i.createElementVNode)("div", h, [(0, i.createElementVNode)("button", {
                        class: "play-button",
                        disabled: !0,
                        onClick: t[6] || (t[6] = t => e.play(t))
                    }, [(0, i.createElementVNode)("i", d, (0, i.toDisplayString)(e.gameState.playButtonText), 1)])])])])
                }
            },
            1416: (e, t, s) => {
                s.d(t, {
                    s: () => d
                });
                var i = s(3961),
                    n = s(2055);
                const o = {
                        class: "customization"
                    },
                    r = {
                        class: "skins"
                    },
                    a = {
                        class: "skin-container"
                    },
                    l = ["src", "onClick", "onContextmenu"],
                    h = ["onClick"];

                function d(e, t, s, d, c, u) {
                    return (0, i.openBlock)(), (0, i.createElementBlock)("div", o, [(0, i.createElementVNode)("div", r, [((0, i.openBlock)(!0), (0, i.createElementBlock)(i.Fragment, null, (0, i.renderList)(e.skins, ((t, s) => ((0, i.openBlock)(), (0, i.createElementBlock)("li", {
                        key: s
                    }, [(0, i.createElementVNode)("span", a, [(0, i.createElementVNode)("img", {
                        class: (0, i.normalizeClass)(["skin", {
                            selected: e.selectedSkinIndex === s
                        }]),
                        src: t,
                        alt: "",
                        onClick: t => e.selectSkin(s),
                        onContextmenu: t => e.removeSkin(s)
                    }, null, 42, l), (0, i.createElementVNode)("i", {
                        class: "fas fa-times skin-remove-button",
                        onClick: t => e.removeSkin(s)
                    }, null, 8, h)])])))), 128)), (0, i.createElementVNode)("img", {
                        class: "skin add-skin",
                        src: n.Z,
                        alt: "",
                        onClick: t[0] || (t[0] = t => e.addSkin())
                    })])])
                }
            },
            2608: (e, t, s) => {
                s.d(t, {
                    ZP: () => h,
                    pj: () => a,
                    u: () => l
                });
                var i = s(4909),
                    n = s(3698),
                    o = s(7024),
                    r = s(2213);
                let a = new Set,
                    l = new Map;
                class h {
                    constructor(e, t, s, i, n, a) {
                        this.scale = 1, this.updateStamp = 0, this.destroyed = !1, this.id = e || 0, this.texture = t || o.it.get(0);
                        let l = this.sprite = new r.Sprite(t);
                        l.anchor.set(.5), l.gameData = this, this.nx = this.ox = this.x = l.position.x = s, this.ny = this.oy = this.y = l.position.y = i, this.nSize = this.oSize = this.size = n, this.flags = a
                    }
                    update(e) {
                        const t = e - this.updateStamp;
                        let s = (0, i.IV)(t / n.Z.get("drawDelay"), 0, 1);
                        this.x = s * this.scale * (this.nx - this.ox) + this.ox, this.y = s * this.scale * (this.ny - this.oy) + this.oy;
                        let o = 2 * (this.size = s * (this.nSize - this.oSize) + this.oSize);
                        if (null == this.sprite || !0 === this.texture.clearedFromCache) return !0;
                        let {
                            sprite: r
                        } = this, {
                            position: a
                        } = r;
                        return a.x === this.x && a.y === this.y && r.width === o || (a.x = this.x, a.y = this.y, r.width = r.height = o, this.onUpdate && this.onUpdate(), !1)
                    }
                    destroy(e = !1) {
                        this.destroyed ? (0, i.Kz)(1, `Cell #${this.id} already destroyed!`) : (this.destroyed = !0, this.onDestroy && this.onDestroy(), l.delete(this.id), e ? a.add(this) : this.destroySprite())
                    }
                    destroySprite() {
                        this.sprite ? (this.sprite.destroy(), this.sprite = null) : (0, i.Kz)(1, `Sprite for cell #${this.id} already destroyed!`)
                    }
                }
            },
            8649: (e, t, s) => {
                s.d(t, {
                    Z: () => o
                });
                var i = s(2608),
                    n = s(2213);
                s(2426);
                class o extends i.ZP {
                    constructor(e, t, s, i, o) {
                        super(e, n.Texture.from("/img/coin.png"), t, s, i, o)
                    }
                }
                o.prototype.type = 9, o.prototype.isCoin = !0
            },
            2210: (e, t, s) => {
                s.d(t, {
                    O5: () => o,
                    RB: () => n,
                    qn: () => i
                });
                let i = [16776960, 65280, 65535, 16711935],
                    n = [16711680, 16744448, 16776960, 8453888, 65280, 65408, 65535, 33023, 8388863, 16711935, 16711808],
                    o = i.map((e => (.8 * (e >> 16 & 255) << 16 | .8 * (e >> 8 & 255) << 8 | .8 * (255 & e)) >> 0))
            },
            2705: (e, t, s) => {
                s.d(t, {
                    Z: () => o
                });
                var i = s(2608),
                    n = s(2213);
                class o extends i.ZP {
                    constructor(e, t, s, i, o) {
                        super(e, n.Texture.from("/img/crown.png"), t, s, i, o), this.sprite.alpha = .7
                    }
                }
                o.prototype.type = 6, o.prototype.isCrown = !0
            },
            4741: (e, t, s) => {
                s.d(t, {
                    Z: () => o
                });
                var i = s(2608),
                    n = s(7024);
                class o extends i.ZP {
                    constructor(e, t, s, i, o, r = !0, a = 4210752) {
                        super(e, (r ? n.it : n.oJ).get(a), t, s, i, o), this.sprite.alpha = .5
                    }
                }
                o.prototype.type = 5, o.prototype.isDead = !0
            },
            3424: (e, t, s) => {
                s.d(t, {
                    Z: () => h
                });
                var i = s(3698),
                    n = s(2608),
                    o = s(7024),
                    r = s(4909);
                let a = new(s(7563).Z);
                const l = () => o.it.get(parseInt(i.Z.get("ejectedColor"), 16));
                class h extends n.ZP {
                    constructor(e, t, s, i, n) {
                        super(e, l(), t, s, i, n), a.add(this.sprite)
                    }
                    reloadTexture() {
                        this.sprite.texture = this.texture = l()
                    }
                    update(e) {
                        const t = e - this.updateStamp;
                        let s = (0, r.IV)(t / i.Z.get("drawDelay"), 0, 1);
                        this.x = (this.nx - this.ox) * s + this.ox, this.y = (this.ny - this.oy) * s + this.oy;
                        let n = 2 * (this.size = this.nSize),
                            {
                                sprite: o
                            } = this;
                        if (null == o) return !0;
                        let {
                            position: a
                        } = o;
                        const {
                            x: l,
                            y: h
                        } = a;
                        return l === this.x && h === this.y && o.width === n || (a.x = this.x, a.y = this.y, o.width = o.height = n, !1)
                    }
                    onDestroy() {
                        this.sprite && a.remove(this.sprite)
                    }
                }
                h.prototype.type = 3, h.prototype.isEjected = !0
            },
            9717: (e, t, s) => {
                s.d(t, {
                    Z: () => l
                });
                var i = s(7024),
                    n = s(2210),
                    o = s(2608),
                    r = s(3698);
                const a = e => i.it.get(r.Z.get("useFoodColor") ? parseInt(r.Z.get("foodColor"), 16) : n.qn[e % n.qn.length]);
                class l extends o.ZP {
                    constructor(e, t, s, i, n) {
                        super(e, a(e), t, s, i, n)
                    }
                    reloadTexture() {
                        this.sprite.texture = this.texture = a(this.id)
                    }
                    update() {
                        this.x = this.nx, this.y = this.ny;
                        let e = 2 * (this.size = this.nSize);
                        if (null == this.sprite) return !0;
                        let {
                            sprite: t
                        } = this, {
                            position: s
                        } = t;
                        const {
                            x: i,
                            y: n
                        } = s;
                        return i === this.x && n === this.y && t.width === e || (s.x = this.x, s.y = this.y, t.width = t.height = e, !1)
                    }
                }
                l.prototype.type = 4, l.prototype.isFood = !0
            },
            9120: (e, t, s) => {
                s.d(t, {
                    Cy: () => n.Z,
                    PB: () => i.Z,
                    V7: () => a.Z,
                    _O: () => l.Z,
                    jr: () => r.Z,
                    n6: () => o.Z,
                    sN: () => h.Z
                });
                var i = s(9676),
                    n = s(5262),
                    o = s(3424),
                    r = s(9717),
                    a = s(4741),
                    l = s(2705),
                    h = s(8649)
            },
            9676: (e, t, s) => {
                s.d(t, {
                    Z: () => l
                });
                var i = s(9980),
                    n = s(3698),
                    o = s(2608),
                    r = s(4909),
                    a = s(2213);
                class l extends o.ZP {
                    constructor(e, t, s, n, o, r) {
                        super(e, r.texture, t, s, n, o), this.player = r, this.pid = r.pid, r.isMe && i.Z.ownedCells.add(this), r.hasCrown && this.addCrown()
                    }
                    addCrown() {
                        if (this.crownSprite) return void(0, r.Kz)(1, "addCrown(): crown already exists");
                        const e = i.Z.crownPool;
                        let t;
                        e.length ? t = e.pop() : (t = a.Sprite.from("/img/crown.png"), t.scale.set(.7), t.pivot.set(0, 643), t.anchor.x = .5, t.rotation = -.5, t.alpha = .7, t.zIndex = 2), this.crownSprite = t, this.sprite.addChild(t)
                    }
                    removeCrown() {
                        let e = this.crownSprite;
                        e ? (this.sprite.removeChild(e), i.Z.crownPool.push(e), this.crownSprite = null) : (0, r.Kz)(1, "removeCrown(): crown doesnt exist")
                    }
                    onUpdate() {
                        let e = i.Z.scene.container.scale.x * this.size * i.Z.renderer.resolution,
                            t = e > n.Z.get("smallTextThreshold"),
                            {
                                player: s
                            } = this;
                        t && (s.massShown && !this.massText && (this.massText = i.Z.massTextPool.pop() || (e => {
                            let t = new a.BitmapText("", {
                                    fontName: "mass",
                                    align: "right"
                                }),
                                s = e.strokeThickness || 0;
                            return t.position.set(-s / 2, -s / 2), t.anchor.set(.5, -.6), t
                        })(i.Z.massTextStyle), this.massText.zIndex = 0, this.sprite.addChild(this.massText)), s.nameShown && !this.nameSprite && s.nameSprite && (this.nameSprite = new a.Sprite(s.nameSprite.texture), this.nameSprite.anchor.set(.5), this.nameSprite.zIndex = 1, this.sprite.addChild(this.nameSprite))), this.crownSprite && (this.crownSprite.visible = e > 16 && n.Z.get("showCrown")), this.nameSprite && (this.nameSprite.visible = s.nameShown && t);
                        let {
                            massText: o
                        } = this;
                        o && (s.massShown && t ? (o.text = i.Z.getMassText(this.nSize * this.nSize / 100), o.visible = !0) : o.visible && (o.visible = !1))
                    }
                    onDestroy() {
                        i.Z.ownedCells.delete(this), this.massText && (this.sprite.removeChild(this.massText), i.Z.massTextPool.push(this.massText)), this.crownSprite && this.removeCrown()
                    }
                }
                l.prototype.type = 1, l.prototype.isPlayerCell = !0
            },
            7563: (e, t, s) => {
                s.d(t, {
                    Z: () => o
                });
                var i = s(9980),
                    n = s(2213);
                class o {
                    constructor() {
                        this.queue = new Set;
                        const e = n.Ticker.shared;
                        let t = e => this.animate(e);
                        i.Z.on("game-started", (() => {
                            e.add(t)
                        })), i.Z.on("game-stopped", (() => {
                            e.remove(t)
                        }))
                    }
                    animate(e) {
                        this.queue.forEach((t => {
                            const s = e / n.settings.TARGET_FPMS;
                            (t.alpha += s / 300) < 1 || this.queue.delete(t)
                        }))
                    }
                    add(e) {
                        e.alpha = 0, this.queue.add(e)
                    }
                    remove(e) {
                        this.queue.delete(e)
                    }
                }
            },
            5262: (e, t, s) => {
                s.d(t, {
                    Z: () => r
                });
                var i = s(2608),
                    n = s(7024),
                    o = s(2213);
                class r extends i.ZP {
                    constructor(e, t, s, i, o) {
                        super(e, n.J8.get(), t, s, i, o)
                    }
                    resetTexture() {
                        this.destroySprite(), this.texture = n.J8.get(), this.sprite = new o.Sprite(this.texture), this.sprite.anchor.set(.5), this.sprite.gameData = this
                    }
                }
                r.prototype.type = 2, r.prototype.isVirus = !0
            },
            648: (e, t, s) => {
                var i = s(9980),
                    n = s(5315),
                    o = s(9202),
                    r = s(2550),
                    a = s(8733),
                    l = s(4909),
                    h = s(2213),
                    d = s(3961),
                    c = s(174),
                    u = s(6985);
                s(4893), (0, l.Kz)(0, "Game", i.Z), i.Z.playerManager = n.Z, i.Z.connection = o.Z, i.Z.actions = a.Z, s.g.wasmModule = r.Iz, (0, l.Kz)(0, `Running PIXI v${h.VERSION}`), s.g.PIXI = h, document.body.addEventListener("contextmenu", (e => {
                    e.preventDefault()
                })), l.Am.fire({
                    title: "Hello, world!",
                    icon: "success",
                    timer: 2e3
                }), console.warn("Gamer", s.g.gameObjectSingleton = u.Z);
                (i.Z.app = (0, d.createApp)(c.Z)).mount("#app")
            },
            4071: (e, t, s) => {
                s.d(t, {
                    Z: () => n
                });
                var i = s(9875);
                class n {
                    constructor(e, t) {
                        if (e instanceof DataView) this.view = e;
                        else {
                            if (!(e instanceof ArrayBuffer)) throw new TypeError("First argument to SmartBuffer constructor must be an ArrayBuffer or DataView");
                            this.view = new DataView(e)
                        }
                        this.offset = t || 0
                    }
                    ensureCapacity(e) {
                        let t = this.offset + e;
                        if (t > this.length) {
                            let e = new ArrayBuffer(t);
                            new Uint8Array(e).set(new Uint8Array(this.buffer)), this.view = new DataView(e)
                        }
                    }
                    static fromSize(e) {
                        return new this(new ArrayBuffer(e), 0)
                    }
                    static fromBuffer(e) {
                        return new this(e, 0)
                    }
                    get buffer() {
                        return this.view.buffer
                    }
                    toBuffer() {
                        return this.buffer
                    }
                    get length() {
                        const {
                            view: e
                        } = this;
                        return e ? e.byteLength : 0
                    }
                    get eof() {
                        return this.offset >= this.length
                    }
                    read(e, t, s, i) {
                        return "number" != typeof i && (i = this.offset, this.offset += t), e.call(this.view, i, s)
                    }
                    write(e, t, s, i) {
                        this.ensureCapacity(t), e.call(this.view, this.offset, s, i), this.offset += t
                    }
                    readInt8(e) {
                        return this.read(DataView.prototype.getInt8, 1, null, e)
                    }
                    readUInt8(e) {
                        return this.read(DataView.prototype.getUint8, 1, null, e)
                    }
                    readInt16LE(e) {
                        return this.read(DataView.prototype.getInt16, 2, !0, e)
                    }
                    readInt16BE(e) {
                        return this.read(DataView.prototype.getInt16, 2, !1, e)
                    }
                    readUInt16LE(e) {
                        return this.read(DataView.prototype.getUint16, 2, !0, e)
                    }
                    readUInt16BE(e) {
                        return this.read(DataView.prototype.getUint16, 2, !1, e)
                    }
                    readInt32LE(e) {
                        return this.read(DataView.prototype.getInt32, 4, !0, e)
                    }
                    readInt32BE(e) {
                        return this.read(DataView.prototype.getInt32, 4, !1, e)
                    }
                    readUInt32LE(e) {
                        return this.read(DataView.prototype.getUint32, 4, !0, e)
                    }
                    readUInt32BE(e) {
                        return this.read(DataView.prototype.getUint32, 4, !1, e)
                    }
                    readVector2(e, t) {
                        "number" != typeof e && (e = this.offset, this.offset += 4);
                        let {
                            view: s
                        } = this;
                        return new i.Z(s.getUint16(e, t), s.getUint16(e + 2, t))
                    }
                    readString16() {
                        let e = "";
                        for (;;) {
                            const t = this.readUInt16LE();
                            if (0 === t || this.eof) break;
                            e += String.fromCharCode(t)
                        }
                        return e
                    }
                    readString() {
                        let e = "";
                        for (;;) {
                            const t = this.readUInt8();
                            if (0 === t || this.eof) break;
                            e += String.fromCharCode(t)
                        }
                        return e
                    }
                    readEscapedString() {
                        return decodeURIComponent(escape(this.readString()))
                    }
                    writeInt8(e) {
                        this.write(DataView.prototype.setInt8, 1, e, null)
                    }
                    writeUInt8(e) {
                        this.write(DataView.prototype.setUint8, 1, e, null)
                    }
                    writeInt16LE(e) {
                        this.write(DataView.prototype.setInt16, 2, e, !0)
                    }
                    writeInt16BE(e) {
                        this.write(DataView.prototype.setInt16, 2, e, !1)
                    }
                    writeUInt16LE(e) {
                        this.write(DataView.prototype.setUint16, 2, e, !0)
                    }
                    writeUInt16BE(e) {
                        this.write(DataView.prototype.setUint16, 2, e, !1)
                    }
                    writeInt32LE(e) {
                        this.write(DataView.prototype.setInt32, 4, e, !0)
                    }
                    writeInt32BE(e) {
                        this.write(DataView.prototype.setInt32, 4, e, !1)
                    }
                    writeUInt32LE(e) {
                        this.write(DataView.prototype.setUint32, 4, e, !0)
                    }
                    writeUInt32BE(e) {
                        this.write(DataView.prototype.setUint32, 4, e, !1)
                    }
                    writeString(e) {
                        let t = e.length;
                        this.ensureCapacity(t);
                        for (let s = 0; s < t; s++) this.writeUInt8(e.charCodeAt(s))
                    }
                    writeStringNT(e) {
                        this.writeString(e), this.writeUInt8(0)
                    }
                    writeEscapedString(e) {
                        this.writeString(unescape(encodeURIComponent(e)))
                    }
                    writeEscapedStringNT(e) {
                        this.writeStringNT(unescape(encodeURIComponent(e)))
                    }
                }
            },
            4824: (e, t, s) => {
                s.d(t, {
                    W: () => o,
                    v: () => r
                });
                var i = s(9980),
                    n = s(5315);
                const o = e => {
                        const t = {},
                            s = t.border = {};
                        if (t.protocol = e.readUInt8(), t.protocol >= 4) {
                            t.gamemodeId = e.readUInt8(), t.instanceSeed = e.readUInt16LE(), t.playerId = e.readUInt16LE(), s.minx = e.readInt16LE(), s.miny = e.readInt16LE(), s.maxx = e.readInt16LE(), s.maxy = e.readInt16LE();
                            let i = e.readUInt8();
                            s.circle = !!(1 & i);
                            let n = t.food = {};
                            if (2 & i) {
                                const t = n.minSize = e.readUInt16LE(),
                                    s = n.maxSize = e.readUInt16LE();
                                n.stepSize = s - t
                            }
                            4 & i && (n.ejectedSize = e.readUInt16LE()), s.width = s.maxx - s.minx, s.height = s.maxy - s.miny
                        } else {
                            if (t.protocol >= 2) t.gamemodeId = e.readUInt8(), t.instanceSeed = e.readUInt16LE(), t.playerId = e.readUInt16LE(), s.width = e.readUInt32LE(), s.height = e.readUInt32LE();
                            else {
                                t.gamemodeId = 1, t.instanceSeed = e.readInt16LE(), t.playerId = e.readInt16LE();
                                let i = e.readUInt16LE();
                                s.width = i, s.height = i
                            }
                            s.minx = -s.width / 2, s.miny = -s.height / 2, s.maxx = +s.width / 2, s.maxy = +s.height / 2
                        }
                        return s.x = (s.minx + s.maxx) / 2, s.y = (s.miny + s.maxy) / 2, t
                    },
                    r = e => {
                        let t = JSON.parse(e.readEscapedString()),
                            s = t.find((e => e.pid === i.Z.playerId));
                        const o = !!s && i.Z.setTagId(s.tagId);
                        let r = new Set;
                        t.forEach((e => {
                            const t = n.Z.set(e);
                            r.add(t)
                        })), o && (i.Z.emit("minimap-positions", []), n.Z.invalidateVisibility(r))
                    }
            },
            2741: (e, t, s) => {
                let i;
                s.d(t, {
                    Z: () => n
                }); {
                    let e = "you skid.";
                    i = [124, 24, 138, 29, 216, 4, 129, 66, 8].map(((t, s) => t ^ e.charCodeAt(s) + s))
                }
                class n {
                    constructor(e) {
                        this.data = e
                    }
                    writeIndex(e, t) {
                        let s = this.data[t],
                            n = s + 5 & 7;
                        const o = 255 & (s << n | s >>> 8 - n),
                            r = e[0 != t ? t - 1 : 0] ^ i[t];
                        e.push(o ^ r ^ i[8])
                    }
                    build(e = !1) {
                        let t = [];
                        for (let e = 0; e < 8; e++) this.writeIndex(t, e);
                        const s = 1 + Math.floor(2147483646 * Math.random());
                        return t.push(t[0] ^ s >> 24), t.push(t[1] ^ s >> 16), t.push(t[2] ^ s >> 8), t.push(s ^ t[3]), t.push(t[0] ^ +e ^ 31), t.map((e => 255 & e))
                    }
                }
            },
            7118: (e, t, s) => {
                s.d(t, {
                    Z: () => n
                });
                let i = s.g.WebSocket;
                i.prototype.packetCount = 0, delete s.g.WebSocket;
                const n = i
            },
            9875: (e, t, s) => {
                s.d(t, {
                    Z: () => i
                });
                class i {
                    constructor(e = 0, t = 0) {
                        this.x = e, this.y = t
                    }
                    set(e, t) {
                        e instanceof i && (t = e.y, e = e.x), this.x = e, this.y = t
                    }
                    add(e, t) {
                        return e instanceof i && (t = e.y, e = e.x), this.x += e, this.y += t, this
                    }
                    divide(e) {
                        return this.x /= e, this.y /= e, this
                    }
                    lerp(e, t) {
                        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
                    }
                    reset() {
                        this.x = this.y = 0
                    }
                    copy() {
                        return new i(this.x, this.y)
                    }
                    toString() {
                        return `{${this.x}, ${this.y}}`
                    }
                    toObject() {
                        return [this.x, this.y]
                    }
                }
            },
            9102: (e, t, s) => {
                s.d(t, {
                    Z: () => a
                });
                var i = s(3698),
                    n = s(2213);
                n.utils.skipHello();
                let o = n.autoDetectRenderer({
                    resolution: i.Z.get("gameResolution"),
                    view: document.getElementById("canvas"),
                    forceCanvas: !i.Z.get("useWebGL"),
                    antialias: !1,
                    powerPreference: "high-performance",
                    backgroundColor: parseInt(i.Z.get("backgroundColor"), 16)
                });
                ["interaction", "accessibility"].forEach((e => {
                    let t = o.plugins[e];
                    t && (t.destroy(), delete o.plugins[e])
                }));
                const r = () => {
                    o.resize(window.innerWidth, window.innerHeight)
                };
                r(), window.addEventListener("resize", r), o.clear();
                const a = o
            },
            1050: (e, t, s) => {
                s.d(t, {
                    Z: () => a
                });
                var i = s(2608),
                    n = s(3698),
                    o = s(2213);
                const r = e => {
                    const t = parseInt(n.Z.get("borderColor"), 16);
                    let {
                        width: s,
                        height: i
                    } = e, r = new o.Graphics;
                    return r.lineStyle(100, t, 1, .5), e.circle ? r.drawEllipse(s / 2, i / 2, s / 2, i / 2) : r.drawRect(0, 0, s, i), r.endFill(), r.pivot.set(s / 2, i / 2), r
                };
                class a {
                    constructor(e, t) {
                        this.game = e, this.border = t, this.container = new o.Container, this.background = new o.Container, this.foreground = new o.Container, this.food = new o.Container, this.food.visible = n.Z.get("foodVisible"), this.backgroundSprite = null, this.borderGraphic = r(t), this.background.addChild(this.borderGraphic), this.container.addChild(this.background, this.food, this.foreground), this.resetMassTextStyle(!1), this.setPosition();
                        o.utils.isWebGLSupported() && n.Z.get("useWebGL") && n.Z.get("showBackgroundImage") && this.setBackgroundImage(), this.background.position.x = t.x, this.background.position.y = t.y
                    }
                    setPosition() {
                        const {
                            container: e
                        } = this;
                        e.position.x = window.innerWidth / 2, e.position.y = window.innerHeight / 2
                    }
                    sort() {
                        let e;
                        this.foreground.children.sort(((t, s) => (e = (t = t.gameData).size === (s = s.gameData).size ? "id" : "size", t[e] - s[e])))
                    }
                    addCell(e) {
                        this.foreground.addChild(e)
                    }
                    addFood(e) {
                        this.food.addChild(e)
                    }
                    setBackgroundImage() {
                        let e = n.Z.get("backgroundImageUrl");
                        if (!e) return void this.destroyBackgroundImage();
                        let {
                            border: t
                        } = this, s = (n.Z.get("backgroundImageRepeat") ? o.TilingSprite : o.Sprite).from(e, {});
                        s.width = t.width, s.height = t.height, s.alpha = n.Z.get("backgroundImageOpacity"), s.anchor.set(.5);
                        const i = this.backgroundSprite;
                        if (i) {
                            const e = s.texture !== i.texture;
                            this.destroyBackgroundImage(e)
                        }
                        if (this.backgroundSprite = s, this.background.addChildAt(s, 0), t.circle) {
                            let {
                                width: e,
                                height: s
                            } = t, i = (new o.Graphics).beginFill(16777215).drawEllipse(e / 2, s / 2, e / 2, s / 2).endFill();
                            i.pivot.set(e / 2, s / 2), this.background.addChildAt(i, 1), this.backgroundSprite.mask = i
                        }
                    }
                    destroyBackgroundImage(e = !1) {
                        this.backgroundSprite && (this.backgroundSprite.destroy({
                            children: e,
                            texture: e,
                            baseTexture: e
                        }), this.backgroundSprite = null)
                    }
                    toggleBackgroundImage(e) {
                        e && !this.backgroundSprite ? this.setBackgroundImage() : e || this.destroyBackgroundImage(!0)
                    }
                    resetBorder() {
                        this.borderGraphic.destroy(), this.borderGraphic = r(this.border), this.background.addChild(this.borderGraphic)
                    }
                    resetMassTextStyle(e) {
                        e && this.uninstallMassTextFont();
                        const t = this.game.massTextStyle;
                        o.BitmapFont.from("mass", t, {
                            chars: "1234567890k."
                        });
                        let s = {
                            children: !1,
                            texture: !1,
                            baseTexture: !1
                        };
                        const n = this.game.massTextPool;
                        for (; n.length;) n.pop().destroy(s);
                        i.u.forEach((e => {
                            let t = e;
                            t.isPlayerCell && t.massText && (t.sprite.removeChild(t.massText), t.massText.destroy(s), delete t.massText)
                        }))
                    }
                    uninstallMassTextFont() {
                        o.BitmapFont.uninstall("mass")
                    }
                }
            },
            7024: (e, t, s) => {
                s.d(t, {
                    J8: () => c,
                    it: () => h,
                    oJ: () => d
                });
                var i = s(9102),
                    n = s(3698),
                    o = s(4909),
                    r = s(2213),
                    a = function(e, t, s, i) {
                        return new(s || (s = Promise))((function(n, o) {
                            function r(e) {
                                try {
                                    l(i.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function a(e) {
                                try {
                                    l(i.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function l(e) {
                                var t;
                                e.done ? n(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                    e(t)
                                }))).then(r, a)
                            }
                            l((i = i.apply(e, t || [])).next())
                        }))
                    };
                class l {
                    constructor() {
                        this.cache = new Map, this.factoredSize = (this.size = n.Z.cellSize) / 2
                    }
                    reset() {
                        this.cache.forEach((e => e.destroy(!0))), this.cache.clear()
                    }
                }
                let h = s.g.circleManager = new class extends l {
                        get(e, t = !0) {
                            let {
                                cache: s
                            } = this;
                            if (s.has(e)) return s.get(e); {
                                let {
                                    factoredSize: n,
                                    size: o
                                } = this, a = (new r.Graphics).beginFill(e).drawCircle(0, 0, n).endFill();
                                a.position.set(n);
                                let l = r.RenderTexture.create({
                                    width: o,
                                    height: o
                                });
                                return s.set(e, l), t && i.Z.render(a, l), l
                            }
                        }
                    },
                    d = new class extends l {
                        get(e, t = !0) {
                            let {
                                cache: s
                            } = this;
                            if (s.has(e)) return s.get(e); {
                                let {
                                    factoredSize: n,
                                    size: o
                                } = this, a = (new r.Graphics).beginFill(e).drawRect(-n, -n, 2 * n, 2 * n).endFill();
                                a.position.set(n);
                                let l = r.RenderTexture.create({
                                    width: o,
                                    height: o
                                });
                                return s.set(e, l), t && i.Z.render(a, l), l
                            }
                        }
                    },
                    c = s.g.virusTexture = new class {
                        constructor() {
                            this.texture = r.RenderTexture.create({
                                width: 200,
                                height: 200
                            })
                        }
                        load(e) {
                            return a(this, void 0, void 0, (function*() {
                                if (!this.loading) {
                                    this.loading = !0;
                                    try {
                                        const t = yield r.Texture.fromURL(e, {
                                                width: 200,
                                                height: 200
                                            }),
                                            s = r.Sprite.from(t);
                                        i.Z.render(s, this.texture, !0), (0, o.Kz)(0, "Loaded static virus texture")
                                    } catch (t) {
                                        (0, o.Kz)(1, `Failed to load static virus texture (URL=${e})`)
                                    }
                                    delete this.loading
                                }
                            }))
                        }
                        get() {
                            return this.texture
                        }
                    }
            },
            6985: (e, t, s) => {
                s.d(t, {
                    Z: () => m
                });
                var i = s(9980),
                    n = s(5315),
                    o = s(8733),
                    r = s(9202),
                    a = s(8913),
                    l = s(2550),
                    h = function(e, t, s, i) {
                        if ("a" === s && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === s ? i : "a" === s ? i.call(e) : i ? i.value : t.get(e)
                    },
                    d = function(e, t, s, i, n) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? n.call(e, s) : n ? n.value = s : t.set(e, s), s
                    };
                const c = {},
                    u = e => setTimeout(e);
                u((() => {
                    c.gameObject = new i.l
                })), u((() => {
                    c.playerManager = new n.X
                })), u((() => {
                    c.actionManager = new o.k
                })), u((() => {
                    c.connection = new r.e
                })), u((() => {
                    c.input = new a.I
                })), u((() => {
                    const e = new l.Yl;
                    e.init(), c.wasmModule = e
                }));
                const p = function(e, ...t) {
                    var s, i;
                    class n extends e {
                        static get() {
                            return h(this, s, "f", i) || d(this, s, new e(...t), "f", i), h(this, s, "f", i)
                        }
                    }
                    return s = n, i = {
                        value: void 0
                    }, n
                }(i.l);
                p.get();
                const m = p
            },
            9044: (e, t, s) => {
                s.d(t, {
                    RM: () => u,
                    So: () => c,
                    eX: () => d
                });
                var i = s(9980),
                    n = s(5315),
                    o = s(3698),
                    r = s(4909),
                    a = s(2608),
                    l = s(9120);
                let h = new Map([
                    [2, l.Cy],
                    [3, l.n6],
                    [4, l.jr],
                    [5, l.V7],
                    [6, l._O],
                    [9, l.sN]
                ]);
                const d = (e, t, s, o, r, d, c, u) => {
                        let p, m = 15 & e;
                        if (o = 32 & e ? void 0 : o, d = 64 & e ? void 0 : d, !(3 !== m && 4 !== m || void 0 !== o && void 0 !== d)) {
                            let {
                                food: e
                            } = i.Z, t = d = 3 === m ? e.ejectedSize || 1 : e.minSize + s % e.stepSize || 1;
                            if (4 == m) {
                                let {
                                    border: e
                                } = i.Z;
                                o = e.minx + t + (e.width - 2 * t) * i.Z.seededRandom(65536 + s), r = e.miny + t + (e.height - 2 * t) * i.Z.seededRandom(131072 + s)
                            }
                        }
                        if (a.u.has(s)) p = a.u.get(s), p.update(i.Z.timeStamp), p.ox = p.x, p.oy = p.y, p.oSize = p.size, void 0 !== o && (p.nx = o, p.ny = r), void 0 !== d && (p.nSize = d);
                        else {
                            if (h.has(m)) {
                                p = new(h.get(m))(s, o, r, d, c)
                            } else if (1 == m) {
                                const e = n.Z.getPlayer(t);
                                p = new l.PB(s, o, r, d, c, e)
                            } else {
                                let e = 4210752,
                                    t = !0;
                                c > 1 && (e = 0, 128 & c && (e |= 7340032), 64 & c && (e |= 28672), 32 & c && (e |= 112), 16 & c && (t = !1)), p = new l.V7(s, o, r, d, c, t, e)
                            }
                            const {
                                scene: e
                            } = i.Z;
                            e[1 & c ? "addFood" : "addCell"](p.sprite), a.u.set(s, p)
                        }
                        p.updateStamp = i.Z.timeStamp;
                        const g = p;
                        return g.pid && g.pid === i.Z.activePid ? 1 : 0
                    },
                    c = e => {
                        a.u.has(e) && a.u.get(e).destroy()
                    },
                    u = (e, t) => {
                        if (!a.u.has(e)) return;
                        const s = a.u.get(e);
                        if (!a.u.has(t)) return s.destroy();
                        const n = a.u.get(t);
                        s.update(s.updateStamp = i.Z.timeStamp), s.destroy(o.Z.get("eatAnimation")), s.nx = n.nx, s.ny = n.ny;
                        const l = s.nSize;
                        s.nSize = 0, s.scale = (0, r.IV)(l / n.nSize, 0, 1)
                    }
            },
            174: (e, t, s) => {
                s.d(t, {
                    Z: () => o
                });
                var i = s(8529),
                    n = s(8603);
                const o = (0, s(3744).Z)(n.Z, [
                    ["render", i.s]
                ])
            },
            6977: (e, t, s) => {
                s.d(t, {
                    Z: () => o
                });
                var i = s(5194),
                    n = s(8655);
                const o = (0, s(3744).Z)(n.Z, [
                    ["render", i.s]
                ])
            },
            8811: (e, t, s) => {
                s.d(t, {
                    Z: () => o
                });
                var i = s(562),
                    n = s(6289);
                const o = (0, s(3744).Z)(n.Z, [
                    ["render", i.s]
                ])
            },
            2174: (e, t, s) => {
                s.d(t, {
                    Z: () => o
                });
                var i = s(9757),
                    n = s(3379);
                const o = (0, s(3744).Z)(n.Z, [
                    ["render", i.s]
                ])
            },
            8603: (e, t, s) => {
                s.d(t, {
                    Z: () => i.Z
                });
                var i = s(8962)
            },
            8655: (e, t, s) => {
                s.d(t, {
                    Z: () => i.Z
                });
                var i = s(198)
            },
            6289: (e, t, s) => {
                s.d(t, {
                    Z: () => i.Z
                });
                var i = s(6071)
            },
            3379: (e, t, s) => {
                s.d(t, {
                    Z: () => i.Z
                });
                var i = s(6733)
            },
            8529: (e, t, s) => {
                s.d(t, {
                    s: () => i.s
                });
                var i = s(2140)
            },
            5194: (e, t, s) => {
                s.d(t, {
                    s: () => i.s
                });
                var i = s(9581)
            },
            562: (e, t, s) => {
                s.d(t, {
                    s: () => i.s
                });
                var i = s(7199)
            },
            9757: (e, t, s) => {
                s.d(t, {
                    s: () => i.s
                });
                var i = s(1416)
            },
            6619: (e, t, s) => {
                e.exports = s.p + "9726934bab66343ab869.js"
            },
            7992: (e, t, s) => {
                e.exports = s.p + "2f01f2fc4a8823712d15.wasm"
            }
        },
        i = {};

    function n(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        var o = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return s[e].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
    }
    n.m = s, t = [], n.O = (e, s, i, o) => {
        if (!s) {
            var r = 1 / 0;
            for (d = 0; d < t.length; d++) {
                for (var [s, i, o] = t[d], a = !0, l = 0; l < s.length; l++)(!1 & o || r >= o) && Object.keys(n.O).every((e => n.O[e](s[l]))) ? s.splice(l--, 1) : (a = !1, o < r && (r = o));
                if (a) {
                    t.splice(d--, 1);
                    var h = i();
                    void 0 !== h && (e = h)
                }
            }
            return e
        }
        o = o || 0;
        for (var d = t.length; d > 0 && t[d - 1][2] > o; d--) t[d] = t[d - 1];
        t[d] = [s, i, o]
    }, n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var s in t) n.o(t, s) && !n.o(e, s) && Object.defineProperty(e, s, {
            enumerable: !0,
            get: t[s]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), n.p = "./", (() => {
        n.b = document.baseURI || self.location.href;
        var e = {
            179: 0
        };
        n.O.j = t => 0 === e[t];
        var t = (t, s) => {
                var i, o, [r, a, l] = s,
                    h = 0;
                if (r.some((t => 0 !== e[t]))) {
                    for (i in a) n.o(a, i) && (n.m[i] = a[i]);
                    if (l) var d = l(n)
                }
                for (t && t(s); h < r.length; h++) o = r[h], n.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                return n.O(d)
            },
            s = self.webpackChunkvanis_client = self.webpackChunkvanis_client || [];
        s.forEach(t.bind(null, 0)), s.push = t.bind(null, s.push.bind(s))
    })(), n.O(void 0, [736], (() => n(6981)));
    var o = n.O(void 0, [736], (() => n(648)));
    o = n.O(o)
})();
