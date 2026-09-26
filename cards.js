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
   物理部分从 exe 的 Form1.PhysicsEngine3.cs 移植（Verlet + 距离约束）
   ==================================================================== */
/* ===== 挂件绳子物理（从 exe 的 Verlet 实现移植）=====
   原实现在 Form1.PhysicsEngine3.cs，这里 1:1 复刻其积分与约束，
   保证网页上的摆动和 exe 里一致。

   单位说明：
     exe 里 ImageSize=48 是基准，绳子长 100 表示「图片 48px 时长 100px」。
     网页上挂件图按同一比例显示，所以所有长度都乘 scale = 显示尺寸 / 48。
     物理本身在 CSS 像素下算（与 exe 的物理像素在 100% DPI 下等价）。

   固定步长很关键：exe 用 1/240 秒定步长 + 累加器，这样摆动速度与帧率无关。
   如果直接用 rAF 的 dt，120Hz 屏和 60Hz 屏的摆动会不一样。 */
(function () {
    // ── 与原实现一致的常量 ──
    var FIXED_STEP = 1 / 240;          // FixedPhysicsStep
    var MAX_FRAME_DELTA = 0.033;       // MaxFrameDelta
    var MAX_STEPS_PER_TICK = 8;        // MaxPhysicsStepsPerTick
    var MAX_ANCHOR_MOVE_PER_STEP = 48; // MaxAnchorMovePerPhysicsStep
    var MAX_ANCHOR_STEPS = 18;         // MaxAnchorPhysicsStepsPerTick

    var VELOCITY_DAMPING = 0.993;      // Engine3VelocityDamping
    var AIR_DAMPING = 0.960;           // Engine3AirDamping
    var GRAVITY_SCALE = 0.864;         // Engine3GravityScale
    var ANCHOR_VELOCITY_TRANSFER = 0.225; // Engine3AnchorVelocityTransfer
    var CONSTRAINT_VELOCITY_PRESERVE = 0.88; // Engine3ConstraintVelocityPreserve
    var STRETCH_GUARD_RATIO = 1.18;    // Engine3StretchGuardRatio
    var ABSOLUTE_STRETCH_RATIO = 1.32; // Engine3AbsoluteStretchRatio
    var LONG_SEGMENT_REF = 18;         // Engine3LongSegmentReferenceLength
    var LONG_SEGMENT_TIGHT = 1.10;     // Engine3LongSegmentTightStretchGuardRatio
    var MAX_POINT_DELTA = 28;          // Engine3MaxPointDelta
    var MAX_PENDANT_DELTA = 38;        // Engine3MaxPendantDelta
    var MIN_CONSTRAINT_ITER = 5;       // Engine3MinimumConstraintIterations
    var STRETCH_GUARD_ITER = 2;        // Engine3StretchGuardIterations

    // 创建一个绳+挂件的模拟器
    // opts: { imageSize, ropeLength, ropeSegments, gravity, anchorX, anchorY }
    //   imageSize  挂件图的显示边长（CSS px）
    //   ropeLength 原始绳长（以 48 为基准的单位）
    //   anchorX/Y  挂件图内的挂点比例
    window.PendantPhysics = function (opts) {
        var self = this;

        // 把 exe 的单位换算到网页
        var baseSize = 48;
        var scale = opts.imageSize / baseSize;

        this.imageSize = opts.imageSize;
        // 绳长换算：exe 里 ropeLength 配 ImageSize=48 使用，比例是 2.08 倍图高，
        // 那在桌面挂件上合适，但网页悬停场景太长（96px 图会有 200px 绳子，
        // 挂件垂到鼠标下方很远）。这里改成「ropeLength/100 × 图高」，
        // 使绳长 ≈ 图高的 1.0~1.4 倍，紧凑且仍能摆动。
        this.restLen = (opts.ropeLength || 100) / 100 * opts.imageSize;
        this.segmentCount = Math.max(1, opts.ropeSegments || 6);
        this.gravity = opts.gravity || 11000;
        this.anchorRX = opts.anchorX == null ? 0.5 : opts.anchorX;
        this.anchorRY = opts.anchorY == null ? 0.5 : opts.anchorY;

        this.segmentLength = this.restLen / this.segmentCount;

        // sizeMassScale：越大的挂件惯性越大（原实现用 sqrt(imageSize/48)）
        var sizeRatio = Math.max(0.25, opts.imageSize / baseSize);
        this.sizeMassScale = Math.min(2.2, Math.max(0.75, Math.sqrt(sizeRatio)));

        var n = this.segmentCount + 1;
        this.ropeX = new Float64Array(n);
        this.ropeY = new Float64Array(n);
        this.ropeOldX = new Float64Array(n);
        this.ropeOldY = new Float64Array(n);

        this.anchorX = 0; this.anchorY = 0;
        this.targetAnchorX = 0; this.targetAnchorY = 0;
        this.prevAnchorX = 0; this.prevAnchorY = 0;
        this.accumulator = 0;

        this.reset();
    };

    // 重置到「绳子竖直垂下」的静止状态
    window.PendantPhysics.prototype.reset = function () {
        var n = this.ropeX.length;
        for (var i = 0; i < n; i++) {
            this.ropeX[i] = this.anchorX;
            this.ropeY[i] = this.anchorY + this.segmentLength * i;
            this.ropeOldX[i] = this.ropeX[i];
            this.ropeOldY[i] = this.ropeY[i];
        }
        this.prevAnchorX = this.anchorX;
        this.prevAnchorY = this.anchorY;
        this.accumulator = 0;
    };

    // 设定挂点（鼠标位置）——立即对齐还是平滑跟随由 advance 处理
    window.PendantPhysics.prototype.setAnchor = function (x, y, instant) {
        if (instant) {
            var dx = x - this.anchorX, dy = y - this.anchorY;
            this.anchorX = x; this.anchorY = y;
            this.targetAnchorX = x; this.targetAnchorY = y;
            this.prevAnchorX = x; this.prevAnchorY = y;
            for (var i = 0; i < this.ropeX.length; i++) {
                this.ropeX[i] += dx; this.ropeY[i] += dy;
                this.ropeOldX[i] += dx; this.ropeOldY[i] += dy;
            }
        } else {
            this.targetAnchorX = x; this.targetAnchorY = y;
        }
    };

    // 挂件中心位置（绳子末端）
    window.PendantPhysics.prototype.pendantPos = function () {
        var last = this.ropeX.length - 1;
        return { x: this.ropeX[last], y: this.ropeY[last] };
    };

    // 绳子的各个节点（用于绘制）
    window.PendantPhysics.prototype.nodes = function () {
        var out = [];
        for (var i = 0; i < this.ropeX.length; i++) out.push({ x: this.ropeX[i], y: this.ropeY[i] });
        return out;
    };

    window.PendantPhysics.prototype.advance = function (dt) {
        if (dt <= 0) return;
        this.accumulator += Math.min(dt, MAX_FRAME_DELTA);

        var steps = Math.min(MAX_STEPS_PER_TICK, Math.floor(this.accumulator / FIXED_STEP));
        if (steps <= 0) return;

        // 挂点在帧内平滑移动（原实现：把这一帧的位移拆到各物理步里）
        var startX = this.anchorX, startY = this.anchorY;
        var endX = isFinite(this.targetAnchorX) ? this.targetAnchorX : this.anchorX;
        var endY = isFinite(this.targetAnchorY) ? this.targetAnchorY : this.anchorY;

        // 单帧位移过大时再细分（原实现 MaxAnchorMovePerPhysicsStep）
        var mdx = endX - startX, mdy = endY - startY;
        var moveDist = Math.sqrt(mdx * mdx + mdy * mdy);
        var extra = Math.max(1, Math.min(MAX_ANCHOR_STEPS, Math.ceil(moveDist / MAX_ANCHOR_MOVE_PER_STEP)));
        var totalSteps = steps * extra;

        for (var step = 1; step <= totalSteps; step++) {
            var progress = step / totalSteps;
            this.anchorX = startX + (endX - startX) * progress;
            this.anchorY = startY + (endY - startY) * progress;
            // 每个子步用更小的时间步，保持物理稳定
            this._update(FIXED_STEP / extra);
        }

        this.accumulator -= steps * FIXED_STEP;
        if (this.accumulator >= FIXED_STEP) this.accumulator = 0;
    };

    window.PendantPhysics.prototype._update = function (dt) {
        var n = this.ropeX.length;
        var last = n - 1;

        var anchorMoveX = this.anchorX - this.prevAnchorX;
        var anchorMoveY = this.anchorY - this.prevAnchorY;

        // 锚点
        this.ropeX[0] = this.anchorX;
        this.ropeY[0] = this.anchorY;
        // 锚点的位移按比例传给首端，模拟「手带动绳子」
        this.ropeOldX[0] = this.anchorX - anchorMoveX * ANCHOR_VELOCITY_TRANSFER;
        this.ropeOldY[0] = this.anchorY - anchorMoveY * ANCHOR_VELOCITY_TRANSFER;
        this.prevAnchorX = this.anchorX;
        this.prevAnchorY = this.anchorY;

        this._integrate(last, dt);
        this._solveConstraints(this._constraintIterations(anchorMoveX, anchorMoveY));
        this._stretchGuard();
        this._pinAnchor();
        this._clampExtent(last);
    };

    window.PendantPhysics.prototype._integrate = function (pendantIndex, dt) {
        var effectiveDamping = Math.min(0.997, Math.max(0.94, VELOCITY_DAMPING * AIR_DAMPING));
        var gravityStep = this.gravity * GRAVITY_SCALE * dt * dt;

        var inertiaBoost = Math.max(0, this.sizeMassScale - 1) * 0.035;
        var smallDrag = Math.max(0, 1 - this.sizeMassScale) * 0.008;
        var pendantDamping = Math.min(0.997, Math.max(0.94, effectiveDamping + inertiaBoost - smallDrag));

        var n = this.ropeX.length;
        for (var i = 1; i < n; i++) {
            var isPendant = i >= pendantIndex;
            var damping = isPendant ? pendantDamping : effectiveDamping;
            var grav = isPendant ? gravityStep * this.sizeMassScale : gravityStep;

            var vx = (this.ropeX[i] - this.ropeOldX[i]) * damping;
            var vy = (this.ropeY[i] - this.ropeOldY[i]) * damping;

            this.ropeOldX[i] = this.ropeX[i];
            this.ropeOldY[i] = this.ropeY[i];
            this.ropeX[i] += vx;
            this.ropeY[i] += vy + grav;

            this._clampVelocity(i, pendantIndex);
        }
    };

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

    window.PendantPhysics.prototype._constraintIterations = function (mx, my) {
        var it = MIN_CONSTRAINT_ITER;
        var move = Math.sqrt(mx * mx + my * my);
        if (move > 24) it += Math.min(8, Math.ceil((move - 24) / 26));
        // 段很长时多迭代几次，避免拉伸
        if (this.segmentLength > LONG_SEGMENT_REF) {
            var s = (this.segmentLength - LONG_SEGMENT_REF) / LONG_SEGMENT_REF;
            it += Math.min(8, Math.ceil(s * 4));
        }
        return it;
    };

    window.PendantPhysics.prototype._solveConstraints = function (iterations) {
        var n = this.ropeX.length;
        for (var iter = 0; iter < iterations; iter++) {
            this.ropeX[0] = this.anchorX;
            this.ropeY[0] = this.anchorY;
            for (var i = 0; i < n - 1; i++) {
                this._distanceConstraint(i, i + 1, this.segmentLength, CONSTRAINT_VELOCITY_PRESERVE);
            }
        }
    };

    window.PendantPhysics.prototype._distanceConstraint = function (a, b, target, preserve) {
        var dx = this.ropeX[b] - this.ropeX[a];
        var dy = this.ropeY[b] - this.ropeY[a];
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= 0.0001) return;

        var correction = (dist - target) / dist;
        // 首端是锚点不参与移动，其余平均分摊
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

    window.PendantPhysics.prototype._stretchGuardRatio = function () {
        if (this.segmentLength <= LONG_SEGMENT_REF) return STRETCH_GUARD_RATIO;
        var s = (this.segmentLength - LONG_SEGMENT_REF) / LONG_SEGMENT_REF;
        var drop = Math.min(STRETCH_GUARD_RATIO - LONG_SEGMENT_TIGHT, s * 0.05);
        return STRETCH_GUARD_RATIO - drop;
    };

    window.PendantPhysics.prototype._stretchGuard = function () {
        var n = this.ropeX.length;
        var maxSeg = this.segmentLength * this._stretchGuardRatio();

        for (var iter = 0; iter < STRETCH_GUARD_ITER; iter++) {
            var adjusted = false;
            this.ropeX[0] = this.anchorX;
            this.ropeY[0] = this.anchorY;
            for (var i = 0; i < n - 1; i++) {
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

    window.PendantPhysics.prototype._pinAnchor = function () {
        this.ropeX[0] = this.anchorX;
        this.ropeY[0] = this.anchorY;
        this.ropeOldX[0] = this.anchorX;
        this.ropeOldY[0] = this.anchorY;
    };

    window.PendantPhysics.prototype._clampExtent = function (idx) {
        var dx = this.ropeX[idx] - this.anchorX;
        var dy = this.ropeY[idx] - this.anchorY;
        if (!isFinite(dx) || !isFinite(dy)) { this.reset(); return; }

        var dist = Math.sqrt(dx * dx + dy * dy);
        var maxDist = Math.max(this.segmentLength, this.restLen * ABSOLUTE_STRETCH_RATIO);
        if (dist <= maxDist || dist <= 0.0001) return;

        var sx = this.anchorX + dx / dist * maxDist;
        var sy = this.anchorY + dy / dist * maxDist;
        var mx = sx - this.ropeX[idx], my = sy - this.ropeY[idx];
        this.ropeX[idx] = sx; this.ropeY[idx] = sy;
        this.ropeOldX[idx] += mx; this.ropeOldY[idx] += my;
    };

    // 挂件图左上角应该在的位置（用锚点比例反推）
    window.PendantPhysics.prototype.pendantTopLeft = function () {
        var p = this.pendantPos();
        return { x: p.x - this.anchorRX * this.imageSize, y: p.y - this.anchorRY * this.imageSize };
    };
})();

/* ===== 挂件悬停效果（绳子物理）=====
   从 exe 的 Verlet 实现移植物理（见 PendantPhysics），这里负责渲染与交互。

   触发方式：
     · 卡片悬停 → 挂件从鼠标位置吊下来，跟随鼠标摆动
     · 弹窗打开 → 持续吊着（pin 模式），直到弹窗关闭

   与假光标的分工：
     · cursor 类卡片 → 鼠标本身变成该作品的光标（隐藏真光标）
     · pendant/follow/sticker 类卡片 → 真光标保留，挂件挂在鼠标上
   两类互斥，由卡片的下载 tag 决定走哪条路。
*/
(function () {
    var rig = null;           // 单例：一个页面只需要一套绳子和挂件图
    var activeEl = null;
    var pinned = false;
    var raf = null;
    var lastTime = 0;

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
            'z-index:2147483647;display:none;image-rendering:pixelated;will-change:transform;';
        document.body.appendChild(img);

        rig = { cv: cv, ctx: cv.getContext('2d'), img: img, phys: null, meta: null, k: 1, url: null };
        return rig;
    }

    function resizeCanvas() {
        if (!rig) return;
        rig.cv.width = window.innerWidth;
        rig.cv.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);

    // 与光标一致的尺寸规则：源图内容已是 64px，按 dpr 取整数倍放大
    function scaleForDpr(dpr) {
        if (dpr <= 1) return 1;
        if (dpr <= 1.5) return 1.5;
        if (dpr <= 2) return 2;
        if (dpr <= 3) return 3;
        return Math.round(dpr);
    }

    // 缓存已加载的元数据，避免每次悬停都 fetch
    var metaCache = {};

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

        // 换挂件图
        if (r.url !== url) {
            r.url = url;
            r.meta = meta;
            r.k = k;
            r.img.src = 'pendant/' + meta.file;
            r.img.style.width = cssW + 'px';
            r.img.style.height = cssH + 'px';
            r.phys = new window.PendantPhysics({
                imageSize: cssW,
                ropeLength: meta.ropeLength,
                ropeSegments: meta.ropeSegments,
                gravity: meta.gravity,
                anchorX: meta.anchorX,
                anchorY: meta.anchorY,
            });
            r.phys.setAnchor(mx, my, true);
        } else {
            // 同一挂件重复显示：只更新尺寸（dpr 可能变了）
            r.meta = meta; r.k = k;
            r.img.style.width = cssW + 'px';
            r.img.style.height = cssH + 'px';
            if (r.phys) r.phys.imageSize = cssW;
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

        rig.phys.setAnchor(mx, my);
        rig.phys.advance(dt);

        // 挂件位置：锚点比例决定图相对挂点的偏移
        var tl = rig.phys.pendantTopLeft();
        rig.img.style.transform = 'translate(' + tl.x + 'px,' + tl.y + 'px)';

        // 画绳子
        var ctx = rig.ctx, nodes = rig.phys.nodes();
        ctx.clearRect(0, 0, rig.cv.width, rig.cv.height);
        ctx.strokeStyle = (rig.meta && rig.meta.ropeColor) || '#464646';
        var dpr = Math.max(1, window.devicePixelRatio || 1);
        ctx.lineWidth = Math.max(1, 1.5 * rig.k / dpr);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(nodes[0].x, nodes[0].y);
        for (var i = 1; i < nodes.length; i++) ctx.lineTo(nodes[i].x, nodes[i].y);
        ctx.stroke();

        raf = requestAnimationFrame(loop);
    }

    function stop() {
        generation++;   // 作废所有在途的异步显示请求
        if (raf) { cancelAnimationFrame(raf); raf = null; }
        if (rig) {
            rig.img.style.display = 'none';
            rig.ctx.clearRect(0, 0, rig.cv.width, rig.cv.height);
        }
        activeEl = null;
    }

    var mx = 0, my = 0;
    // 异步守卫：pendantShow 里的 fetch 可能比 mouseleave 晚返回，
    // 若不校验就会把已经收起的挂件重新唤醒（实测出现过这个 bug）。
    var generation = 0;

    window.addEventListener('mousemove', function (e) {
        mx = e.clientX; my = e.clientY;
        // 首次显示前锚点还没定位，这里兜底更新
        if (activeEl && rig && rig.phys && rig.phys.anchorX === 0 && rig.phys.anchorY === 0) {
            rig.phys.setAnchor(mx, my, true);
        }
    }, { passive: true });

    window.pendantShow = function (url, el) {
        if (!window.PendantPhysics) return;
        var gen = ++generation;
        loadMeta(url).then(function (meta) {
            if (!meta) return;
            // 期间用户已经移开或换了别的卡片 → 放弃这次显示
            if (gen !== generation) return;
            if (mx === 0 && my === 0) { mx = window.innerWidth / 2; my = window.innerHeight / 2; }
            start(url, meta, el);
        });
    };

    window.pendantHide = function (el) {
        if (pinned) return;              // 钉住期间不隐藏
        if (el && activeEl && activeEl !== el) return;
        stop();
    };

    // 弹窗用：持续吊着直到弹窗关闭
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

    // 兜底：鼠标移出文档 / 窗口失焦 → 收起（钉住时除外）
    document.addEventListener('mouseleave', function () { if (!pinned) stop(); });
    window.addEventListener('blur', function () { if (!pinned) stop(); });

    // 诊断
    window.__pendantInfo = function () {
        return {
            active: !!activeEl,
            pinned: pinned,
            url: rig ? rig.url : null,
            display: rig ? getComputedStyle(rig.img).display : null,
            restLen: rig && rig.phys ? rig.phys.restLen : null,
            pos: rig && rig.phys ? rig.phys.pendantPos() : null,
            imgLoaded: rig ? rig.img.naturalWidth > 0 : false,
        };
    };
})();
