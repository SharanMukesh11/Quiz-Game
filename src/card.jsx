import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './card.css';
import Logo from "./assets/logo 1.png"
import { MdOutlineTranslate } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { PiPhoneCallFill } from "react-icons/pi";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { sampleapi } from "./sampleapi";
import Mark from "./mark";



export default function Card() {
    const [index, setindex] = useState(0);
    const [data, setdata] = useState(sampleapi[index]);
    const [datas, setdatas] = useState(sampleapi);
    const [click, setclick] = useState(false);
    const [count, setcount] = useState(0);
    // const [lclk,setlclk]=useState(false)
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_arr = [Option1, Option2, Option3, Option4];



    // useEffect(()=>{
    //     fetch("https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple").then((item)=> item.json()).then((apidata)=>setdata(apidata))

    // },[]);
    
    console.log(datas.length);
    console.log(index);
    let numclick = (e, clk) => {
        
        setindex(clk),
            setdata(sampleapi[clk]),
            setclick(true),
            console.log(click),
            e.target.classList.add("corbtn"),
            option_arr.map((option) => {
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                return null
            })
    }

    let nextqus = () => {
        if( index < (datas.length-1) ){
        setindex(index + 1),

            setclick(false),
            setdata(sampleapi[index + 1]),

            option_arr.map((option) => {
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                return null
            })
        }
        


    }
    let prequs = () => {
        if(index > 0 ){
            setindex(index - 1),
            console.log(index),

            setdata(sampleapi[index - 1]),
            setclick(true),
            option_arr.map((option) => {
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                return null
            })
        }
        

    }
    const checkAns = (e, ans) => {
        if (click === false) {
            if (data.correct_answer === ans) {
                console.log(ans)
                e.target.classList.add("correct")
                setclick(true)
                setcount(count + 1)
            }

            else {

                e.target.classList.add("wrong")
                setclick(true);
                if (count > 0) {
                    setcount(count - 1)
                }
            }
        }

    }
    let answer = () => {
        setclick(true);
        option_arr[data.ans - 1].current.classList.add("correct")
    }
    return (
        <>


            <Container fluid>
                <Row className="overall">


                    <Col lg={1} className="left">
                        {datas.map(function (list, ind) {
                            console.log(list)
                            return (<>
                                <Row >

                                    <Col className="squarediv">
                                        <button className="leftbtn" onClick={(e) => { numclick(e, ind) }}>
                                            <div className="square"></div></button>
                                        <h4> &nbsp; {ind + 1} </h4>
                                    </Col>

                                </Row>
                            </>)
                        })}

                    </Col>
                    <Col lg={11} className="right">
                        <Row lg={12} >
                            <Col className="nav1">
                                <h1> Your Score : {count}</h1>
                            </Col>
                            <Col className="nav2">
                                <MdOutlineTranslate className=" option" />
                                <TbBulbFilled className=" option" />
                                <PiPhoneCallFill className=" option" />
                                <PiDotsThreeOutlineVerticalLight className=" option" />
                            </Col>

                        </Row>
                        <Row lg={12} className="loader">
                            <Col lg={3}>
                                <button onClick={prequs} className="btn"
                                > <MdOutlineArrowBackIos className="next" />
                                </button>
                            </Col>
                            <Col lg={5}>
                                <img src={Logo} alt="" className="font" />
                            </Col>
                            <Col lg={1}>
                                <button onClick={nextqus} className="btn">
                                    <MdOutlineArrowForwardIos className="next" />
                                </button>
                            </Col>

                        </Row>

                        <Row lg={12} className="question" >
                            <Col lg={10} className="qus1 ps-5 ">
                                {index + 1}&nbsp;.&nbsp;&nbsp;{data.question}
                            </Col>
                        </Row>
                        <Row lg={12} className="question1">
                            <button className="qus2  1" ref={Option1} onClick={(e) => { checkAns(e, data.incorrect_answers[0]) }}>

                                A : {data.incorrect_answers[0]}

                            </button>
                            <button className="qus2 2" ref={Option2} onClick={(e) => { checkAns(e, data.incorrect_answers[1]) }}>

                                B :{data.incorrect_answers[1]}
                            </button>
                        </Row>
                        <Row lg={12} className="question1">
                            <button className="qus2 3" ref={Option3} onClick={(e) => { checkAns(e, data.incorrect_answers[2]) }}>


                                C :{data.incorrect_answers[2]}
                            </button>
                            <button className="qus2 4" ref={Option4} onClick={(e) => { checkAns(e, data.incorrect_answers[3]) }}>

                                D : {data.incorrect_answers[3]}
                            </button>
                            <button className="btn1" onClick={answer} >
                                Answer
                            </button>
                        </Row>



                    </Col>
                </Row>
            </Container>
            {console.log(index)},
             { datas.length === index ? <Mark score={count}/> : null }
        </>
    )
}