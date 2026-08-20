// 卡片数据（包含下载链接）
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
            steam: 'https://store.steampowered.com/app/3254220/Simple_Cursor_Maker/'
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
        }
    },
    {
        id: 'teto3.0',
        title: 'teto',
        description: 'teto',
        image: './icon/teto挂件宣传.png',
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

        }
    },
    {
        id: 'miku3.0',
        title: '初音未来',
        description: '初音未来',
        image: './icon/初音未来挂件.png',
        links: {
            quark: 'https://pan.quark.cn/s/d45d1c79ef01',
            lanzou: 'https://wwbny.lanzoue.com/b00l2o49he',
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
        }
    },
    {
        id: 'feibi',
        title: '菲比',
        description: '菲比丘比',
        image: './icon/菲比光标宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/8c4e21383e38',
            lanzou: 'https://wwbny.lanzoue.com/b00l2o49eb',
        }
    },

    {
        id: 'zaomiao',
        title: '早苗',
        description: '早苗',
        image: './icon/早苗光标宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/f91991d26afd',
            lanzou: 'https://wwbny.lanzoue.com/b00l2o49bi',
        }
    },



    {
        id: 'chenqianyu',
        title: '陈千语',
        description: '啥子',
        image: './icon/陈千语光标宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/6e659ce89a58',
            lanzou: 'https://wwbny.lanzoue.com/b00l2m0wba',
        }
    },
    {
        id: 'xiaosan',
        title: '多多良小伞',
        description: '小伞',
        image: './icon/小伞光标宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/6be825387d35',
            lanzou: 'https://wwbny.lanzoue.com/b00l2gztaf',
        }
    },

    {
        id: 'quancifang',
        title: '泉此方',
        description: '幸运星',
        image: './icon/泉此方光标宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/1f548ba2ee6e',
            lanzou: 'https://wwpy.lanzoue.com/b00l2e7bah',
        }
    }, {
        id: 'tiedaoshuangzi',
        title: '橘光橘望',
        description: '可爱捏',
        image: './icon/橘光橘望光标宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/2a86f97f589f',
            baidu: 'https://pan.baidu.com/s/1r_7rXwv9HvUBUrxUFgAawA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l2cuqfi',
        }
    },
    {
        id: 'katixiya',
        title: '卡缇希娅',
        description: '可爱捏',
        image: './icon/卡缇希娅光标宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/c2812e04fa37',
            baidu: 'https://pan.baidu.com/s/1r_7rXwv9HvUBUrxUFgAawA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l2cesnc',
        }
    },

    {
        id: 'fulan',
        title: '芙兰朵露',
        description: '可爱捏',
        image: './icon/芙兰朵露光标宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/e348395d7225',
            baidu: 'https://pan.baidu.com/s/1PdahtFMN1wy36G4hzEt2NQ?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l2brbxc',
        }
    },
    {
        id: 'saba',
        title: '猫鲨saba',
        description: '可爱捏',
        image: './icon/saba光标宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/262c8cb07ec4',
            baidu: 'https://pan.baidu.com/s/1yknDogS323V27TSaXW5P0Q?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l2ay8vi',
        }
    },
    {
        id: 'mumingdijue',
        title: '古明地觉',
        description: '小五',
        image: './icon/古明地觉宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/8411f55ad57b',
            baidu: 'https://pan.baidu.com/s/1ytrYdeBeyQo1dcoYwWG_LA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l29ycqb',
        }
    },
    {
        id: 'molis',
        title: '魔理莎',
        description: '莎莎',
        image: './icon/魔理沙宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/64d83bc83d49',
            baidu: 'https://pan.baidu.com/s/1xBc9uvzEWn5BDM8UB9SXiA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l28zqkj',
        }
    },
    {
        id: 'fulil',
        title: '芙莉莲',
        description: '=w=',
        image: './icon/芙莉莲宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/2ade2b99f8d8',
            baidu: 'https://pan.baidu.com/s/1YaP7LMT-9vvU0v6qGLlJNw?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l26ef7c',
        }
    },
    {
        id: 'teto',
        title: 'teto',
        description: '红色钻头',
        image: './icon/teto光标宣传.gif',
        links: {
            quark: 'https://pan.quark.cn/s/85d7a87b873f',
            baidu: 'https://pan.baidu.com/s/15iriKVjJDUD1gDTGXddF8Q?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l23xxod',
        }
    },
    {
        id: 'lingmeng',
        title: '博丽灵梦',
        description: 'good apple',
        image: './icon/灵梦宣传aa2.gif',
        links: {
            quark: 'https://pan.quark.cn/s/5e61d07a2cf5',
            baidu: 'https://pan.baidu.com/s/1zz4IaEfU_bmqHP7tOHO6ow?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l2378pi',
        }
    },
    {
        id: 'yileina',
        title: '伊蕾娜',
        description: '可爱',
        image: './icon/伊蕾娜光标宣传a2.gif',
        links: {
            quark: 'https://pan.quark.cn/s/0b9aeb8ba9ed',
            baidu: 'https://pan.baidu.com/s/1B27QOHyN2Fzc6hFvymchmg?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l2116qj'
        }
    },
    {
        id: 'boqi',
        title: '可爱波奇',
        description: '可爱',
        image: './icon/波奇酱宣传a2.gif',
        links: {
            quark: 'https://pan.quark.cn/s/7b4b1bd17cb1',
            baidu: 'https://pan.baidu.com/s/1TGmpGpNkmu4OU2kUPMvhig?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l20d4he'
        }
    },
    {
        id: 'xnyxy',
        title: '可爱星野',
        description: '可爱星野',
        image: './icon/小鸟游星野光标宣传2.gif',
        links: {
            quark: 'https://pan.quark.cn/s/b605be6adac5',
            baidu: 'https://pan.baidu.com/s/1VM88_hZAVGLIVr6y2wmSIw?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l203cmh'
        }
    },
    {
        id: 'ralsei',
        title: 'ralsei',
        description: '超级可爱！',
        image: './icon/三角符文小羊光标宣传2.gif',
        links: {
            quark: 'https://pan.quark.cn/s/fdd616816133',
            baidu: 'https://pan.baidu.com/s/1PuVAmVSNcccaH3P_UzdgaQ?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l1zb6ub'
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
            lanzou: 'https://wwpy.lanzoue.com/b00l1xwemf'
        }
    },
    {
        id: 'koishi',
        title: '恋恋光标',
        description: '用着用着就消失了',
        image: './icon/恋恋光标宣传2.gif',
        links: {
            quark: 'https://pan.quark.cn/s/c952fa6b39fb',
            baidu: 'https://pan.baidu.com/s/1ccQnlAOTsJdO1jgdQiPaMA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l1y20gb'
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
            lanzou: 'https://wwpy.lanzoue.com/b00l1y19mf'
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
            lanzou: 'https://wwpy.lanzoue.com/b00l25xnef'
        }
    },
    {
        id: 'xiaotao',
        title: '碧蓝档案小桃光标',
        description: 'omg是王小桃',
        image: './icon/小桃光标宣传2.gif',
        links: {
            quark: 'https://pan.quark.cn/s/56affc620a29',
            baidu: 'https://pan.baidu.com/s/16l1JBn_gopaqbROpJ7eHYg?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l25xn1c',
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
            lanzou: 'https://wwpy.lanzoue.com/b00l1y2wsf'
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
            lanzou: 'https://wwpy.lanzoue.com/b00l1ywr3a'
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

    // 关闭弹窗（点击关闭按钮）
    closeBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // 恢复滚动
    });

    // 关闭弹窗（点击遮罩层空白处）
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
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
