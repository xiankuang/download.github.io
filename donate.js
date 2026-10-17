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

    /* 每档的玩笑话（老大 2026-10-17 给的原话）。只配给人民币档；
       美刀档先只显示价格 —— 老大要给美元版文案时加一行数组就行。 */
    /* 人民币用玩笑话，美刀用英文版（老大 2026-10-17：「美刀我们换成英文版的就行」） */
    var PHRASES = {
        cny: ['请框框吃薯片', '请框框喝奶茶', '给框框买箱干脆面', 'v框50元', '哇哇哇，真的么'],
        usd: ['Chips for Kuangkuang', 'Tea for Kuangkuang', 'Noodles for Kuangkuang', 'V Kuangkuang 50', 'Wait, really?!']
    };
    /* 按钮里飘的剪影跟着档位走：前四档各是一种吃的，第五档还是心心 */
    var FOODS = ['chip', 'tea', 'noodle', 'chicken', 'heart'];

    var state = { currency: 'cny', idx: 0 };

    var curBtns = box.querySelectorAll('.donate-cur button');
    var amtBtns = box.querySelectorAll('.donate-amounts button');
    var goBtn = box.querySelector('#donateGo');
    var goLabel = goBtn ? goBtn.querySelector('.go-label') : null;
    var goHearts = box.querySelector('.go-hearts');
    var note = box.querySelector('#donateNote');

    function each(list, fn) {
        for (var i = 0; i < list.length; i++) fn(list[i], i);
    }

    /* 选中第几档（切换货币时档位保持不变） */
    /* 选中哪一档，「确认捐助」上的字就换成那一档的话（老大 2026-10-17 要的）。
       美刀档没配文案，保持「确认捐助」不变。 */
    function setGoLabel() {
        if (!goLabel) return;
        var list = PHRASES[state.currency] || [];
        var note = list[state.idx] || '';
        goLabel.textContent = note || (state.currency === 'usd' ? 'Donate' : '确认捐助');
        /* 英文那几条比中文长，塞不下就等比缩字号（最小 11px），别让它顶出按钮 */
        goLabel.style.fontSize = '';
        var room = goBtn.clientWidth - 26;
        var w = goLabel.offsetWidth;
        if (w > room && room > 0) {
            var size = Math.max(11, Math.floor(15 * room / w));
            goLabel.style.fontSize = size + 'px';
        }
        /* 四种吃的对应前四档，第五档回到心心 */
        if (goHearts) goHearts.dataset.food = FOODS[state.idx] || 'heart';
        /* 悬停那颗白心跟着文字的右边缘走：文字变长时不能还停在 50%+44px（会压到字上） */
        goBtn.style.setProperty('--pop-left', Math.round(goLabel.offsetWidth / 2 + 12) + 'px');
    }

    function setAmount(idx) {
        state.idx = idx;
        each(amtBtns, function (b, i) {
            b.setAttribute('aria-pressed', String(i === idx));
        });
        setGoLabel();
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
    /* 截图钩子会用 forceHover 把状态钉住，这时不能被这些事件顺手摘掉 */
    var forceHover = false;

    ['mouseleave', 'pointerleave', 'blur'].forEach(function (ev) {
        goBtn.addEventListener(ev, function () {
            if (forceHover) return;
            goBtn.classList.remove('is-hover');
        });
    });

    /* 从「爱发电 / Ko-fi」按浏览器返回时，页面是从 bfcache 里恢复的，
       会把点击那一刻的 DOM 原样带回来 —— 这里清一次，保证按钮回到常态 */
    window.addEventListener('pageshow', function () {
        if (forceHover) return;          // 截图钩子钉住的状态不许被清
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
    var idxParam = /[?&]donate-idx=(\d)/.exec(window.location.search);
    if (idxParam) setAmount(Number(idxParam[1]));
    var curParam = /[?&]donate-cur=(cny|usd)/.exec(window.location.search);
    if (curParam) setCurrency(curParam[1]);
    if (/(\?|&)donate-hover=1/.test(window.location.search) && goBtn) {
        // 无头浏览器里 CSS 过渡不随虚拟时间推进，会被冻在起始帧；
        // 先把过渡关掉再挂状态，截出来的才是"过渡结束"的样子
        goBtn.style.transition = 'none';
        forceHover = true;
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
