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
    /* 平台名也要分语言（英文站里 爱发电 写作 Afdian） */
    var PLATFORM = {
        cny: { zh: '爱发电', en: 'Afdian' },
        usd: { zh: 'Ko-fi', en: 'Ko-fi' }
    };

    /* 两套价位：人民币 5/10/20/50/100，美刀 1/3/5/10/20（各五档，位置一一对应） */
    var AMOUNTS = {
        cny: [5, 10, 20, 50, 100],
        usd: [1, 3, 5, 10, 20]
    };

    /* 每档的玩笑话 —— 按**语言**分，不按货币（2026-10-17 老大改成按地区自动切语言） */
    var PHRASES = {
        zh: ['请框框吃薯片', '请框框喝奶茶', '给框框买箱干脆面', 'v框50元', '哇哇哇，真的么'],
        en: ['Chips for Kuangkuang', 'Tea for Kuangkuang', 'Noodles for Kuangkuang', 'V Kuangkuang 50', 'Wait, really?!']
    };
    /* 按钮里飘的剪影跟着档位走：前四档各是一种吃的，第五档还是心心 */
    var FOODS = ['chip', 'tea', 'noodle', 'chicken', 'heart'];

    /* 语言：默认英文，只有中国大陆用中文（老大 2026-10-17：
       「除了中国，其他的国家都用英文版本」）。没有后端，用**时区**当国家代理，
       比 navigator.language 准（在中国但系统是英文的用户也会拿到中文版）。 */
    function guessLang() {
        var tz = '';
        try { tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || ''); } catch (e) { tz = ''; }
        if (/^Asia\/(Shanghai|Chongqing|Harbin|Urumqi|Kashgar|Beijing|Kashi|Hong_Kong|Macau)$/i.test(tz)) return 'zh';
        if (!tz) {
            var langs = navigator.languages || [navigator.language || ''];
            for (var i = 0; i < langs.length; i++) {
                if (/^zh([-_]|$)/i.test(langs[i])) return 'zh';
            }
        }
        return 'en';
    }

    var state = { currency: 'cny', idx: 0, lang: guessLang() };

    var curBtns = box.querySelectorAll('.donate-cur button');
    var amtBtns = box.querySelectorAll('.donate-amounts button');
    var goBtn = box.querySelector('#donateGo');
    var goLabel = goBtn ? goBtn.querySelector('.go-label') : null;
    var goHearts = box.querySelector('.go-hearts');
    var note = box.querySelector('#donateNote');
    var titleEl = box.querySelector('.donate-title');
    var subEl = box.querySelector('.donate-sub');
    var curGroup = box.querySelector('.donate-cur');
    var amtGroup = box.querySelector('.donate-amounts');

    function each(list, fn) {
        for (var i = 0; i < list.length; i++) fn(list[i], i);
    }

    /* 选中第几档（切换货币时档位保持不变） */
    /* 选中哪一档，「确认捐助」上的字就换成那一档的话（老大 2026-10-17 要的）。
       美刀档没配文案，保持「确认捐助」不变。 */
    function setGoLabel() {
        if (!goLabel) return;
        var list = PHRASES[state.lang] || [];
        var note = list[state.idx] || '';
        goLabel.textContent = note || (state.lang === 'en' ? 'Donate' : '确认捐助');
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

    /* 整块文案按**语言**切（货币切换只改符号/价位/平台，不改语言） */
    var TEXT = {
        zh: {
            title: '支持一下',
            sub: '金额随意，都是心意',
            ariaCur: '货币',
            ariaAmt: '金额',
            note: function (platform) { return '用 ' + platform + ' 支付 · 跳转后自己填金额'; }
        },
        en: {
            title: 'Support',
            sub: 'Any amount, all appreciation',
            ariaCur: 'Currency',
            ariaAmt: 'Amount',
            note: function (platform) { return 'Pay with ' + platform + ' · enter amount there'; }
        }
    };

    /* 底部那行说明同时受语言和平台影响，单独一个函数 */
    function setNote() {
        if (!note) return;
        var t = TEXT[state.lang];
        note.href = LINKS[state.currency];
        note.textContent = t.note(PLATFORM[state.currency][state.lang]);
    }

    /* 换语言：标题/副标题/无障碍标签/底部说明/按钮文字一起换 */
    function setLang(lang) {
        state.lang = lang;
        var t = TEXT[lang];
        if (titleEl) titleEl.textContent = t.title;
        if (subEl) subEl.textContent = t.sub;
        if (curGroup) curGroup.setAttribute('aria-label', t.ariaCur);
        if (amtGroup) amtGroup.setAttribute('aria-label', t.ariaAmt);
        setNote();
        setGoLabel();
    }

    /* 货币切换：只换符号、价位、平台链接和说明里的平台名。
       货币按钮上写死 ¥ CNY / $ USD，两套语言都一样（老大 2026-10-17 定） */
    function setCurrency(cur) {
        state.currency = cur;
        each(curBtns, function (b) {
            b.setAttribute('aria-pressed', String(b.dataset.cur === cur));
        });
        each(amtBtns, function (b, i) {
            b.textContent = SYMBOL[cur] + ' ' + AMOUNTS[cur][i];
        });
        setNote();
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

    // 初始化：语言先定（决定文案），货币再定（中国默认人民币，别处默认美刀）
    if (state.lang !== 'zh') state.currency = 'usd';
    setLang(state.lang);
    setCurrency(state.currency);

    /* 调试用（只影响截图，不影响正常使用）：
       ?donate-cur=usd   → 以美元初始化
       ?donate-hover=1   → 直接挂上悬停状态（无头浏览器没法真的把鼠标移上去） */
    var idxParam = /[?&]donate-idx=(\d)/.exec(window.location.search);
    if (idxParam) setAmount(Number(idxParam[1]));
    var curParam = /[?&]donate-cur=(cny|usd)/.exec(window.location.search);
    if (curParam) setCurrency(curParam[1]);
    var langParam = /[?&]lang=(zh|en)/.exec(window.location.search);
    if (langParam) { setLang(langParam[1]); }
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
