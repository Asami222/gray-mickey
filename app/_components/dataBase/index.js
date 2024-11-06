import dedent from "dedent";

const data ={

    contents: [
        {
            id: 'sea',
            link: {
                img: "/article/icon/turtle.svg",
                imgHover: "/article/icon/turtleColor.svg",
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
                img: "/article/icon/bear.svg",
                imgHover: "/article/icon/bearColor.svg",
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
                img: "/article/icon/dress.svg",
                imgHover: "/article/icon/dressColor.svg",
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
                img: "/article/icon/face.svg",
                imgHover: "/article/icon/faceColor2.svg",
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
                img: "/article/icon/tree.svg",
                imgHover: "/article/icon/treeColor.svg",
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
                img: "/menu/face.svg",
                width: 60,
                height: 60,
            },
        ],
        env:{
                effect:[
                    {
                        name: "sea",
                        title: "海の生物",
                        img: "/menu/turtle.svg",
                        width: 80,
                        height: 75,
                    },
                    {
                        name: "land",
                        title: "陸の生物",
                        img: "/menu/bear.svg",
                        width: 80,
                        height: 37,
                    },
                ],
                factor:[
                    {
                        name: "fashion",
                        title: "衣類の廃棄",
                        img: "/menu/dress.svg",
                        width: 38,
                        height: 70,
                    },
                    {
                        name: "forest",
                        title: "森林伐採",
                        img: "/menu/tree.svg",
                        width: 52,
                        height: 70,
                    },
                ],
                
            },
    }
}

export default data;