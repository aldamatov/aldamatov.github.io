import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SectionTitle } from '../../section-title/SectionTitle'
import profImg from '../../../assets/img/myportfolio.PNG'
import prankCalc from '../../../assets/img/calculator.PNG'
import toDoList from "../../../assets/img/todolist.PNG"
import TicTacToe from "../../../assets/img/TicTac.PNG"
export const Projects = () => {
    return (
        <div id= "projects" className="py-5 ">
            <SectionTitle title="Projects"/>
            <Container>
                
                <Row className="mt-5">
                <Col md ="6" className="order-1"><a href="aldamatov.com"><img src= {profImg} width="100%" alt="Profile Project" /></a></Col>
                    <Col md="6" className="order-2"><div class="fs-2 fw-bold ">
								My Portfolio website -{" "}
								<a href="https://github.com/aldamatov/Erzhan-Profile-in-React.git" rel="noreferrer" target="_blank"><i class="fab fa-github-alt"></i></a> {" "}
								<a href="https://aldamatov.com" rel="noreferrer"  target="_blank"><i class="fab fa-chrome"></i></a>
							</div>
							<div class="fst-italic fw-bold">Tech: HTML, CSS, Javascript</div>

							<p class="mt-3">
								<strong>About:</strong> Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ratione nesciunt quod itaque molestiae! Earum
								accusantium accusamus, libero corporis sed veniam!
							</p></Col>
                </Row>

				<Row className="mt-5"> 
                    <Col md ="6" className="order-2"><img src={TicTacToe} width="100%" alt="not to do task list"/></Col>
                    <Col md="6" className="order-1"><div class="fs-2 fw-bold ">
								Tic Tac Toe Game -{" "}
								<a href="https://google.com" target="_blank" rel="noreferrer"><i class="fab fa-github-alt"></i></a> {" "}
								<a href="https://google.com" target="_blank" rel="noreferrer"><i class="fab fa-chrome"></i></a>
							</div>
							<div class="fst-italic fw-bold">Tech: HTML, CSS, Javascript</div>
							<p class="mt-3">
								<strong>About:</strong> Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ratione nesciunt quod itaque molestiae! Earum
								accusantium accusamus, libero corporis sed veniam!
							</p></Col>

                </Row>
           <Row className="mt-5">
               <Col  md ="6" className="order-1"><a href="https://prank-calculator.vercel.app/"><img src={prankCalc} width="100%" alt="prank calculator" /></a></Col>
               <Col md="6" className="order-2"><div class="fs-2 fw-bold">
								Prank Calculator 🤣 -{" "}
								<a href="https://github.com/aldamatov/Calculator.git" target="_blank" rel="noreferrer"><i class="fab fa-github-alt"></i></a>{" "}
								<a href="https://prank-calculator.vercel.app" target="_blank" rel="noreferrer"><i class="fab fa-chrome"></i></a>
							</div>
							<div class="fst-italic fw-bold">Tech: HTML, CSS, Javascript</div>

							<p class="mt-3">
								<strong>About:</strong> <br/>
								The prank calculator produces wrong calculations, which fools users. Basically, the idea is to give the opportunity for people to try to make calculation by  themselves. <strong> DO NOT RELY ON CALCULATOR </strong>
							</p></Col>
           </Row>
            </Container>

            
        </div>
    )
}
