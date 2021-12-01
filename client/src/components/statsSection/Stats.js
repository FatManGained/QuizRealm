import React, { useState, useEffect } from "react";
import "./stats.css";
import totalRegions from "./AllRegions";
import title from "./realm_title.png"

import region02 from "./regions/region02.png"
import region04 from "./regions/region04.png"
import region05 from "./regions/region05.png"
import region06 from "./regions/region06.png"
import region10 from "./regions/region10.png"
import region11 from "./regions/region11.png"
import region12 from "./regions/region12.png"
import region13 from "./regions/region13.png"
import region14 from "./regions/region14.png"
import region15 from "./regions/region15.png"
import region16 from "./regions/region16.png"
import region21 from "./regions/region21.png"
import region22 from "./regions/region22.png"
import region23 from "./regions/region23.png"
import region24 from "./regions/region24.png"
import region25 from "./regions/region25.png"
import region26 from "./regions/region26.png"
import region33 from "./regions/region33.png"
import region34 from "./regions/region34.png"
import region35 from "./regions/region35.png"
import region36 from "./regions/region36.png"
import region40 from "./regions/region40.png"
import region47 from "./regions/region47.png"
import region51 from "./regions/region51.png"
import region52 from "./regions/region52.png"
import region53 from "./regions/region53.png"
import region54 from "./regions/region54.png"
import region55 from "./regions/region55.png"
import region56 from "./regions/region56.png"
import region57 from "./regions/region57.png"
import region59 from "./regions/region59.png"
import region61 from "./regions/region61.png"
import region62 from "./regions/region62.png"
import region63 from "./regions/region63.png"
import region65 from "./regions/region65.png"
import region66 from "./regions/region66.png"
import region67 from "./regions/region67.png"
import region68 from "./regions/region68.png"
import region69 from "./regions/region69.png"
import region70 from "./regions/region70.png"



