/* ============================================================================
   点一下头像：换成另一张图（一秒）+ 整个头像框被「捏」一下
   ----------------------------------------------------------------------------
   老大 2026-10-17 要的：点个人头像 → 换成 xk2.png 一秒，然后换回来，
   并且头像框要有被捏变形的回弹。
   换图走 <img src>，变形走容器上的 .is-squish（关键帧在 style.css 的 squish 里）。
   连点不会错乱：每次点都清掉上一轮的还原计时器，以最后一次为准。
   系统开了「减少动态效果」→ 只换图，不做变形。
   ============================================================================ */
(function () {
    'use strict';

    var box = document.querySelector('.card1-img-container');
    var img = box && box.querySelector('.card1-img');
    if (!box || !img) return;

    var BASE = img.getAttribute('src');
    var POKE = box.getAttribute('data-poke') || './xk2.png';
    var HOLD = 1000;                 // 换图停留时间（老大要的"一秒"）
    var timer = 0;

    var reduce = false;
    try {
        reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
        reduce = false;
    }

    // 先预载，点下去不用等。onload 里把 pre 释放掉，免得占着引用
    var pre = new Image();
    pre.onload = function () { pre = null; };
    pre.src = POKE;

    function poke() {
        img.setAttribute('src', POKE);

        if (!reduce) {
            box.classList.remove('is-squish');
            void box.offsetWidth;     // 强制回流，动画才会重新播
            box.classList.add('is-squish');
        }

        window.clearTimeout(timer);
        timer = window.setTimeout(function () {
            img.setAttribute('src', BASE);
            box.classList.remove('is-squish');
        }, HOLD);
    }

    box.addEventListener('click', poke);
    box.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            poke();
        }
    });
})();