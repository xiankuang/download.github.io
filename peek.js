/* ============================================================================
   侧边栏左边那只探头（恋恋探头.gif）—— 每 10 秒探一次头
   ----------------------------------------------------------------------------
   这支 GIF 自己是一轮 6.0 秒循环（60 帧 × 100ms，用 Pillow 量的），
   放着不管它会一直动。老大要「触发间隔 10 秒」，所以：

     0s     → 探（露出来，换一个新的 <img>，同一 URL 走缓存，动画从第一帧开始）
     5.68s  → 开始淡出（0.32s）
     6.04s  → 藏起来（display:none，别让它白转这 4 秒）
     10s    → 再来一次

   两个坑（都踩过）：
   ① 浏览器不会因为 display:none→block 就把 GIF 倒回第一帧，得换一个同 URL 的**新元素**；
   ② cloneNode 会把上一轮的 style="display:none" 一起复制过来 ⇒ 必须 removeAttribute('style')，
      否则第二轮往后永远不出现。
   淡出用 animation 而不是 transition：万一动画不跑，元素也只是"硬切"消失，不会卡在半透明。
   系统开了「减少动态效果」就不接管，保持原来那样一直循环。
   ============================================================================ */
(function () {
    'use strict';

    var host = document.querySelector('.card1');
    var img = host && host.querySelector('.sidebar-left-img');
    if (!img) return;

    var SRC = img.getAttribute('src');
    var PLAY = 4000;    // 这支 GIF 真正有画面的只有 0.1~3.9s（第 1~39 帧），40~59 帧是空的，所以放 4 秒就够
    var CYCLE = 10000;  // 老大要的触发间隔
    var FADE = 320;     // 淡出时长（和 CSS 里的 animation 对齐）

    var reduce = false;
    try {
        reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
        reduce = false;
    }
    if (reduce) return;

    var fadeTimer = 0;
    var hideTimer = 0;

    function peek() {
        window.clearTimeout(fadeTimer);
        window.clearTimeout(hideTimer);

        var next = img.cloneNode(false);
        next.removeAttribute('style');          // ← 关键：别把上一轮的 display:none 带过来
        next.className = 'sidebar-left-img';
        next.setAttribute('src', SRC);
        host.replaceChild(next, img);
        img = next;

        fadeTimer = window.setTimeout(function () {
            img.classList.add('is-leaving');
            hideTimer = window.setTimeout(function () {
                if (img) img.style.display = 'none';
            }, FADE + 40);
        }, PLAY - FADE);

        window.setTimeout(peek, CYCLE);
    }

    // 页面一打开先探一次，之后每 10 秒一次
    window.setTimeout(peek, 0);
})();