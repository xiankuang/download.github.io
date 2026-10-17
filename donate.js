/* ============================================================================
   捐款框：选金额 / 切货币 / 「确认捐助」跳到对应平台
   —— 纯静态站没有后端，金额不会随链接带过去（平台不接受这种参数），
      所以按钮下面那行写明了"跳转后自己填"。
   爱心是 CSS 画在按钮里的（常态自下而上飘、悬停变红、文字右边那颗变白），
   全部锁在按钮内部，不飞出按钮。
   ============================================================================ */
(function () {
    'use strict';

    var box = document.getElementById('donateBox');
    if (!box) return;

    var LINKS = {
        cny: 'https://afdian.com/order/create?user_id=4ce0136447e811ed96ce52540025c377&remark=&affiliate_code=',
        usd: 'https://ko-fi.com/xkxiankuang'
    };
    var SYMBOL = { cny: '\u00a5', usd: '$' };
    var PLATFORM = { cny: '爱发电', usd: 'Ko-fi' };

    /* 两套价位：人民币 5/10/20/50/100，美刀 1/3/5/10/20（各五档，位置一一对应） */
    var AMOUNTS = {
        cny: [5, 10, 20, 50, 100],
        usd: [1, 3, 5, 10, 20]
    };

    var state = { currency: 'cny', idx: 0 };

    var curBtns = box.querySelectorAll('.donate-cur button');
    var amtBtns = box.querySelectorAll('.donate-amounts button');
    var goBtn = box.querySelector('#donateGo');
    var note = box.querySelector('#donateNote');

    function each(list, fn) {
        for (var i = 0; i < list.length; i++) fn(list[i], i);
    }

    /* 选中第几档（切换货币时档位保持不变） */
    function setAmount(idx) {
        state.idx = idx;
        each(amtBtns, function (b, i) {
            b.setAttribute('aria-pressed', String(i === idx));
        });
    }

    /* 货币切换：换符号、换价位、换平台链接、换说明文字 */
    function setCurrency(cur) {
        state.currency = cur;
        each(curBtns, function (b) {
            b.setAttribute('aria-pressed', String(b.dataset.cur === cur));
        });
        each(amtBtns, function (b, i) {
            b.textContent = SYMBOL[cur] + ' ' + AMOUNTS[cur][i];
        });
        if (note) {
            note.href = LINKS[cur];
            note.textContent = '用 ' + PLATFORM[cur] + ' 支付 · 跳转后自己填金额';
        }
        setAmount(state.idx);
    }

    /* 点下去：先让按钮亮成悬停态（0.35s 过渡），再跳平台。
       ⚠ 这个类只是"按下的即时反馈"，必须在跳转前撤掉：
       否则一旦跳转被拦（比如浏览器不让离开当前页），按钮会一直卡在暗色上，
       鼠标移开也不复原。 */
    function pay() {
        if (goBtn.dataset.busy === '1') return;
        goBtn.dataset.busy = '1';
        goBtn.classList.add('is-hover');
        window.setTimeout(function () {
            goBtn.classList.remove('is-hover');
            window.location.href = LINKS[state.currency];
        }, 650);
    }

    /* 悬停效果是纯 CSS 的 :hover，鼠标移开本来就会自己复原；
       这里再兜一层：指针离开 / 失焦时把临时的 .is-hover 摘掉，保证一定复原 */
    ['mouseleave', 'pointerleave', 'blur'].forEach(function (ev) {
        goBtn.addEventListener(ev, function () {
            goBtn.classList.remove('is-hover');
        });
    });

    /* 从「爱发电 / Ko-fi」按浏览器返回时，页面是从 bfcache 里恢复的，
       会把点击那一刻的 DOM 原样带回来 —— 这里清一次，保证按钮回到常态 */
    window.addEventListener('pageshow', function () {
        goBtn.classList.remove('is-hover');
        goBtn.dataset.busy = '';
    });

    /* ── 事件 ─────────────────────────────────────────────────────── */
    each(curBtns, function (b) {
        b.addEventListener('click', function () { setCurrency(b.dataset.cur); });
    });

    each(amtBtns, function (b, i) {
        b.addEventListener('click', function () { setAmount(i); });
    });

    if (goBtn) goBtn.addEventListener('click', pay);

    // 初始化
    setCurrency(state.currency);

    /* 调试用（只影响截图，不影响正常使用）：
       ?donate-cur=usd   → 以美元初始化
       ?donate-hover=1   → 直接挂上悬停状态（无头浏览器没法真的把鼠标移上去） */
    var curParam = /[?&]donate-cur=(cny|usd)/.exec(window.location.search);
    if (curParam) setCurrency(curParam[1]);
    if (/(\?|&)donate-hover=1/.test(window.location.search) && goBtn) {
        // 无头浏览器里 CSS 过渡不随虚拟时间推进，会被冻在起始帧；
        // 先把过渡关掉再挂状态，截出来的才是"过渡结束"的样子
        goBtn.style.transition = 'none';
        each(goBtn.querySelectorAll('.gh'), function (h) { h.style.transition = 'none'; });
        each(goBtn.querySelectorAll('.go-label'), function (l) { l.style.transition = 'none'; });
        each(goBtn.querySelectorAll('.go-pop'), function (p) { p.style.transition = 'none'; });
        goBtn.classList.add('is-hover');
    }
    // ?donate-float=1 → 把飘动动画定格在第 2 秒，用来核对"心确实在动"
    if (/(\?|&)donate-float=1/.test(window.location.search) && goBtn) {
        each(goBtn.querySelectorAll('.gh'), function (h) {
            h.style.animationDelay = '-2s';
            h.style.animationPlayState = 'paused';
        });
    }
})();
