// 卡片数据（包含下载链接）| __ghostCursorInstalled
const resources = [
    {
        id: 'scm',
        title: '简易光标制作器scm',
        description: '超级好用的光标编辑器',
        image: './icon/scm宣传.png',
        links: {
            quark: 'https://pan.quark.cn/s/2b1a0dbb34e9',
            baidu: 'https://pan.baidu.com/s/1JJs5Jnr3lEtm0SerPfbiFA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l1y0s2d',
            steam: 'https://store.steampowered.com/app/3254220/Simple_Cursor_Maker/',
        }
    },
    {
        id: 'xingjianya2.1',
        title: '星见雅光标',
        description: '可爱镍',
        image: './icon/xingjianya2_光标_宣传.gif',
        cursor: './cursor/miyabi_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/2f459d07c4f1',
            lanzou: 'https://wwbny.lanzoue.com/b00l32nc4h',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/xingjianya2_6.exe',
        }
    },
    {
        id: 'maodie',
        title: '哈气耄耋',
        description: '哈',
        image: './icon/哈气耄耋.png',
        links: {
            quark: 'https://pan.quark.cn/s/dc9ea1a3431a',
            lanzou: 'https://wwbny.lanzoue.com/b00l32nc3g',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/sticker/maodie-s_5.exe',
        }
    },
    {
        id: 'luoxi',
        title: '洛茜',
        description: '小红帽',
        image: './icon/洛茜挂件宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/7a8d82d9d58e',
            lanzou: 'https://wwbny.lanzoue.com/b00l33k7fg',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/pendant/luoxi-p_main_2.exe',
        }
    }, 
    {
        id: 'yileina-p',
        title: '伊雷娜',
        description: '伊雷娜',
        image: './icon/伊雷娜悬浮挂件宣传a.gif',
        links: {
            quark: 'https://pan.quark.cn/s/0e72d673eaea',
            lanzou: 'https://wwbny.lanzoue.com/b00l33g4xc',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/follow/yileina-f_main_2.exe',
        }
    }, 
    {
        id: 'quancifang',
        title: '泉此方',
        description: '幸运星',
        image: './icon/泉此方光标宣传.gif',
        cursor: './cursor/konata_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/1f548ba2ee6e',
            lanzou: 'https://wwpy.lanzoue.com/b00l2e7bah',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/konata_6.exe',
        }
    }, 
     {
        id: 'deekseek',
        title: '大肥鱼',
        description: '吃白饭',
        image: './icon/大肥鱼挂件宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/11c9ff0630c7',
            lanzou: 'https://wwbny.lanzoue.com/b00l31hzih密码:6h9h',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/pendant/bigfish-p_main.exe',
        }
    },
    {
        id: 'teto3.0',
        title: 'teto',
        description: 'teto',
        image: './icon/teto_挂件_宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/606e427622ae',
            lanzou: 'https://wwbny.lanzoue.com/b00l312i7e密码:9tba',
        }
    },

    {
        id: 'niko3.0',
        title: 'Niko',
        description: 'Oneshot',
        image: './icon/niko挂件宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/091edbe43c0d',
            lanzou: 'https://wwbny.lanzoue.com/b00l32nc9c',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/pendant/niko-p_niko30.exe',
        }
    },
    {
        id: 'miku3.0',
        title: '初音未来',
        description: '初音未来',
        image: './icon/初音未来_挂件_宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/d45d1c79ef01',
            lanzou: 'https://wwbny.lanzoue.com/b00l2o49he',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/pendant/miku-p_3911.exe',
        }
    },
    {
        id: 'zhuzhu',
        title: '猪猪挂件',
        description: '猪猪',
        image: './icon/猪猪挂件.png',
        links: {
            quark: 'https://pan.quark.cn/s/c4ed8013684c',
            lanzou: 'https://wwbny.lanzoue.com/b00l2o49gd',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/pendant/zhuzhu-p_main.exe',
        }
    },

    {
        id: 'liyefu',
        title: '绿虫虫',
        description: '莉耶芙',
        image: './icon/绿虫虫挂件宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/86f81db4e97c',
            lanzou: 'https://wwbny.lanzoue.com/b00l2o49da',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/pendant/liyefu-p_30.exe',
        }
    },
    {
        id: 'feibi',
        title: '菲比',
        description: '菲比丘比',
        image: './icon/菲比光标宣传.gif',
        cursor: './cursor/feibi_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/8c4e21383e38',
            lanzou: 'https://wwbny.lanzoue.com/b00l2o49eb',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/feibi_main.exe',
        }
    },

    {
        id: 'zaomiao',
        title: '早苗',
        description: '早苗',
        image: './icon/早苗光标宣传.gif',
        cursor: './cursor/zaomiao_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/f91991d26afd',
            lanzou: 'https://wwbny.lanzoue.com/b00l2o49bi',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/zaomiao_main.exe',
        }
    },



    {
        id: 'chenqianyu',
        title: '陈千语',
        description: '啥子',
        image: './icon/陈千语光标宣传.gif',
        cursor: './cursor/chenqianyu_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/6e659ce89a58',
            lanzou: 'https://wwbny.lanzoue.com/b00l2m0wba',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/chenqianyu_main.exe',
        }
    },
    {
        id: 'xiaosan',
        title: '多多良小伞',
        description: '小伞',
        image: './icon/小伞光标宣传.gif',
        cursor: './cursor/kogasa_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/6be825387d35',
            lanzou: 'https://wwbny.lanzoue.com/b00l2gztaf',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/kogasa_main.exe',
        }
    },
{
        id: 'tiedaoshuangzi',
        title: '橘光橘望',
        description: '可爱捏',
        image: './icon/橘光橘望光标宣传.gif',
        cursor: './cursor/tachibana_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/2a86f97f589f',
            baidu: 'https://pan.baidu.com/s/1r_7rXwv9HvUBUrxUFgAawA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l2cuqfi',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/tachibana_main.exe',
        }
    },
    {
        id: 'katixiya',
        title: '卡缇希娅',
        description: '可爱捏',
        image: './icon/卡缇希娅光标宣传.gif',
        cursor: './cursor/katixiya_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/c2812e04fa37',
            baidu: 'https://pan.baidu.com/s/1r_7rXwv9HvUBUrxUFgAawA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l2cesnc',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/katixiya_main.exe',
        }
    },

    {
        id: 'fulan',
        title: '芙兰朵露',
        description: '可爱捏',
        image: './icon/芙兰朵露光标宣传.gif',
        cursor: './cursor/flandre_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/e348395d7225',
            baidu: 'https://pan.baidu.com/s/1PdahtFMN1wy36G4hzEt2NQ?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l2brbxc',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/flandre_main.exe',
        }
    },
    {
        id: 'saba',
        title: '猫鲨saba',
        description: '可爱捏',
        image: './icon/saba光标宣传.gif',
        cursor: './cursor/saba_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/262c8cb07ec4',
            baidu: 'https://pan.baidu.com/s/1yknDogS323V27TSaXW5P0Q?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l2ay8vi',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/saba_saba.exe',
        }
    },
    {
        id: 'mumingdijue',
        title: '古明地觉',
        description: '小五',
        image: './icon/古明地觉宣传.gif',
        cursor: './cursor/satori_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/8411f55ad57b',
            baidu: 'https://pan.baidu.com/s/1ytrYdeBeyQo1dcoYwWG_LA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l29ycqb',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/satori_main.exe',
        }
    },
    {
        id: 'molis',
        title: '魔理莎',
        description: '莎莎',
        image: './icon/魔理沙宣传.gif',
        cursor: './cursor/marisa_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/64d83bc83d49',
            baidu: 'https://pan.baidu.com/s/1xBc9uvzEWn5BDM8UB9SXiA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l28zqkj',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/marisa_main.exe',
        }
    },
    {
        id: 'fulil',
        title: '芙莉莲',
        description: '=w=',
        image: './icon/芙莉莲宣传.gif',
        cursor: './cursor/frieren_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/2ade2b99f8d8',
            baidu: 'https://pan.baidu.com/s/1YaP7LMT-9vvU0v6qGLlJNw?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l26ef7c',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/frieren_main.exe',
        }
    },
    {
        id: 'teto',
        title: 'teto',
        description: '红色钻头',
        image: './icon/teto光标宣传.gif',
        cursor: './cursor/teto_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/85d7a87b873f',
            baidu: 'https://pan.baidu.com/s/15iriKVjJDUD1gDTGXddF8Q?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l23xxod',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/teto_teto.exe',
        }
    },
    {
        id: 'lingmeng',
        title: '博丽灵梦',
        description: 'good apple',
        image: './icon/灵梦宣传aa2.gif',
        cursor: './cursor/reimu_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/5e61d07a2cf5',
            baidu: 'https://pan.baidu.com/s/1zz4IaEfU_bmqHP7tOHO6ow?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l2378pi',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/reimu_main.exe',
        }
    },
    {
        id: 'yileina',
        title: '伊蕾娜',
        description: '可爱',
        image: './icon/伊蕾娜光标宣传a2.gif',
        cursor: './cursor/yileina_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/0b9aeb8ba9ed',
            baidu: 'https://pan.baidu.com/s/1B27QOHyN2Fzc6hFvymchmg?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l2116qj',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/yileina_main.exe',
        }
    },
    {
        id: 'boqi',
        title: '可爱波奇',
        description: '可爱',
        image: './icon/波奇酱宣传a2.gif',
        cursor: './cursor/bocchi_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/7b4b1bd17cb1',
            baidu: 'https://pan.baidu.com/s/1TGmpGpNkmu4OU2kUPMvhig?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l20d4he',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/bocchi_main.exe',
        }
    },
    {
        id: 'xnyxy',
        title: '可爱星野',
        description: '可爱星野',
        image: './icon/小鸟游星野光标宣传2.gif',
        cursor: './cursor/hoshino_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/b605be6adac5',
            baidu: 'https://pan.baidu.com/s/1VM88_hZAVGLIVr6y2wmSIw?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l203cmh',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/hoshino_main.exe',
        }
    },
    {
        id: 'ralsei',
        title: 'ralsei',
        description: '超级可爱！',
        image: './icon/三角符文小羊光标宣传2.gif',
        cursor: './cursor/ralsei_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/fdd616816133',
            baidu: 'https://pan.baidu.com/s/1PuVAmVSNcccaH3P_UzdgaQ?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l1zb6ub',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/ralsei_relsei.exe',
        }
    },
    {
        id: 'miku',
        title: '初音未来光标',
        description: '超级可爱！',
        image: './icon/初音未来光标宣传2.gif',
        links: {
            quark: 'https://pan.quark.cn/s/aa5d3badc6ac',
            baidu: 'https://pan.baidu.com/s/1-IFShF99Dnm65_wkrQUcYA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l1xwemf',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/miku_main.exe',
        }
    },
    {
        id: 'koishi',
        title: '恋恋光标',
        description: '用着用着就消失了',
        image: './icon/恋恋光标宣传2.gif',
        cursor: './cursor/koishi_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/c952fa6b39fb',
            baidu: 'https://pan.baidu.com/s/1ccQnlAOTsJdO1jgdQiPaMA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l1y20gb',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/koishi_main.exe',
        }
    },
    {
        id: 'niko2',
        title: 'oneshot niko 光标',
        description: '不敢用怕只能用一次',
        image: './icon/niko光标宣传2.gif',
        links: {
            quark: 'https://pan.quark.cn/s/a4e0d941bf2d',
            baidu: 'https://pan.baidu.com/s/14w7K0B46__oL1hnw2ck0yw?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l1y19mf',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/niko_niko20.exe',
        }
    },
    {
        id: 'niko1',
        title: 'oneshot niko 光标（旧）',
        description: '不敢用怕只能用一次',
        image: './icon/niko1.0光标宣传2.gif',
        links: {
            quark: 'https://pan.quark.cn/s/42480abfef98',
            baidu: 'https://pan.baidu.com/s/1D14uQSotg2r7QkitBX2t2Q?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l25xnef',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/niko_niko10.exe',
        }
    },
    {
        id: 'xiaotao',
        title: '碧蓝档案小桃光标',
        description: 'omg是王小桃',
        image: './icon/小桃光标宣传2.gif',
        cursor: './cursor/momoi_cursor.gif',
        links: {
            quark: 'https://pan.quark.cn/s/56affc620a29',
            baidu: 'https://pan.baidu.com/s/16l1JBn_gopaqbROpJ7eHYg?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l25xn1c',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/momoi_pack.zip',
        }
    },
    {
        id: 'gifcursor',
        title: '动态简单像素光标',
        description: '最经典的光标',
        image: './icon/动态简单像素光标宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/fccb7ad0e841',
            baidu: 'https://pan.baidu.com/s/1PdahtFMN1wy36G4hzEt2NQ?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l1y2wsf',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/pixelanim_main.exe',
        }
    },
    {
        id: 'ungifcursor',
        title: '反色动态简单像素光标',
        description: '最经典的光标的反色',
        image: './icon/反色动态简单像素光标.gif',
        links: {
            quark: 'https://pan.quark.cn/s/623d5e5a5728',
            baidu: 'https://pan.baidu.com/s/1N60sFEjWX4NH1CL6fA-mWg?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l1ywr3a',
            github: 'https://github.com/xiankuang/all-cursor-install/releases/download/cursor/invcolor_main.exe',
        }
    }
];

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const cardGrid = document.querySelector('.card2-grid');
    const cardCountEl = document.getElementById('cardCount');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupTitle = document.getElementById('popupTitle');
    const popupDesc = document.getElementById('popupDesc');
    const closeBtn = document.getElementById('closeBtn');
    const downloadArea = document.getElementById('downloadArea');
    const hiddenOverlay = document.getElementById('hiddenOverlay');
    const hiddenCloseBtn = document.getElementById('hiddenCloseBtn');
    const hiddenPopupTitle = document.getElementById('hiddenPopupTitle');
    const hiddenStatus = document.getElementById('hiddenStatus');
    const hiddenCardGrid = document.getElementById('hiddenCardGrid');

    // 更新卡片数量显示
    if (cardCountEl) {
        cardCountEl.textContent = resources.length;
    }

    const getGridMetrics = () => {
        const gridStyle = window.getComputedStyle(cardGrid);
        const columns = gridStyle.gridTemplateColumns.split(' ').filter(Boolean).length || 1;
        const gap = parseFloat(gridStyle.rowGap) || 0;
        const gridHeight = cardGrid.clientHeight || Math.max(window.innerHeight - cardGrid.getBoundingClientRect().top, 0);
        const cardWidth = (cardGrid.clientWidth - gap * (columns - 1)) / columns;
        const heightRatio = window.matchMedia('(min-aspect-ratio: 1/1)').matches ? 10 / 8 : 1;
        const cardHeight = cardGrid.firstElementChild?.getBoundingClientRect().height || cardWidth * heightRatio;
        const visibleRows = Math.max(Math.ceil(gridHeight / (cardHeight + gap)), 1);

        return {
            columns,
            visibleRows,
            rowSize: columns,
            preloadCount: (visibleRows + 1) * columns,
            nextRowThreshold: cardHeight + gap
        };
    };

    const createCard = (item, index) => {
        const card = document.createElement('div');
        card.className = 'card card2';
        card.dataset.id = item.id;
        card.style.setProperty('--index', index + 1);

        // 处理图片显示（有图显示图片，无图显示占位符）
        const hasImage = item.image && item.image.trim() !== '';
        const imageContent = hasImage
            ? `<img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async">`
            : `<div class="no-image-placeholder">无图片</div>`;

        // 卡片内容结构
        card.innerHTML = `
            ${imageContent}
            <div class="card-content">
                <h3 class="card-title">${item.title || '无标题'}</h3>
                <p class="card-desc">${item.description || '无描述'}</p>
            </div>
        `;

        // 悬停时用「假光标」：隐藏真光标，让一个 <img> 播放该作品的光标动画。
        // 没配 cursor / 文件不存在 → 什么都不做，保持系统默认光标。
        if (item.cursor && String(item.cursor).trim() !== '') {
            const curPath = String(item.cursor).trim();
            const metaPath = curPath.replace(/\.[^./]+$/, '.json');
            const gifUrl = new URL(curPath, location.href).href;
            let hotspot = [0, 0];
            let ready = false;

            // 预取热区；取不到就用 (0,0)，不影响显示
            fetch(new URL(metaPath, location.href).href)
                .then(r => (r.ok ? r.json() : null))
                .then(m => { if (m && Array.isArray(m.hotspot)) hotspot = m.hotspot; })
                .catch(() => {});

            // 预加载 GIF：加载成功才启用，失败就永不启用（不改光标）
            const probe = new Image();
            probe.onload = () => { ready = true; };
            probe.onerror = () => { card.dataset.cursorMissing = '1'; };
            probe.src = gifUrl;

            card.addEventListener('mouseenter', () => {
                if (!ready) return;              // 图没加载好 → 不隐藏真光标
                window.ghostCursorShow(gifUrl, hotspot, card);
            });
            card.addEventListener('mouseleave', () => {
                window.ghostCursorHide(card);
            });

            // 记在卡片上，供「点开弹窗后持续显示」使用。
            // hotspot 是同一个数组引用，fetch 回来后自动是最新的。
            card._cursorInfo = { url: gifUrl, hotspot: hotspot };
        }

        // 挂件类作品（pendant/follow/sticker）：悬停时挂件从鼠标吊下来摆动。
        // 与光标类互斥 —— 光标类把鼠标本身换掉，挂件类保留真光标、只加挂件。
        else if (item.links && item.links.github) {
            const gh = String(item.links.github);
            const mm = gh.match(/releases\/download\/([^/]+)\/([^/]+)$/);
            const tag = mm ? mm[1] : '';
            if (tag === 'pendant' || tag === 'follow' || tag === 'sticker') {
                // 从下载文件名推挂件资源名：bigfish-p_main.exe → bigfish-p
                // 贴纸是 maodie-s → 资源名 maodie-p
                let base = mm[2].split('_')[0];
                base = base.replace(/-(p|s|f)$/i, '');
                const assetKey = base + '-p';
                const metaUrl = './pendant/' + assetKey + '_pendant.json';

                // 先探一次，资源不存在就什么都不做（不影响卡片）
                fetch(metaUrl, { method: 'HEAD' })
                    .then(r => { if (!r.ok) throw new Error('no pendant'); return true; })
                    .then(() => {
                        card._pendantUrl = metaUrl;
                        card.addEventListener('mouseenter', () => {
                            window.pendantShow(metaUrl, card);
                        });
                        card.addEventListener('mouseleave', () => {
                            window.pendantHide(card);
                        });
                    })
                    .catch(() => {});
            }
        }
        // 点击卡片2显示弹窗（卡片3）
        card.addEventListener('click', () => {
            // 填充弹窗标题和描述
            popupTitle.textContent = item.title || '无标题';
            popupDesc.textContent = item.description || '无描述';

            // 处理下载区域
            downloadArea.innerHTML = ''; // 清空历史内容
            downloadArea.style.display = 'none'; // 默认隐藏

            // 检查是否有下载链接
            if (item.links && typeof item.links === 'object' && Object.keys(item.links).length > 0) {
                downloadArea.style.display = 'flex'; // 显示下载区域

                // 遍历所有下载链接，生成下载项
                Object.entries(item.links).forEach(([type, url]) => {
                    const iconPath = `./downloadicon/${type}.png`;
                    const displayName = '下载';

                    // 创建下载项（新增链接文本）
                    const downloadItem = document.createElement('div');
                    downloadItem.className = 'download-item';
                    downloadItem.innerHTML = `
        <!-- 类型图标 -->
        <img 
            src="${iconPath}" 
            alt="${type}图标" 
            class="download-icon"
            loading="lazy"
            decoding="async"
            onerror="this.style.visibility='hidden'"
        >
        
        <!-- 新增：下载链接文本（过长显示省略号） -->
        <span class="download-link-text">${url}</span>
        
        <!-- 下载按钮 -->
        <a href="${url}" class="download-btn" target="_blank" rel="noopener noreferrer">${displayName}</a>
    `;

                    downloadArea.appendChild(downloadItem);
                });
            }

            // 显示弹窗并禁止背景滚动
            popupOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            // 弹窗打开后，整个弹窗界面持续显示该作品的光标（直到关闭弹窗）。
            // 遮罩层设成 cursor:none，鼠标在弹窗任何位置看到的都是这个假光标。
            if (card._cursorInfo && window.ghostCursorPin) {
                window.ghostCursorPin(card._cursorInfo.url, card._cursorInfo.hotspot,
                                      popupOverlay, popupOverlay);
            }
                // 挂件类：弹窗打开后挂件持续吊着
                if (card._pendantUrl && window.pendantPin) {
                    window.pendantPin(card._pendantUrl, popupOverlay, popupOverlay);
                }
        });

        return card;
    };

    let renderedCount = 0;

    const renderUntil = (targetCount) => {
        const nextCount = Math.min(targetCount, resources.length);

        if (nextCount <= renderedCount) {
            return;
        }

        const fragment = document.createDocumentFragment();

        for (let index = renderedCount; index < nextCount; index++) {
            fragment.appendChild(createCard(resources[index], index));
        }

        cardGrid.appendChild(fragment);
        renderedCount = nextCount;
    };

    const renderInitialPage = () => {
        renderUntil(getGridMetrics().preloadCount);
    };

    const renderNextRowIfNeeded = () => {
        if (renderedCount >= resources.length) {
            return;
        }

        const metrics = getGridMetrics();
        const hasGridScroll = cardGrid.scrollHeight > cardGrid.clientHeight + 1;
        const remainingScroll = hasGridScroll
            ? cardGrid.scrollHeight - cardGrid.scrollTop - cardGrid.clientHeight
            : cardGrid.getBoundingClientRect().bottom - window.innerHeight;

        if (remainingScroll <= metrics.nextRowThreshold) {
            renderUntil(renderedCount + metrics.rowSize);
        }
    };

    renderInitialPage();
    cardGrid.addEventListener('scroll', renderNextRowIfNeeded, { passive: true });
    window.addEventListener('scroll', renderNextRowIfNeeded, { passive: true });
    window.addEventListener('resize', () => {
        renderUntil(getGridMetrics().preloadCount);
        renderNextRowIfNeeded();
    });

    // 统一关闭：隐藏弹窗 + 恢复滚动 + 解除光标钉住
    const closePopup = () => {
        popupOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (window.ghostCursorUnpin) window.ghostCursorUnpin();
        if (window.pendantUnpin) window.pendantUnpin();
    };

    // 关闭弹窗（点击关闭按钮）
    closeBtn.addEventListener('click', closePopup);

    // 关闭弹窗（点击遮罩层空白处）
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            closePopup();
        }
    });

    // 关闭弹窗（按 Escape）—— 少了这条会有「真光标不回来」的风险
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popupOverlay.style.display === 'flex') {
            closePopup();
        }
    });

    const findBytes = (source, target, startIndex = 0) => {
        for (let index = startIndex; index <= source.length - target.length; index++) {
            let matched = true;

            for (let offset = 0; offset < target.length; offset++) {
                if (source[index + offset] !== target[offset]) {
                    matched = false;
                    break;
                }
            }

            if (matched) {
                return index;
            }
        }

        return -1;
    };

    const readHiddenCardsFromImage = async () => {
        const markerStart = '<!--XK_HIDDEN_CARDS_START-->';
        const markerEnd = '<!--XK_HIDDEN_CARDS_END-->';
        const encoder = new TextEncoder();
        const decoder = new TextDecoder('utf-8');
        const response = await fetch(`./xk.jpg?t=${Date.now()}`, { cache: 'no-store' });
        const imageBytes = new Uint8Array(await response.arrayBuffer());
        const startBytes = encoder.encode(markerStart);
        const endBytes = encoder.encode(markerEnd);
        const startIndex = findBytes(imageBytes, startBytes);

        if (startIndex === -1) {
            throw new Error('没有找到隐藏卡片开始标记');
        }

        const contentStart = startIndex + startBytes.length;
        const endIndex = findBytes(imageBytes, endBytes, contentStart);

        if (endIndex === -1) {
            throw new Error('没有找到隐藏卡片结束标记');
        }

        const jsonText = decoder.decode(imageBytes.slice(contentStart, endIndex)).trim();
        return JSON.parse(jsonText);
    };

    const renderHiddenCards = (hiddenCards) => {
        hiddenCardGrid.innerHTML = '';
        hiddenCardGrid.classList.toggle('is-single', hiddenCards.length === 1);

        hiddenCards.forEach((item) => {
            const card = document.createElement('div');
            const linkEntries = item.links && typeof item.links === 'object' ? Object.entries(item.links) : [];
            const linksHtml = linkEntries.map(([type, url]) => {
                const iconPath = `./downloadicon/${type}.png`;

                return `
                    <div class="download-item">
                        <img
                            src="${iconPath}"
                            alt="${type}图标"
                            class="download-icon"
                            loading="lazy"
                            decoding="async"
                            onerror="this.style.visibility='hidden'"
                        >
                        <span class="download-link-text">${url}</span>
                        <a href="${url}" class="download-btn" target="_blank" rel="noopener noreferrer">下载</a>
                    </div>
                `;
            }).join('');

            card.className = 'hidden-card-item';
            card.innerHTML = `
                <img class="hidden-card-image" src="${item.image || './xk.jpg'}" alt="${item.title || '隐藏卡片'}" loading="lazy" decoding="async">
                <div class="hidden-card-content">
                    <h4 class="hidden-card-title">${item.title || '隐藏卡片'}</h4>
                    <p class="hidden-card-desc">${item.description || ''}</p>
                    <div class="hidden-card-links">${linksHtml}</div>
                </div>
            `;

            hiddenCardGrid.appendChild(card);
        });
    };

    const openHiddenOverlay = async (targetId = '') => {
        hiddenOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        hiddenPopupTitle.textContent = '隐藏卡片';
        hiddenStatus.style.display = 'block';
        hiddenStatus.textContent = '正在读取隐藏内容...';

        try {
            const hiddenCards = await readHiddenCardsFromImage();
            const visibleCards = targetId
                ? hiddenCards.filter((item) => item.id === targetId)
                : hiddenCards;

            renderHiddenCards(visibleCards);
            hiddenPopupTitle.textContent = visibleCards.length === 1
                ? (visibleCards[0].title || '隐藏卡片')
                : '隐藏卡片';
            hiddenStatus.style.display = 'none';
            hiddenStatus.textContent = '';

            if (targetId && visibleCards.length === 0) {
                hiddenStatus.style.display = 'block';
                hiddenStatus.textContent = `没有找到隐藏卡片：${targetId}`;
            }
        } catch (error) {
            hiddenCardGrid.innerHTML = '';
            hiddenStatus.style.display = 'block';
            hiddenStatus.textContent = error.message || '隐藏内容读取失败';
        }
    };

    const closeHiddenOverlay = () => {
        hiddenOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    hiddenCloseBtn.addEventListener('click', closeHiddenOverlay);
    hiddenOverlay.addEventListener('click', (e) => {
        if (e.target === hiddenOverlay) {
            closeHiddenOverlay();
        }
    });

    const getHiddenTarget = () => {
        const queryTarget = new URLSearchParams(window.location.search).get('hidden');
        const hashTarget = window.location.hash.replace(/^#/, '').trim();
        const hrefHashTarget = window.location.href.includes('#')
            ? window.location.href.split('#').pop().trim()
            : '';

        return decodeURIComponent((queryTarget || hashTarget || hrefHashTarget || '').trim());
    };

    let lastHiddenTarget = '';

    const openHiddenFromHash = () => {
        const queryTarget = new URLSearchParams(window.location.search).get('hidden');
        const target = getHiddenTarget();

        if (!target) {
            return;
        }

        if (target === lastHiddenTarget && hiddenOverlay.style.display === 'flex') {
            return;
        }

        lastHiddenTarget = target;
        openHiddenOverlay(target === 'secret' ? '' : target);

        try {
            const cleanUrl = queryTarget ? window.location.pathname : window.location.pathname + window.location.search;
            window.history.replaceState(null, '', cleanUrl);
        } catch (error) {
            window.location.hash = '';
        }
    };

    openHiddenFromHash();
    window.setTimeout(openHiddenFromHash, 0);
    window.addEventListener('load', openHiddenFromHash);
    window.addEventListener('hashchange', openHiddenFromHash);

    // 无图片占位符样式
    const style = document.createElement('style');
    style.textContent = `
        .card2 .no-image-placeholder {
            width: 100%;
            height: 100%;
            background: #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999;
        }
        .card2 {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            cursor: pointer; /* 鼠标悬停显示手型 */
            transition: transform 0.2s;
        }
        .card2:hover {
            transform: translateY(-2px); /* 轻微上浮效果 */
        }
    `;
    document.head.appendChild(style);
});
        /* ===== 悬停假光标（全局工具）=====
           为什么用假光标：实测 CSS cursor: url(x.gif) 只渲染第一帧，动画不会播；
           而页面里的 <img> 是正常图片，GIF 会照常播放。
           代价是真光标被隐藏（cursor:none），所以每一步都做了兜底恢复。

           ── 像素锐利与屏幕缩放 ──
           实测这些 .ani 就是「原生像素」导出（N=1 完全还原，没有预缩放），
           所以只要显示尺寸是源尺寸的整数倍，像素就完全锐利、不会宽窄不一。
           非整数倍（如 48→64 是 1.333 倍）会让部分像素占 2 格、部分占 1 格。

           显示规则（参照 SCM 加载器读 SM_CXCURSOR 的思路，
           浏览器端用 devicePixelRatio 等效替代）：
             物理尺寸 = 源尺寸 × 整数N，且 ≥ 96px，取最接近 64×dpr 的档
           于是所有档位都是整数倍，像素始终锐利。
           实际取值：
             源48 → dpr1:96(2x)  dpr1.5:96(2x)  dpr2:96(2x)  dpr3:96(2x)
             源32 → dpr1:96(3x)  dpr1.5:96(3x)  dpr2:96(3x)  dpr3:96(3x)
           CSS 宽度 = 物理尺寸 / dpr，浏览器再按 dpr 放大回去。 */
        (function () {
            // 期望物理尺寸基准：64 × dpr。dpr=1.5（Windows 150%）= 96px，即用户指定的观感。
            var TARGET_BASE = 64;
            // 物理尺寸下限。设 96 让 48px 与 32px 两种源在常见 dpr 下都统一到 96px。
            var MIN_PHYS = 96;

            var ghost = null;
            var activeEl = null;
            var mx = 0, my = 0, raf = null;

            function readDpr() {
                var d = window.devicePixelRatio;
                if (!d || !isFinite(d) || d <= 0) d = 1;
                if (d < 1) d = 1;
                return d;
            }

            // 核心：算「源尺寸 × 整数」的档位
            // 为了让 48px 与 32px 两种源在所有 dpr 下都取到同一个物理尺寸，
            // 档位吸附到 96 的公倍数上（96 是 48 与 32 的最小公倍数）。
            // 于是：96(2x/3x)、192(4x/6x)、288(6x/9x)……全都是整数倍，
            // 且各作品大小完全一致。
            var UNIFY = 96;
            function pickPhysical(nativeSize, dpr) {
                var want = TARGET_BASE * dpr;
                // 源尺寸能整除 96 就按 96 的倍数取档，否则退回自身整数倍（兼容未来别的尺寸）
                var step = (UNIFY % nativeSize === 0) ? UNIFY : nativeSize;
                var best = null;
                for (var n = 1; n <= 8; n++) {
                    var phys = step * n;
                    if (phys < MIN_PHYS) continue;
                    if (best === null ||
                        Math.abs(phys - want) < Math.abs(best.phys - want) ||
                        (Math.abs(phys - want) === Math.abs(best.phys - want) && phys > best.phys)) {
                        best = { n: phys / nativeSize, phys: phys };
                    }
                }
                // 兜底：万一 nativeSize 很小导致一档都没有，就退到最小整数倍
                if (best === null) best = { n: 1, phys: nativeSize };
                return best;
            }

            function ensureGhost() {
                if (ghost) return ghost;
                ghost = document.createElement('img');
                ghost.id = 'ghost-cursor';
                ghost.alt = '';
                ghost.setAttribute('aria-hidden', 'true');
                ghost.style.cssText = [
                    'position:fixed', 'left:0', 'top:0',
                    'pointer-events:none',
                    'z-index:2147483647',
                    'display:none',
                    // 像素画放大必须用 pixelated，否则会被浏览器插值糊掉
                    'image-rendering:pixelated',
                    'will-change:transform'
                ].join(';');
                document.body.appendChild(ghost);
                return ghost;
            }

            // 按原生尺寸 + dpr 设定显示尺寸，并算出热区换算比例
            function applySize(g) {
                var natW = g.naturalWidth || 0, natH = g.naturalHeight || 0;
                if (!natW || !natH) { g.dataset.k = 1; return; }

                var dpr = readDpr();
                var pick = pickPhysical(natW, dpr);
                var cssW = pick.phys / dpr;              // 物理 → CSS
                var cssH = cssW * natH / natW;

                g.style.width = cssW + 'px';
                g.style.height = cssH + 'px';
                // 热区换算：CSS 尺寸 / 源尺寸
                g.dataset.k = cssW / natW;
                g.dataset.n = pick.n;
                g.dataset.phys = pick.phys;
            }

            function place() {
                raf = null;
                if (!ghost) return;
                var k = parseFloat(ghost.dataset.k) || 1;
                var hx = (ghost.dataset.hx | 0) * k;
                var hy = (ghost.dataset.hy | 0) * k;
                var tx = Math.round((mx - hx) * 1000) / 1000;
                var ty = Math.round((my - hy) * 1000) / 1000;
                ghost.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
            }

            function schedule() {
                if (activeEl && !raf) raf = requestAnimationFrame(place);
            }

            window.addEventListener('mousemove', function (e) {
                mx = e.clientX; my = e.clientY;
                schedule();
            }, { passive: true });

            // 屏幕缩放变化（拖到另一台显示器 / 改系统缩放）→ 重算档位
            function onScaleChange() {
                if (activeEl && ghost) { applySize(ghost); place(); }
            }
            window.addEventListener('resize', onScaleChange);
            if (window.matchMedia) {
                try {
                    var mq = window.matchMedia('(resolution: ' + window.devicePixelRatio + 'dppx)');
                    if (mq && mq.addEventListener) mq.addEventListener('change', onScaleChange);
                } catch (e) {}
            }

            // 兜底 1：鼠标移出文档（切标签页 / 移出窗口）→ 恢复真光标
            document.addEventListener('mouseleave', function () {
                if (activeEl) window.ghostCursorHide(activeEl);
            });
            // 兜底 2：窗口失焦 → 恢复
            window.addEventListener('blur', function () {
                if (activeEl) window.ghostCursorHide(activeEl);
            });
            // 兜底 3：滚动时位置要跟着刷新
            window.addEventListener('scroll', schedule, { passive: true });

            window.ghostCursorShow = function (url, hotspot, el) {
                var g = ensureGhost();
                if (activeEl && activeEl !== el) activeEl.style.cursor = '';
                activeEl = el;
                g.dataset.hx = hotspot[0] | 0;
                g.dataset.hy = hotspot[1] | 0;
                if (g.getAttribute('src') !== url) {
                    g.src = url;
                    g.onload = function () { applySize(g); if (activeEl === el) place(); };
                }
                applySize(g);
                g.style.display = 'block';
                el.style.cursor = 'none';
                place();
            };

            /* ── 钉住模式（弹窗打开时用）──
               悬停卡片只是「路过」，离开就恢复真光标；但弹窗打开后，
               用户希望浏览弹窗时一直是这个作品的光标，直到关掉弹窗。
               所以加 pinned 状态：
                 · pin 期间忽略 mouseleave 的自动隐藏
                 · 光标持续跟随鼠标，位置由全局 mousemove 更新
                 · 只有 unpin / 弹窗关闭才恢复
               安全网：用 MutationObserver 盯住弹窗的 style，
               一旦弹窗被任何路径关掉（包括我没想到的），立刻自动解除，
               避免「真光标消失且无法恢复」。 */
            var pinned = false;
            var pinObserver = null;

            window.ghostCursorPin = function (url, hotspot, el, guard) {
                var g = ensureGhost();
                if (activeEl && activeEl !== el) activeEl.style.cursor = '';
                pinned = true;
                activeEl = el;
                // 给 body 加标记，配合下面的 CSS 压掉弹窗内的 cursor:pointer
                document.body.classList.add('ghost-cursor-pinning');
                g.dataset.hx = hotspot[0] | 0;
                g.dataset.hy = hotspot[1] | 0;
                if (g.getAttribute('src') !== url) {
                    g.src = url;
                    g.onload = function () { applySize(g); if (pinned) place(); };
                }
                applySize(g);
                g.style.display = 'block';
                if (el) el.style.cursor = 'none';
                place();

                // 弹窗内的按钮/链接自带 cursor:pointer，优先级高于 inline 样式，
                // 会把假光标「戳破」。这里用 !important 在 pin 期间统一压掉。
                // 只注入一次。
                if (!document.getElementById('ghost-cursor-pin-css')) {
                    var st = document.createElement('style');
                    st.id = 'ghost-cursor-pin-css';
                    st.textContent =
                        'body.ghost-cursor-pinning, ' +
                        'body.ghost-cursor-pinning * { cursor: none !important; }';
                    document.head.appendChild(st);
                }

                if (pinObserver) { try { pinObserver.disconnect(); } catch (e) {} pinObserver = null; }
                if (guard && window.MutationObserver) {
                    try {
                        pinObserver = new MutationObserver(function () {
                            if (guard.style.display === 'none') window.ghostCursorUnpin();
                        });
                        pinObserver.observe(guard, { attributes: true, attributeFilter: ['style'] });
                    } catch (e) {}
                }
            };

            window.ghostCursorUnpin = function () {
                pinned = false;
                if (pinObserver) { try { pinObserver.disconnect(); } catch (e) {} pinObserver = null; }
                document.body.classList.remove('ghost-cursor-pinning');
                if (ghost) ghost.style.display = 'none';
                if (activeEl) { activeEl.style.cursor = ''; activeEl = null; }
            };

            window.ghostCursorHide = function (el) {
                // 钉住期间不响应普通隐藏请求（鼠标滑出卡片等）
                if (pinned) return;
                document.body.classList.remove('ghost-cursor-pinning');
                if (ghost) ghost.style.display = 'none';
                if (el) el.style.cursor = '';
                if (activeEl === el) activeEl = null;
            };

            // 诊断用
            window.__ghostCursorInfo = function () {
                return {
                    dpr: readDpr(),
                    pinned: pinned,
                    // display/src 之前漏了，外部探针读不到光标是否真的显示
                    display: ghost ? getComputedStyle(ghost).display : null,
                    src: ghost ? (ghost.getAttribute('src') || '').split('/').pop() : null,
                    active: !!activeEl,
                    native: ghost ? [ghost.naturalWidth, ghost.naturalHeight] : null,
                    cssSize: ghost ? [ghost.style.width, ghost.style.height] : null,
                    integerN: ghost ? ghost.dataset.n : null,
                    physical: ghost ? ghost.dataset.phys : null,
                    hotScale: ghost ? ghost.dataset.k : null,
                };
            };
        })();


