Object.prototype.delay = function (d) { return [this, d] };
Object.prototype.fadeIn = function (t, c) {
    let e, d;
    if(this.length === 2) {
        e = this[0];
        d = this[1];
    } else {
        e = this;
        d = 0;
    }
    setTimeout((e, c) => {
        if (e.style.display == "none" || e.style.display == "") { e.show(); e.style.opacity = "0" }
        e.style.animationDuration = t + 'ms';
        e.style.animationFillMode = 'forwards';
        e.style.animationName = 'saeFadeIn';
        setTimeout((c) => { e.style.opacity = "1"; if(c) { c() } }, t, c);
    }, d, e, c);
};
Object.prototype.fadeOut = function (t, c) {
    let e, d;
    if(this.length === 2) {
        e = this[0];
        d = this[1];
    } else {
        e = this;
        d = 0;
    }
    setTimeout((e, t, c) => {
        e.style.animationDuration = t + 'ms';
        e.style.animationFillMode = 'forwards';
        e.style.animationName = 'saeFadeOut';
        setTimeout((x, c) => { x.hide(); e.style.opacity = "0"; if(c) { c() } }, t, e, c);
    }, d, e, t, c)
};
