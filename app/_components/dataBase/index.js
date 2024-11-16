import dedent from "dedent";

const data ={

    contents: [
        {
            id: 'sea',
            link: {
                img: "/article/icon/turtle.png",
                imgHover: "/article/icon/turtleColor.png",
                title: "海亀と海洋プラスティックについての記事",
                },   
            arrow: {
                    title1: "ウミガメ",
                    title2: "海洋プラスチック",
                },
            top: {
                    title: dedent`saving
                            sea turtles
                            is saving
                            our future.`,
                    subtitle: dedent`プラスチックごみの深刻な
                                    問題に意識を向けましょう`,
                },
        },
        {
            id: 'land',
            color: "linear-gradient(to right, #C3D7E0 0%, #C3D7E0 80%, #95BBDE 100%)",
            link: {
                img: "/article/icon/bear.png",
                imgHover: "/article/icon/bearColor.png",
                title: "北極熊と溶ける氷についての記事",
                },   
            arrow: {
                    title1: "北極熊",
                    title2: "溶ける氷",
                },
            top: {
                    title: dedent`protect the future
                            of polar bears`,
                    subtitle: `北極熊を守れ`,
                },
        },
        {
            id: 'fashion',
            color: "linear-gradient(to right, #E8CAD8 0%, #E8CAD8 80%, #F097CC 100%)",
            link: {
                img: "/article/icon/dress.png",
                imgHover: "/article/icon/dressColor.png",
                title: "ファッションと環境問題についての記事" ,
                },   
            arrow: {
                    title1: "ファッション",
                    title2: "環境問題",
                },
            top: {
                    title: dedent`stay with
                        your
                        favorite 
                        clothes
                        for a long
                        time.`,
                },
        },
        {
            id: 'poverty',
            color: "linear-gradient(to right, #A79380 0%, #A79380 80%, #978350 100%)",
            link: {
                img: "/article/icon/face.png",
                imgHover: "/article/icon/faceColor.png",
                title: "貧困と平等についての記事" ,
                },   
            arrow: {
                    title1: "貧困",
                    title2: "平等",
                },
            top: {
                    title: dedent`save
                        people
                        in poverty, 
                        it also
                        saves our
                        hearts.`,
                    subtitle: dedent`全ての人が
                            最低限の
                            生活を享受できる社会へ`,
                },
        },
        {
            id: 'forest',
            color: "linear-gradient(to right, #A1B394 0%, #A1B394 80%, #6BA69C 100%)",
            link: {
                img: "/article/icon/tree.png",
                imgHover: "/article/icon/treeColor.png",
                title: "森林破壊とオラウータンについての記事",
                },   
            arrow: {
                    title1: "森林破壊",
                    title2: "オラウータン",
                },
            top: {
                    title: dedent`saving the forest means
                            saving all life.`,
                    subtitle: `材料表記を確認してください`,
                },
        },
    ],
    menu: {
        society:[

            {
                name: "poverty",
                title: "貧困",
                img: "/menu/face.png",
                width: 120,
                height: 120,
            },
        ],
        env:{
                effect:[
                    {
                        name: "sea",
                        title: "海の生物",
                        img: "/menu/turtle.png",
                        width: 160,
                        height: 140,
                    },
                    {
                        name: "land",
                        title: "陸の生物",
                        img: "/menu/bear.png",
                        width: 160,
                        height: 74,
                    },
                ],
                factor:[
                    {
                        name: "fashion",
                        title: "衣類の廃棄",
                        img: "/menu/dress.png",
                        width: 76,
                        height: 140,
                    },
                    {
                        name: "forest",
                        title: "森林伐採",
                        img: "/menu/tree.png",
                        width: 104,
                        height: 140,
                    },
                ],
                
            },
    }
}

export default data;