/* ====================================================================
   挂件悬停效果：绳子物理 + 渲染
   物理 1:1 移植 exe 的 Form1.PhysicsEngine3.cs（Verlet + 距离约束）。
   下面每个常量的数值、每个公式的顺序都与 exe 一致，改动处均有注释说明。
   ==================================================================== */
(function () {
    /* ── 与 exe 完全一致的常量 ──────────────────────────────────
       Form1.RuntimeState.cs / Form1.PhysicsEngine3.cs             */
    var GRAVITY_DEFAULT     = 11000;   // manifest Gravity（GRAVITY 字段默认 11300）
    var FIXED_STEP          = 1 / 240; // FixedPhysicsStep
    var MAX_FRAME_DELTA     = 0.033;   // MaxFrameDelta
    var MAX_STEPS_PER_TICK  = 8;       // MaxPhysicsStepsPerTick
    var VELOCITY_DAMPING    = 0.993;   // Engine3VelocityDamping
    var AIR_DAMPING         = 0.960;   // Engine3AirDamping
    var GRAVITY_SCALE       = 0.864;   // Engine3GravityScale
    var ANCHOR_VEL_TRANSFER = 0.225;   // Engine3AnchorVelocityTransfer
    var CONSTRAINT_PRESERVE = 0.88;    // Engine3ConstraintVelocityPreserve
    var STRETCH_GUARD_RATIO = 1.18;    // Engine3StretchGuardRatio
    var ABS_STRETCH_RATIO   = 1.32;    // Engine3AbsoluteStretchRatio
    var LONG_SEG_REF        = 18;      // Engine3LongSegmentReferenceLength
    var LONG_SEG_TIGHT      = 1.10;    // Engine3LongSegmentTightStretchGuardRatio
    var MAX_POINT_DELTA     = 28;      // Engine3MaxPointDelta
    var MAX_PENDANT_DELTA   = 38;      // Engine3MaxPendantDelta
    var MIN_CONSTRAINT_ITER = 5;       // Engine3MinimumConstraintIterations
    var CONSTRAINT_ITER     = 10;      // RuntimeState.constraintIterations（exe 取 max(5,10)=10）
    var STRETCH_GUARD_ITER  = 2;       // Engine3StretchGuardIterations
    var LONG_SEG_MAX_EXTRA  = 8;       // Engine3LongSegmentMaxExtraIterations
    var REST_MOVE_THRESHOLD = 0.05;    // Engine3RestAnchorMoveThreshold
    var REST_ANGLE_TOL      = 1;       // Engine3RestAngleToleranceDegrees
    var REST_DELAY          = 0.3;     // Engine3RestDelaySeconds
    var BASE_IMAGE_SIZE     = 48;      // ImageSize 基准（manifest 全是 48）
    var EXE_DRAW_SIDE       = BASE_IMAGE_SIZE * 2; // exe: drawSize 最长边 = _imageSize*2 = 96

    /* 挂点相对真实鼠标的偏移基准（exe: Form1.NativeInterop.cs 的 BaseCursorSize）。
       渲染模块在另一个 IIFE 里，故挂到 window 共用。 */
    window.PENDANT_BASE_CURSOR_SIZE = 32;

    window.PendantPhysics = function (opts) {
        var self = this;

        // exe: GetPendulumSegmentCount() = max(1, ropeSegmentCount + 1)
        // manifest 的 RopeSegments=6 → 7 段 → 8 个质点
        this.segments = Math.max(1, (opts.ropeSegments | 0) + 1);
        this.points = this.segments + 1;

        this.restLen = opts.restLen;          // 已是 CSS 像素
        this.gravity = opts.gravity;          // 已按比例换算
        this.segLen = this.restLen / this.segments;

        // exe: GetPhysicsEngine3PendantSizeMassScale()，_imageSize=48 → 1.0
        var sizeRatio = Math.max(0.25, (opts.imageSize || BASE_IMAGE_SIZE) / BASE_IMAGE_SIZE);
        this.sizeMassScale = Math.min(2.2, Math.max(0.75, Math.sqrt(sizeRatio)));

        var n = this.points;
        this.ropeX = new Float64Array(n);
        this.ropeY = new Float64Array(n);
        this.ropeOldX = new Float64Array(n);
        this.ropeOldY = new Float64Array(n);

        this.anchorX = 0; this.anchorY = 0;
        this.targetX = 0; this.targetY = 0;
        this.prevAnchorX = 0; this.prevAnchorY = 0;
        this.accumulator = 0;
        this.stillSeconds = 0;
        this.frozenAtRest = false;

        this.reset();
    };

    // exe: InitializePhysicsEngine3()
    window.PendantPhysics.prototype.reset = function () {
        var n = this.points;
        for (var i = 0; i < n; i++) {
            this.ropeX[i] = this.anchorX;
            this.ropeY[i] = this.anchorY + this.segLen * i;
            this.ropeOldX[i] = this.ropeX[i];
            this.ropeOldY[i] = this.ropeY[i];
        }
        this.prevAnchorX = this.anchorX;
        this.prevAnchorY = this.anchorY;
        this.accumulator = 0;
        this.stillSeconds = 0;
        this.frozenAtRest = false;
    };

    window.PendantPhysics.prototype.setAnchor = function (x, y, instant) {
        if (instant) {
            var dx = x - this.anchorX, dy = y - this.anchorY;
            this.anchorX = x; this.anchorY = y;
            this.targetX = x; this.targetY = y;
            this.prevAnchorX = x; this.prevAnchorY = y;
            for (var i = 0; i < this.points; i++) {
                this.ropeX[i] += dx; this.ropeY[i] += dy;
                this.ropeOldX[i] += dx; this.ropeOldY[i] += dy;
            }
        } else {
            this.targetX = x; this.targetY = y;
        }
    };

    window.PendantPhysics.prototype.pendantPos = function () {
        var last = this.points - 1;
        return { x: this.ropeX[last], y: this.ropeY[last] };
    };

    window.PendantPhysics.prototype.nodes = function () {
        var out = [];
        for (var i = 0; i < this.points; i++) out.push({ x: this.ropeX[i], y: this.ropeY[i] });
        return out;
    };

    /* 挂件姿态：位置 + 角度。
       位置 = 绳末端（exe: pendantPosition = new PointF(ballX, ballY)）。
       角度 = 绳末端那一段的切线方向（"垂线和绳子末端角度对齐"）。
         exe 用的是整条绳的弦向 atan2(ballY-anchorY, ballX-anchorX) - π/2；
         这里改用末段切线，静止时两者完全相同，摆动中挂件会贴合最后一段绳，
         视觉上更贴切「垂线对齐绳末端」。 */
    window.PendantPhysics.prototype.pendantPose = function () {
        var last = this.points - 1;
        var a = last - 1 >= 0 ? last - 1 : last;
        var dx = this.ropeX[last] - this.ropeX[a];
        var dy = this.ropeY[last] - this.ropeY[a];
        var angle = Math.atan2(dy, dx) - Math.PI / 2;
        if (!isFinite(angle)) angle = 0;
        return { x: this.ropeX[last], y: this.ropeY[last], angle: angle };
    };

    /* exe: AdvancePhysics(frameDelta) —— 固定步长 + 累加器 */
    window.PendantPhysics.prototype.advance = function (frameDelta) {
        if (!(frameDelta > 0)) return;

        this.accumulator += Math.min(frameDelta, MAX_FRAME_DELTA);
        var steps = Math.min(MAX_STEPS_PER_TICK, Math.floor(this.accumulator / FIXED_STEP));
        if (steps <= 0) return;

        var startX = this.anchorX, startY = this.anchorY;
        var endX = isFinite(this.targetX) ? this.targetX : this.anchorX;
        var endY = isFinite(this.targetY) ? this.targetY : this.anchorY;

        // exe 把一帧的锚点位移均匀摊到各固定步里，不做额外细分
        for (var step = 1; step <= steps; step++) {
            var progress = step / steps;
            this.anchorX = startX + (endX - startX) * progress;
            this.anchorY = startY + (endY - startY) * progress;
            this._update(FIXED_STEP);
        }

        this.accumulator -= steps * FIXED_STEP;
        if (this.accumulator >= FIXED_STEP) this.accumulator = 0;
    };

    // exe: UpdatePhysicsEngine3(dt)
    window.PendantPhysics.prototype._update = function (dt) {
        var last = this.points - 1;
        var moveX = this.anchorX - this.prevAnchorX;
        var moveY = this.anchorY - this.prevAnchorY;

        // exe: TryFreezePhysicsEngine3AtRest —— 静止时冻结，避免细碎抖动
        if (this._tryFreeze(moveX, moveY, dt, last)) return;

        this.ropeX[0] = this.anchorX;
        this.ropeY[0] = this.anchorY;
        this.ropeOldX[0] = this.anchorX - moveX * ANCHOR_VEL_TRANSFER;
        this.ropeOldY[0] = this.anchorY - moveY * ANCHOR_VEL_TRANSFER;
        this.prevAnchorX = this.anchorX;
        this.prevAnchorY = this.anchorY;

        this._integrate(last, dt);
        this._solveConstraints(this._constraintIterations(moveX, moveY));
        this._stretchGuard();
        this._pinAnchor();
        this._clampExtent(last);
    };

    // exe: IntegratePhysicsEngine3Points
    window.PendantPhysics.prototype._integrate = function (pendantIndex, dt) {
        // exe: effectiveDamping = min(0.997, max(0.94, 0.993*0.960))
        var eff = Math.min(0.997, Math.max(0.94, VELOCITY_DAMPING * AIR_DAMPING));
        var gStep = this.gravity * GRAVITY_SCALE * dt * dt;

        var inertiaBoost = Math.max(0, this.sizeMassScale - 1) * 0.035;
        var smallDrag = Math.max(0, 1 - this.sizeMassScale) * 0.008;
        var pendantDamping = Math.min(0.997, Math.max(0.94, eff + inertiaBoost - smallDrag));

        for (var i = 1; i < this.points; i++) {
            var isPendant = i >= pendantIndex;
            var damping = isPendant ? pendantDamping : eff;
            var grav = isPendant ? gStep * this.sizeMassScale : gStep;

            var vx = (this.ropeX[i] - this.ropeOldX[i]) * damping;
            var vy = (this.ropeY[i] - this.ropeOldY[i]) * damping;

            this.ropeOldX[i] = this.ropeX[i];
            this.ropeOldY[i] = this.ropeY[i];
            this.ropeX[i] += vx;
            this.ropeY[i] += vy + grav;

            this._clampVelocity(i, pendantIndex);
        }
    };

    // exe: ClampPhysicsEngine3PointVelocity
    window.PendantPhysics.prototype._clampVelocity = function (i, pendantIndex) {
        var vx = this.ropeX[i] - this.ropeOldX[i];
        var vy = this.ropeY[i] - this.ropeOldY[i];
        var maxDelta = i >= pendantIndex ? MAX_PENDANT_DELTA : MAX_POINT_DELTA;
        var len = Math.sqrt(vx * vx + vy * vy);
        if (len <= maxDelta || len <= 0.0001) return;
        var k = maxDelta / len;
        this.ropeOldX[i] = this.ropeX[i] - vx * k;
        this.ropeOldY[i] = this.ropeY[i] - vy * k;
    };

    // exe: GetPhysicsEngine3ConstraintIterations —— 起点是 max(5, 10) = 10
    window.PendantPhysics.prototype._constraintIterations = function (mx, my) {
        var it = Math.max(MIN_CONSTRAINT_ITER, CONSTRAINT_ITER);
        var move = Math.sqrt(mx * mx + my * my);
        if (move > 24) it += Math.min(8, Math.ceil((move - 24) / 26));
        if (this.segLen > LONG_SEG_REF) {
            var s = (this.segLen - LONG_SEG_REF) / LONG_SEG_REF;
            it += Math.min(LONG_SEG_MAX_EXTRA, Math.ceil(s * 4));
        }
        return it;
    };

    // exe: SolvePhysicsEngine3Constraints
    window.PendantPhysics.prototype._solveConstraints = function (iterations) {
        for (var iter = 0; iter < iterations; iter++) {
            this.ropeX[0] = this.anchorX;
            this.ropeY[0] = this.anchorY;
            for (var i = 0; i < this.points - 1; i++) {
                this._distanceConstraint(i, i + 1, this.segLen, CONSTRAINT_PRESERVE);
            }
        }
    };

    // exe: ApplyPhysicsEngine3DistanceConstraint
    window.PendantPhysics.prototype._distanceConstraint = function (a, b, target, preserve) {
        var dx = this.ropeX[b] - this.ropeX[a];
        var dy = this.ropeY[b] - this.ropeY[a];
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= 0.0001) return;

        var correction = (dist - target) / dist;
        var aWeight = a === 0 ? 0 : 0.5;
        var bWeight = a === 0 ? 1 : 0.5;
        var offX = dx * correction, offY = dy * correction;

        if (a !== 0) {
            var ax = offX * aWeight, ay = offY * aWeight;
            this.ropeX[a] += ax; this.ropeY[a] += ay;
            this.ropeOldX[a] += ax * preserve; this.ropeOldY[a] += ay * preserve;
        }
        var bx = -offX * bWeight, by = -offY * bWeight;
        this.ropeX[b] += bx; this.ropeY[b] += by;
        this.ropeOldX[b] += bx * preserve; this.ropeOldY[b] += by * preserve;
    };

    // exe: GetPhysicsEngine3StretchGuardRatio
    window.PendantPhysics.prototype._guardRatio = function () {
        if (this.segLen <= LONG_SEG_REF) return STRETCH_GUARD_RATIO;
        var s = (this.segLen - LONG_SEG_REF) / LONG_SEG_REF;
        var drop = Math.min(STRETCH_GUARD_RATIO - LONG_SEG_TIGHT, s * 0.05);
        return STRETCH_GUARD_RATIO - drop;
    };

    // exe: ApplyPhysicsEngine3StretchGuard
    window.PendantPhysics.prototype._stretchGuard = function () {
        var maxSeg = this.segLen * this._guardRatio();
        for (var iter = 0; iter < STRETCH_GUARD_ITER; iter++) {
            var adjusted = false;
            this.ropeX[0] = this.anchorX;
            this.ropeY[0] = this.anchorY;
            for (var i = 0; i < this.points - 1; i++) {
                var dx = this.ropeX[i + 1] - this.ropeX[i];
                var dy = this.ropeY[i + 1] - this.ropeY[i];
                if (dx * dx + dy * dy > maxSeg * maxSeg) {
                    this._distanceConstraint(i, i + 1, maxSeg, 1);
                    adjusted = true;
                }
            }
            if (!adjusted) break;
        }
    };

    // exe: PinPhysicsEngine3Anchor
    window.PendantPhysics.prototype._pinAnchor = function () {
        this.ropeX[0] = this.anchorX;
        this.ropeY[0] = this.anchorY;
        this.ropeOldX[0] = this.anchorX;
        this.ropeOldY[0] = this.anchorY;
    };

    // exe: ClampPhysicsEngine3PendantExtent
    window.PendantPhysics.prototype._clampExtent = function (idx) {
        var dx = this.ropeX[idx] - this.anchorX;
        var dy = this.ropeY[idx] - this.anchorY;
        if (!isFinite(dx) || !isFinite(dy)) { this.reset(); return; }
        var dist = Math.sqrt(dx * dx + dy * dy);
        var maxDist = Math.max(this.segLen, this.restLen * ABS_STRETCH_RATIO);
        if (dist <= maxDist || dist <= 0.0001) return;
        var sx = this.anchorX + dx / dist * maxDist;
        var sy = this.anchorY + dy / dist * maxDist;
        var mx = sx - this.ropeX[idx], my = sy - this.ropeY[idx];
        this.ropeX[idx] = sx; this.ropeY[idx] = sy;
        this.ropeOldX[idx] += mx; this.ropeOldY[idx] += my;
    };

    // exe: IsPhysicsEngine3RestCandidate + TryFreezePhysicsEngine3AtRest
    window.PendantPhysics.prototype._isRestCandidate = function (mx, my) {
        if (Math.abs(mx) > REST_MOVE_THRESHOLD || Math.abs(my) > REST_MOVE_THRESHOLD) {
            this.stillSeconds = 0; this.frozenAtRest = false;
            return false;
        }
        var last = this.points - 1;
        var dx = this.ropeX[last] - this.anchorX;
        var dy = this.ropeY[last] - this.anchorY;
        var len = Math.sqrt(dx * dx + dy * dy);
        if (len <= 0.0001 || dy <= 0) {
            this.stillSeconds = 0; this.frozenAtRest = false;
            return false;
        }
        var verticalCos = dy / len;
        var tolCos = Math.cos(REST_ANGLE_TOL * Math.PI / 180);
        if (verticalCos >= tolCos) return true;
        this.stillSeconds = 0; this.frozenAtRest = false;
        return false;
    };

    window.PendantPhysics.prototype._freeze = function () {
        this.frozenAtRest = true;
        this._pinAnchor();
        for (var i = 0; i < this.points; i++) {
            this.ropeOldX[i] = this.ropeX[i];
            this.ropeOldY[i] = this.ropeY[i];
        }
        this.prevAnchorX = this.anchorX;
        this.prevAnchorY = this.anchorY;
    };

    window.PendantPhysics.prototype._tryFreeze = function (mx, my, dt, last) {
        if (!this._isRestCandidate(mx, my)) return false;
        if (this.frozenAtRest) { this._freeze(); return true; }
        this.stillSeconds += Math.max(0, dt);
        if (this.stillSeconds < REST_DELAY) return false;
        this._freeze();
        return true;
    };
/* ===== 贴纸 / 悬浮挂件 / 挂件 三种物理（按 exe 分开实现）=====

   exe 的分派（Form1.ModeMotion.cs:86-117）：
     Follow（悬浮挂件）→ UpdateFollowMotion  ：无绳子，以光标为圆心、绳长为半径弹性跟随
     Sticker（贴纸）   → UpdateStickerPosition：无物理，直接贴住光标
     Pendant（挂件）   → AdvancePhysics      ：Verlet 绳子（见上面的 PendantPhysics）

   三者共用「挂点 = 光标 + 偏移」和「挂件图按锚点对齐挂点」这两个约定。 */

/* ── 悬浮挂件（Follow）─────────────────────────────────────────
   exe 的关键公式（Form1.ModeMotion.cs:200-245）：
     方向 = normalize(挂件位置 - 光标)
     目标 = 光标 + 方向 × 绳长            ← 始终趋向「以光标为圆心的圆周」
     接近速度 = min(500, 误差 × 2.5)
     速度用指数响应平滑：v += (期望v - v) × (1 - e^(-8·dt))
     位置积分：pos += v × dt
   视觉（FollowVisualState.cs）：
     移动时按横向速度倾斜 ±15°（π/12），用 (1 - e^(-14·dt)) 平滑
     朝向按光标在挂件左侧/右侧决定，ScaleX 翻转（-1 = 朝右） */
window.PendantFollow = function (opts) {
    this.restLen = opts.restLen;
    this.maxSpeed = 500;          // FollowMaximumSpeed
    this.velocityResponse = 8;    // FollowVelocityResponse
    this.tiltResponse = 14;       // FollowVisualState 的 14f
    this.tiltAngle = Math.PI / 12; // ±15°

    this.x = 0; this.y = 0;
    this.vx = 0; this.vy = 0;
    this.angle = 0;
    this.scaleX = 1;
    this.anchorX = 0; this.anchorY = 0;
};

// exe: InitializeFollowPosition —— 初始放在光标右下 45°、距离 = 绳长
window.PendantFollow.prototype.reset = function (ax, ay) {
    var d = this.restLen * 0.7071068;
    this.anchorX = ax; this.anchorY = ay;
    this.x = ax + d;
    this.y = ay + d;
    this.vx = 0; this.vy = 0;
    this.angle = 0;
    this.scaleX = 1;
};

window.PendantFollow.prototype.setAnchor = function (ax, ay) {
    this.anchorX = ax; this.anchorY = ay;
};

window.PendantFollow.prototype.advance = function (dt) {
    if (!(dt > 0)) return;
    // 用与 exe 相同的上限，避免切标签页回来时瞬移
    if (dt > 0.033) dt = 0.033;

    var ax = this.anchorX, ay = this.anchorY;
    var fromX = this.x - ax, fromY = this.y - ay;
    var dist = Math.sqrt(fromX * fromX + fromY * fromY);

    var dirX = 0.7071068, dirY = 0.7071068;
    if (dist > 0.001) { dirX = fromX / dist; dirY = fromY / dist; }

    // 目标：圆周上离当前位置最近的点
    var tx = ax + dirX * this.restLen;
    var ty = ay + dirY * this.restLen;
    var errX = tx - this.x, errY = ty - this.y;
    var err = Math.sqrt(errX * errX + errY * errY);

    var wantVX = 0, wantVY = 0;
    if (err > 0.001) {
        var speed = Math.min(this.maxSpeed, err * 2.5);
        wantVX = errX / err * speed;
        wantVY = errY / err * speed;
    }

    var resp = 1 - Math.exp(-this.velocityResponse * dt);
    this.vx += (wantVX - this.vx) * resp;
    this.vy += (wantVY - this.vy) * resp;
    this.x += this.vx * dt;
    this.y += this.vy * dt;

    if (!isFinite(this.x) || !isFinite(this.y)) { this.reset(ax, ay); return; }

    // 视觉：倾斜按横向速度，朝向按光标左右
    var targetAngle = 0;
    if (this.vx < -1) targetAngle = -this.tiltAngle;
    else if (this.vx > 1) targetAngle = this.tiltAngle;

    var faceRight = ax > this.x;
    var vresp = 1 - Math.exp(-this.tiltResponse * dt);
    this.angle += (targetAngle - this.angle) * vresp;
    this.scaleX += ((faceRight ? -1 : 1) - this.scaleX) * vresp;
};

window.PendantFollow.prototype.pose = function () {
    return { x: this.x, y: this.y, angle: this.angle, scaleX: this.scaleX };
};


/* ── 贴纸（Sticker）────────────────────────────────────────────
   exe: UpdateStickerPosition() { ballX = targetAnchorX; ballY = targetAnchorY; }
   没有任何物理 —— 贴纸就是钉在光标上。 */
window.PendantSticker = function (opts) {
    this.restLen = 0;
    this.x = 0; this.y = 0;
    this.anchorX = 0; this.anchorY = 0;
};

window.PendantSticker.prototype.reset = function (ax, ay) {
    this.anchorX = ax; this.anchorY = ay;
    this.x = ax; this.y = ay;
};

window.PendantSticker.prototype.setAnchor = function (ax, ay) {
    this.anchorX = ax; this.anchorY = ay;
    this.x = ax; this.y = ay;
};

window.PendantSticker.prototype.advance = function (dt) {
    // 无物理，但保持接口一致
    this.x = this.anchorX;
    this.y = this.anchorY;
};

window.PendantSticker.prototype.pose = function () {
    return { x: this.x, y: this.y, angle: 0, scaleX: 1 };
};

})();


