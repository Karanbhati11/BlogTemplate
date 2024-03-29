var html = document.documentElement,
  body = document.body;
function colorScheme() {
  html.classList.contains("auto-color-scheme") &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? (html.classList.add("dark"),
      document.querySelectorAll(".logo .is-auto.is-dark").forEach((e) => {
        e.style.display = "block";
      }))
    : document.querySelectorAll(".logo .is-auto.is-light").forEach((e) => {
        e.style.display = "block";
      });
}
function menu() {
  var e = document.querySelector(".toggle-dropdown");
  if (e) {
    const t = document.querySelector(".dropdown");
    e.addEventListener("click", () => {
      t.classList.toggle("lg:hidden");
    });
  }
}
function mobileMenu() {
  var e = document.querySelector(".toggle-nav");
  if (e) {
    const t = document.querySelector(".nav");
    e.addEventListener("click", () => {
      t.classList.toggle("hidden");
    });
  }
}
function postSlider() {
  document.querySelectorAll(".featured-section").forEach(function (e) {
    const o = e.querySelector(".featured-wrap"),
      t = e.querySelector(".featured-btn-previous"),
      n = e.querySelector(".featured-btn-next");
    if (o) {
      e = matchMedia("(min-width:1281px)").matches
        ? ((i = 1), (c = 0.025), (r = 0.38), 5)
        : ((i = 1), (c = 0.2), (r = 0.8), 10);
      var c,
        r,
        i,
        l,
        s,
        a = new Flickity(o, {
          cellAlign: "left",
          contain: !0,
          groupCells: i,
          prevNextButtons: !1,
          pageDots: !1,
          dragThreshold: e,
          selectedAttraction: c,
          friction: r,
          imagesLoaded: !0,
        });
      new IntersectionObserver(
        function (e, t) {
          e.forEach((e) =>
            e.target.classList.toggle("is-visible", e.isIntersecting)
          ),
            o.querySelector(".is-visible")
              ? n.classList.toggle("is-end")
              : n.classList.remove("is-end");
        },
        { root: null, threshold: 0 }
      ).observe(o.querySelector(".item .item-image .is-last")),
        a.on("change", function (e) {
          0 < e ? t.classList.add("is-prev") : t.classList.remove("is-prev");
        }),
        t.addEventListener("click", function () {
          a.previous();
        }),
        n.addEventListener("click", function () {
          a.next();
        });
      for (s of ((i = o.querySelectorAll(".featured-wrap")), (l = 0), i))
        (s.ontouchstart = function (e) {
          l = e.touches[0].clientX;
        }),
          (s.ontouchmove = function (e) {
            5 < Math.abs(e.touches[0].clientX - l) &&
              e.cancelable &&
              e.preventDefault();
          });
    }
  });
}
function infniteScroll() {
  var e,
    t = document.getElementById("next");
  t &&
    ((e = t.dataset.container),
    (t = t.dataset.items),
    new InfiniteScroll("." + e, {
      path: "#next",
      append: "." + e + " ." + t,
      history: !1,
      button: "#loadmore",
      hideNav: "#next",
      scrollThreshold: !1,
    }).on("append", function (e, t, o) {
      for (var n = 0; n < o.length; n++) {
        l = i = r = c = void 0;
        for (
          var c = o[n], r = c.querySelectorAll("img[srcset]"), i = 0;
          i < r.length;
          i++
        ) {
          var l = r[i];
          l.outerHTML = l.outerHTML;
        }
      }
    }));
}
function copyToClipboard() {
  var e = document.querySelector(".copy-to-clipboard");
  const t = document.querySelector(".copy-to-clipboard-success");
  e &&
    e.addEventListener("click", function (e) {
      e.preventDefault();
      e = window.location.href;
      navigator.clipboard.writeText(e).then(function () {
        t.classList.toggle("hidden"),
          setTimeout(function () {
            t.classList.toggle("hidden");
          }, 3e3);
      });
    });
}
colorScheme(),
  menu(),
  mobileMenu(),
  postSlider(),
  infniteScroll(),
  copyToClipboard();
//# sourceMappingURL=scripts.js.map