function Stats(props) {
    const [activeRegion, setActiveRegion] = useState({
        region: {
            name: "NoRegion",
            holder: "NoHolder",
            points: 0,
            victoryPoints: 0,
            nextLevel: 0,
            image: ""
        }
    });

    const [allRegions, setAllRegions] = useState({ totalRegions })


    useEffect(() => {
        switch (props.regionName) {
            case 'region01':
                return setActiveRegion(allRegions.totalRegions.region01);
            case 'region02':
                return setActiveRegion(allRegions.totalRegions.region02);
            case 'region03':
                return setActiveRegion(allRegions.totalRegions.region03);
            case 'region04':
                return setActiveRegion(allRegions.totalRegions.region04);
            case 'region06':
                return setActiveRegion(allRegions.totalRegions.region06);
            case 'region07':
                return setActiveRegion(allRegions.totalRegions.region07);
            case 'region08':
                return setActiveRegion(allRegions.totalRegions.region08);
            case 'region09':
                return setActiveRegion(allRegions.totalRegions.region09);
            case 'region10':
                return setActiveRegion(allRegions.totalRegions.region10);
            case 'region11':
                return setActiveRegion(allRegions.totalRegions.region11);
            case 'region12':
                return setActiveRegion(allRegions.totalRegions.region12);
            case 'region13':
                return setActiveRegion(allRegions.totalRegions.region13);
            case 'region14':
                return setActiveRegion(allRegions.totalRegions.region14);
            case 'region15':
                return setActiveRegion(allRegions.totalRegions.region15);
            case 'region16':
                return setActiveRegion(allRegions.totalRegions.region16);
            case 'region17':
                return setActiveRegion(allRegions.totalRegions.region17);
            case 'region18':
                return setActiveRegion(allRegions.totalRegions.region18);
            case 'region19':
                return setActiveRegion(allRegions.totalRegions.region19);
            case 'region20':
                return setActiveRegion(allRegions.totalRegions.region20);
            case 'region21':
                return setActiveRegion(allRegions.totalRegions.region21);
            case 'region22':
                return setActiveRegion(allRegions.totalRegions.region22);
            case 'region23':
                return setActiveRegion(allRegions.totalRegions.region23);
            case 'region24':
                return setActiveRegion(allRegions.totalRegions.region24);
            case 'region25':
                return setActiveRegion(allRegions.totalRegions.region25);
            case 'region26':
                return setActiveRegion(allRegions.totalRegions.region26);
            case 'region27':
                return setActiveRegion(allRegions.totalRegions.region27);
            case 'region28':
                return setActiveRegion(allRegions.totalRegions.region28);
            case 'region29':
                return setActiveRegion(allRegions.totalRegions.region29);
            case 'region30':
                return setActiveRegion(allRegions.totalRegions.region30);
            case 'region31':
                return setActiveRegion(allRegions.totalRegions.region31);
            case 'region32':
                return setActiveRegion(allRegions.totalRegions.region32);
            case 'region33':
                return setActiveRegion(allRegions.totalRegions.region33);
            case 'region34':
                return setActiveRegion(allRegions.totalRegions.region34);
            case 'region35':
                return setActiveRegion(allRegions.totalRegions.region35);
            case 'region36':
                return setActiveRegion(allRegions.totalRegions.region36);
            case 'region37':
                return setActiveRegion(allRegions.totalRegions.region37);
            case 'region38':
                return setActiveRegion(allRegions.totalRegions.region38);
            case 'region39':
                return setActiveRegion(allRegions.totalRegions.region39);
            case 'region40':
                return setActiveRegion(allRegions.totalRegions.region40);
            case 'region41':
                return setActiveRegion(allRegions.totalRegions.region41);
            case 'region42':
                return setActiveRegion(allRegions.totalRegions.region42);
            case 'region43':
                return setActiveRegion(allRegions.totalRegions.region43);
            case 'region44':
                return setActiveRegion(allRegions.totalRegions.region44);
            case 'region45':
                return setActiveRegion(allRegions.totalRegions.region45);
            case 'region46':
                return setActiveRegion(allRegions.totalRegions.region46);
            case 'region47':
                return setActiveRegion(allRegions.totalRegions.region47);
            case 'region48':
                return setActiveRegion(allRegions.totalRegions.region48);
            case 'region49':
                return setActiveRegion(allRegions.totalRegions.region49);
            case 'region50':
                return setActiveRegion(allRegions.totalRegions.region50);
            case 'region51':
                return setActiveRegion(allRegions.totalRegions.region51);
            case 'region52':
                return setActiveRegion(allRegions.totalRegions.region52);
            case 'region53':
                return setActiveRegion(allRegions.totalRegions.region53);
            case 'region54':
                return setActiveRegion(allRegions.totalRegions.region54);
            case 'region55':
                return setActiveRegion(allRegions.totalRegions.region55);
            case 'region56':
                return setActiveRegion(allRegions.totalRegions.region56);
            case 'region57':
                return setActiveRegion(allRegions.totalRegions.region57);
            case 'region58':
                return setActiveRegion(allRegions.totalRegions.region58);
            case 'region59':
                return setActiveRegion(allRegions.totalRegions.region59);
            case 'region60':
                return setActiveRegion(allRegions.totalRegions.region60);
            case 'region61':
                return setActiveRegion(allRegions.totalRegions.region61);
            case 'region62':
                return setActiveRegion(allRegions.totalRegions.region62);
            case 'region63':
                return setActiveRegion(allRegions.totalRegions.region63);
            case 'region64':
                return setActiveRegion(allRegions.totalRegions.region64);
            case 'region65':
                return setActiveRegion(allRegions.totalRegions.region65);
            case 'region66':
                return setActiveRegion(allRegions.totalRegions.region66);
            case 'region67':
                return setActiveRegion(allRegions.totalRegions.region67);
            case 'region68':
                return setActiveRegion(allRegions.totalRegions.region68);
            case 'region69':
                return setActiveRegion(allRegions.totalRegions.region69);
            case 'region70':
                return setActiveRegion(allRegions.totalRegions.region70);
            default:
                return setActiveRegion(region05);
        }

    }, [props])


    const [pointsToRegion, setPointsToRegion] = useState({
        region01: 0,
        region02: 0,
        region03: 0,
    })

    const [counterRegion01, setCounderRegion01] = useState(0)


    useEffect(() => {
        const received_region = props.ReceivedRegionName.slice(0, 8)
     
        switch (received_region) {
            case 'region01':
                return setPointsToRegion({ ...pointsToRegion, region01: pointsToRegion.region01 + 1 })
            case 'region02':
                return setPointsToRegion({ ...pointsToRegion, region02: pointsToRegion.region02 + 1 })
            default:
                return console.log("ERROR STATS");

        }
    }, [props.ReceivedRegionName])



    const sendPoint = async () => {
 
        const pointToSend = {
            room: props.room,
            author: props.username,
            pointTo: props.regionName,
            point: [1, 1, 1, 1],
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes,
        }
        await props.socket.emit("send_point", pointToSend);

    };




    return (
        <div className="stats_section">
            <div className="title_container">
                <img src={title} />
            </div>

            <div className="victorypoints_container">
                <div className="victorypoints_top">
                    <div className="victorypoints_top_div"><p>Victory Points</p></div>

                </div>
                <div className="victorypoints_box_container">
                    <div className="victorypoints_box1">
                        <p className="victorypoints_box_points">10</p>
                        <p className="victorypoints_box_team">Billeshög</p>
                    </div>
                    <div className="victorypoints_box2">
                        <p className="victorypoints_box_points">10</p>
                        <p className="victorypoints_box_team">Parkskolan</p>
                    </div>
                    <div className="victorypoints_box3">
                        <p className="victorypoints_box_points">10</p>
                        <p className="victorypoints_box_team">Lunnaskolan</p>
                    </div>
                    <div className="victorypoints_box4">
                        <p className="victorypoints_box_points">10</p>
                        <p className="victorypoints_box_team">Heleneborg</p>
                    </div>
                </div>
            </div>

            <div className="regionstats_container">
                <div className="regionstats_emptyspace"></div>
                <div className="regionstats_border"></div>
                <div className="regionstats_stats">
                    <div className="regionstats_stats_first">
                        <p className="regionstats_stats_first_points_enters">YOUR POINTS ENTERS</p>
                        <p className="regionstats_stats_first_region_name">{activeRegion.name}</p>
                        <p className="regionstats_stats_first_controlled_by">CONTROLLED BY</p>
                        <p className="regionstats_stats_first_controlling_team">PARKSKOLAN</p>
                        <img className="regionstats_stats_first_region" src={activeRegion.image} alt="region01" />
                    </div>
                    <div className="regionstats_stats_second">
                        <p className="regionstats_stats_second_points_in_region">Points in region</p>
                        <p className="regionstats_stats_second_next_level">Next level</p>
                        <p className="regionstats_stats_second_victory_points">Victory Points</p>
                        <p className="regionstats_stats_second_points_region">{pointsToRegion.region01}</p>
                        <p className="regionstats_stats_second_level">13</p>
                        <p className="regionstats_stats_second_victory">{activeRegion.victoryPoints}</p>
                    </div>
                </div>
                <div className="regionstats_border"></div>

            </div>

            <div className="quiz_container">
                <div className="quiz_question_section">
                    <p className="question_title">Question</p>
                    <p className="question_question">Vad var Gustav Vasas riktiga namn?</p>
                </div>
                <div className="quiz_answer_section">
                    <div className="quiz_answer_answerbox1" onClick={sendPoint}><p className="quiz_answer_text">Gustav Eriksson</p></div>
                    <div className="quiz_answer_answerbox2"><p className="quiz_answer_text">Gustav Johansson</p></div>
                    <div className="quiz_answer_answerbox3"><p className="quiz_answer_text">Gustav Månsson</p></div>
                    <div className="quiz_answer_answerbox4"><p className="quiz_answer_text">Gustav Andersson</p></div>
                </div>
            </div>



        </div>

    )
}

export default Stats