/* ===== 挂件渲染：把物理结果画到页面上 ===== */
(function () {
    var rig = null;
    var activeEl = null;
    var pinned = false;
    var raf = null;
    var lastTime = 0;
    var mx = 0, my = 0;
    var generation = 0;   // 异步守卫：fetch 可能比 mouseleave 晚返回
    var metaCache = {};

    function ensureRig() {
        if (rig) return rig;

        var cv = document.createElement('canvas');
        cv.id = 'pendant-rope';
        cv.style.cssText = 'position:fixed;left:0;top:0;pointer-events:none;z-index:2147483646;';
        document.body.appendChild(cv);

        var img = document.createElement('img');
        img.id = 'pendant-img';
        img.alt = '';
        img.setAttribute('aria-hidden', 'true');
        img.style.cssText = 'position:fixed;left:0;top:0;pointer-events:none;' +
            'z-index:2147483647;display:none;image-rendering:pixelated;' +
            'transform-origin:0 0;will-change:transform;';
        document.body.appendChild(img);

        rig = { cv: cv, ctx: cv.getContext('2d'), img: img, phys: null, meta: null,
                shapeScale: 1, offX: 0, offY: 0, cssW: 0, cssH: 0, url: null, dpr: 1 };
        return rig;
    }

    function resizeCanvas() {
        if (!rig) return;
        var dpr = Math.max(1, window.devicePixelRatio || 1);
        rig.dpr = dpr;
        rig.cv.width = Math.round(window.innerWidth * dpr);
        rig.cv.height = Math.round(window.innerHeight * dpr);
        rig.cv.style.width = window.innerWidth + 'px';
        rig.cv.style.height = window.innerHeight + 'px';
        // 之后所有绘制都用 CSS 像素坐标
        rig.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener('resize', resizeCanvas);

    // 与光标一致的尺寸规则：源图内容为 64px，按 dpr 取整数倍
    function scaleForDpr(dpr) {
        if (dpr <= 1) return 1;
        if (dpr <= 1.5) return 1.5;
        if (dpr <= 2) return 2;
        if (dpr <= 3) return 3;
        return Math.round(dpr);
    }

    function loadMeta(url) {
        if (metaCache[url]) return Promise.resolve(metaCache[url]);
        return fetch(url, { cache: 'force-cache' })
            .then(function (r) { return r.ok ? r.json() : null; })
            .then(function (m) { if (m) metaCache[url] = m; return m; })
            .catch(function () { return null; });
    }

    function start(url, meta, el) {
        var r = ensureRig();
        var dpr = Math.max(1, window.devicePixelRatio || 1);
        var k = scaleForDpr(dpr);
        var cssW = meta.width * k / dpr;
        var cssH = meta.height * k / dpr;

        // exe 里挂件一律按「最长边 = _imageSize*2 = 96」绘制，绳长 100 是同一坐标系下的值，
        // 所以所有作品的绳长/重力都相同。我们的挂件图已把「内容高度」统一到 64px，
        // 各图因透明边距不同而整体尺寸不同 —— 若按整体尺寸换算，绳长会在 78~116px 之间漂移，
        // 两个挂件并排就会一长一短。这里改用「内容尺寸」为基准，于是 shapeScale 恒为 1，
        // 绳长/重力与 exe 的绝对数值一致（100px / 11000）。
        var shapeScale = (meta.contentHeight || 64) / 64;
        if (!isFinite(shapeScale) || shapeScale <= 0) shapeScale = 1;

        if (r.url !== url) {
            r.url = url;
            r.img.src = 'pendant/' + meta.file;
        }
        r.meta = meta;
        r.shapeScale = shapeScale;
        r.cssW = cssW;
        r.cssH = cssH;
        r.img.style.width = cssW + 'px';
        r.img.style.height = cssH + 'px';

        // 挂点相对鼠标的偏移（右下）。exe: ratio * BaseCursorSize
        r.offX = (meta.cursorAnchorX == null ? 0.594 : meta.cursorAnchorX) * window.PENDANT_BASE_CURSOR_SIZE;
        r.offY = (meta.cursorAnchorY == null ? 0.813 : meta.cursorAnchorY) * window.PENDANT_BASE_CURSOR_SIZE;

        // exe 按项目类型用完全不同的物理（Form1.ModeMotion.cs:86-117）：
        //   Follow  悬浮挂件 → 无绳子，以光标为圆心、绳长为半径弹性跟随
        //   Sticker 贴纸     → 无物理，直接贴住光标
        //   Pendant 挂件     → Verlet 绳子
        var type = (meta.projectType || 'Pendant');
        var mode = (type === 'Follow') ? 'follow'
                 : (type === 'Sticker') ? 'sticker'
                 : 'pendant';
        var restLen = meta.ropeLength * shapeScale;

        // 换作品或换模式时重建物理对象
        if (r.mode !== mode || r.url !== url || !r.phys) {
            r.mode = mode;
            if (mode === 'follow') {
                r.phys = new window.PendantFollow({ restLen: restLen });
                r.phys.reset(mx + r.offX, my + r.offY);
            } else if (mode === 'sticker') {
                r.phys = new window.PendantSticker({});
                r.phys.reset(mx + r.offX, my + r.offY);
            } else {
                r.phys = new window.PendantPhysics({
                    imageSize: meta.imageSize || BASE_IMAGE_SIZE,
                    restLen: restLen,
                    gravity: meta.gravity * shapeScale,
                    ropeSegments: meta.ropeSegments,
                });
                r.phys.setAnchor(mx + r.offX, my + r.offY, true);
            }
        } else if (mode === 'pendant') {
            r.phys.restLen = restLen;
            r.phys.gravity = meta.gravity * shapeScale;
            r.phys.segLen = r.phys.restLen / r.phys.segments;
        } else {
            r.phys.restLen = restLen;
        }

        resizeCanvas();
        r.img.style.display = 'block';
        activeEl = el;
        if (!raf) { lastTime = performance.now(); raf = requestAnimationFrame(loop); }
    }

    function loop(now) {
        raf = null;
        if (!activeEl || !rig || !rig.phys) return;
        var dt = Math.min(0.05, (now - lastTime) / 1000);
        lastTime = now;

        rig.phys.setAnchor(mx + rig.offX, my + rig.offY);
        rig.phys.advance(dt);

        var meta = rig.meta;
        var pose = rig.phys.pendantPose ? rig.phys.pendantPose() : rig.phys.pose();
        var scaleX = pose.scaleX == null ? 1 : pose.scaleX;
        // 挂件：先把锚点比例对应的那个点移到绳末端，再按绳末端角度旋转
        //   exe: Translate(pendantX,pendantY) → Rotate(angle) → DrawImage(-w/2-ax*w, -h/2-ay*h)
        //   等价于 translate(x,y) rotate(a) translate(-ax*w, -ay*h)
        // 贴纸特殊：让图的【左上角】落在挂点上，这样贴纸整体待在光标右下方、不遮挡光标。
        // （其他模式仍按 anchorX/anchorY 对齐，比如挂件是中心 0.5/0.5）
        var ax, ay;
        if (rig.mode === 'sticker') {
            ax = 0;
            ay = 0;
        } else {
            ax = (meta.anchorX == null ? 0.5 : meta.anchorX) * rig.cssW;
            ay = (meta.anchorY == null ? 0.5 : meta.anchorY) * rig.cssH;
        }
        // scaleX 用于悬浮挂件的左右朝向翻转（exe 的 FlipPendantHorizontally）
        rig.img.style.transform =
            'translate(' + pose.x + 'px,' + pose.y + 'px) ' +
            'rotate(' + pose.angle + 'rad) ' +
            'scale(' + scaleX + ',1) ' +
            'translate(' + (-ax) + 'px,' + (-ay) + 'px)';

        // 绳子：只有挂件（Pendant）有；悬浮挂件和贴纸在 exe 里都没有绳子
        if (rig.mode !== 'pendant') {
            rig.ctx.clearRect(0, 0, rig.cv.width, rig.cv.height);
            rig.ropeFrames = 0;      // 非挂件模式：绳绘制次数归零
            raf = requestAnimationFrame(loop);
            return;
        }

        var ctx = rig.ctx, nodes = rig.phys.nodes();
        ctx.clearRect(0, 0, rig.cv.width, rig.cv.height);
        rig.ropeFrames = (rig.ropeFrames || 0) + 1;   // 诊断：绳子实际绘制次数
        ctx.strokeStyle = (meta.ropeColor || '#464646');
        ctx.lineWidth = Math.max(1, 3 * rig.shapeScale);   // exe: Pen(color, 3)
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(nodes[0].x, nodes[0].y);
        if (nodes.length >= 4) {
            // exe 用 DrawCurve(tension 0.45)；这里用中点二次曲线近似，观感一致
            for (var i = 1; i < nodes.length - 1; i++) {
                var midX = (nodes[i].x + nodes[i + 1].x) / 2;
                var midY = (nodes[i].y + nodes[i + 1].y) / 2;
                ctx.quadraticCurveTo(nodes[i].x, nodes[i].y, midX, midY);
            }
            ctx.lineTo(nodes[nodes.length - 1].x, nodes[nodes.length - 1].y);
        } else {
            for (var j = 1; j < nodes.length; j++) ctx.lineTo(nodes[j].x, nodes[j].y);
        }
        ctx.stroke();

        raf = requestAnimationFrame(loop);
    }

    function stop() {
        generation++;
        if (raf) { cancelAnimationFrame(raf); raf = null; }
        if (rig) {
            rig.img.style.display = 'none';
            rig.ctx.clearRect(0, 0, rig.cv.width, rig.cv.height);
            rig.ropeFrames = 0;
        }
        activeEl = null;
    }

    window.addEventListener('mousemove', function (e) {
        mx = e.clientX; my = e.clientY;
    }, { passive: true });

    window.pendantShow = function (url, el) {
        if (!window.PendantPhysics) return;
        var gen = ++generation;
        loadMeta(url).then(function (meta) {
            if (!meta) return;
            if (gen !== generation) return;     // 已经移开或换了卡片
            if (mx === 0 && my === 0) { mx = window.innerWidth / 2; my = window.innerHeight / 2; }
            start(url, meta, el);
        });
    };

    window.pendantHide = function (el) {
        if (pinned) return;
        if (el && activeEl && activeEl !== el) return;
        stop();
    };

    var pinObserver = null;
    window.pendantPin = function (url, el, guard) {
        pinned = true;
        window.pendantShow(url, el);
        if (pinObserver) { try { pinObserver.disconnect(); } catch (e) {} pinObserver = null; }
        if (guard && window.MutationObserver) {
            try {
                pinObserver = new MutationObserver(function () {
                    if (guard.style.display === 'none') window.pendantUnpin();
                });
                pinObserver.observe(guard, { attributes: true, attributeFilter: ['style'] });
            } catch (e) {}
        }
    };

    window.pendantUnpin = function () {
        pinned = false;
        if (pinObserver) { try { pinObserver.disconnect(); } catch (e) {} pinObserver = null; }
        stop();
    };

    document.addEventListener('mouseleave', function () { if (!pinned) stop(); });
    window.addEventListener('blur', function () { if (!pinned) stop(); });

    window.__pendantInfo = function () {
        // 三种模式的取姿态方法名不同：挂件是 pendantPose()，悬浮/贴纸是 pose()
        var pose = null;
        if (rig && rig.phys) {
            try {
                pose = rig.phys.pendantPose ? rig.phys.pendantPose() : rig.phys.pose();
            } catch (e) { pose = null; }
        }
        return {
            active: !!activeEl,
            pinned: pinned,
            // 只在真正激活时回报 mode/图，避免刚 stop() 后仍读到上一次的残留值
            mode: activeEl && rig ? rig.mode : null,
            url: rig ? rig.url : null,
            display: rig && rig.img ? getComputedStyle(rig.img).display : null,
            restLen: rig && rig.phys ? rig.phys.restLen : null,
            segments: rig && rig.phys ? rig.phys.segments : null,
            points: rig && rig.phys ? rig.phys.points : null,
            shapeScale: rig ? rig.shapeScale : null,
            offset: rig ? [Math.round(rig.offX), Math.round(rig.offY)] : null,
            pose: pose ? { x: Math.round(pose.x), y: Math.round(pose.y),
                           angleDeg: +(pose.angle * 180 / Math.PI).toFixed(1),
                           scaleX: pose.scaleX == null ? 1 : +pose.scaleX.toFixed(3) } : null,
            frozen: rig && rig.phys ? rig.phys.frozenAtRest : null,
            ropeFrames: rig ? (rig.ropeFrames || 0) : 0,
            imgLoaded: rig && rig.img ? rig.img.naturalWidth > 0 : false,
        };
    };
})();
