import React from 'react';
import s from './head.module.css';
import Falshe_login from '../falshe_login/falshe_login';
import { NavLink } from 'react-router-dom';

let data_1 = {
    nodes: [
        {
            li_name_1: "S_T_B",
            navLink:"",
            nodes:
                [
                    {
                        li_name_2: "DUDE",
                        nodes:
                            [
                                {
                                    li_name_3: "Kartina X",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "Like",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "Relax",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "Micra 101",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "Micra 102",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "Micra 102 v2",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "HD 301",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "Lait 53d",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "Original",
                                    nodes: [],
                                },
                            ],
                    },
                    {
                        li_name_2: "COMIGO",
                        nodes: [
                            {
                                li_name_3: "Quattro",
                                nodes: [],
                            },
                            {
                                li_name_3: "Duo",
                                nodes: [],
                            },
                            {
                                li_name_3: "Smart +",
                                nodes: [],
                            },
                            {
                                li_name_3: "Remote",
                                nodes: [
                                    {
                                        li_name_4: "Android",
                                        nodes: [],
                                    },
                                    {
                                        li_name_4: "IOS",
                                        nodes: [],
                                    }
                                ],
                            },
                        ],
                    },
                    {
                        li_name_2: "AppS",
                        nodes:
                            [
                                {
                                    li_name_3: "Android",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "IOS",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "SAMSUNG",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "LG",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "APPLE TV",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "ROKU",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "KTV Player",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "Browser",
                                    nodes: [],
                                },
                            ],
                    },
                    {
                        li_name_2: "OLD SHIT",
                        nodes: [
                            {
                                li_name_3: "Slide",
                                nodes: [],
                            },
                            {
                                li_name_3: "IQ",
                                nodes: [],
                            },
                            {
                                li_name_3: "Amino",
                                nodes: [],
                            },
                            {
                                li_name_3: "SIG 220",
                                nodes: [],
                            },
                            {
                                li_name_3: "SIG 340",
                                nodes: [],
                            },
                            {
                                li_name_3: "SIG 540",
                                nodes: [],
                            },
                            {
                                li_name_3: "Telergi",
                                nodes: [],
                            },
                            {
                                li_name_3: "MAXIBOX",
                                nodes: [],
                            },
                        ],
                    },
                ]
        },
        {

            li_name_1: "VOD&STB",
            navLink:"https://translate.google.ru/",
            nodes: []
        },
        {
            li_name_1: "IT",
            navLink:"",
            nodes:
                [
                    {
                        li_name_2: "WINDOWS",
                        nodes:
                            [
                                {
                                    li_name_3: "XP",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "7",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "10",
                                    nodes: [],
                                },
                            ],
                    },
                    {
                        li_name_2: "MAC",
                        nodes:
                            [
                                {
                                    li_name_3: "10",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "11",
                                    nodes: [],
                                },
                                {
                                    li_name_3: "12",
                                    nodes: [],
                                },
                            ],
                    },
                ]
        },
        {
            li_name_1: "Магазины",            
            navLink:"/Oficial_shoop",
            nodes: []
        },
        {
            li_name_1: "Заказы",            
            navLink:"/Order_shoop",
            nodes: []
        },
        {
            li_name_1: "Сегодня",
            navLink:"/today",
            nodes:
                [
                    // {
                    //     li_name_2: "Заказы",
                    //     nodes:
                    //         [
                    //             {
                    //                 li_name_3: "КК",
                    //                 nodes:
                    //                     [
                    //                         {
                    //                             li_name_4: "Замена КК",
                    //                             nodes: [],
                    //                         },
                    //                         {
                    //                             li_name_4: "Оплата по КК",
                    //                             nodes: [],
                    //                         },
                    //                     ],
                    //             },
                    //             {
                    //                 li_name_3: "SEPA",
                    //                 nodes:
                    //                     [
                    //                         {
                    //                             li_name_4: "СтраныeeeeК",
                    //                             nodes: [],
                    //                         },
                    //                     ],
                    //             },
                    //         ],
                    // },
                    // {
                    //     li_name_2: "Техник",
                    //     nodes:
                    //         [
                    //             {
                    //                 li_name_3: "Массовое",
                    //                 nodes: [],
                    //             },
                    //             {
                    //                 li_name_3: "Прошивки",
                    //                 nodes: [],
                    //             },
                    //         ],
                    // },
                    // {
                    //     li_name_2: "Баги",
                    //     nodes: [],
                    // },
                ]
        },
        {
            li_name_1: "Каналы",
            navLink:"",
            nodes: []
        },
    ]
}

const Ul_li = data_1.nodes.map(el_1 =>
    <li><NavLink to={el_1.navLink}>
        {el_1.li_name_1}
    </NavLink>
        {
            el_1.nodes.length !== 0 ?
                <ul className={s.menu_ul_1}>
                    {
                        el_1.nodes.map(el_2 =>
                            <li>
                                <a>{el_2.li_name_2}</a>
                                {
                                    el_2.nodes.li_name_2 !== 0 ?
                                        <ul className={s.menu_ul_2}>
                                            {
                                                el_2.nodes.map(el_3 =>
                                                    <li>
                                                        <a>{el_3.li_name_3}</a>
                                                        {
                                                            el_3.nodes.length !== 0 ?
                                                                <ul className={s.menu_ul_3}>
                                                                    {
                                                                        el_3.nodes.map(el_4 =>
                                                                            <li>
                                                                                <a>{el_4.li_name_4}</a>
                                                                            </li>)
                                                                    }
                                                                </ul>
                                                                : null
                                                        }
                                                    </li>)
                                            }
                                        </ul>
                                        : null

                                }
                            </li>)
                    }
                </ul> : null
        }
    </li>
)

const Head_ul = () => {
    return (

        <div>
            <ul className={s.menu_ul}>
                {Ul_li}
                {/* <li><NavLink to="/Oficial_shoop">shoop </NavLink></li> */}
                {/* <li><NavLink to="/Order_shoop">Order</NavLink></li> */}
            </ul>
            <Falshe_login />
        </div>

    )
}
export default Head_ul;


