// resources.js - 资源信息和链接的数据结构
const resources = [
    {
        id: 'scm',
        title: '简易光标制作器scm',
        description: '超级好用的光标编辑器',
        image: './icon/scm宣传.png',
        links: {
            quark: 'https://pan.quark.cn/s/beecfb268264',
            baidu: 'https://pan.baidu.com/s/1JJs5Jnr3lEtm0SerPfbiFA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l1y0s2d',
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
            quark: 'https://niko-quark-link.com',
            baidu: 'https://niko-baidu-link.com',
            lanzou: 'https://niko-lanzou-link.com'
        }
    },
    {
        id: 'xiaotao',
        title: '碧蓝档案小桃光标',
        description: 'omg是王小桃',
        image: './icon/小桃光标宣传2.gif',
        links: {
            quark: 'https://pan.quark.cn/s/beecfb268264',
            baidu: 'https://pan.baidu.com/s/1JJs5Jnr3lEtm0SerPfbiFA?pwd=xkxk',
            lanzou: 'https://wwpy.lanzoue.com/b00l1y0s2d',
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