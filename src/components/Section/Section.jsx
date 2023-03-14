import React from 'react';
import './Section.css';
import { Slide } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <div className='sec-Container' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <Slide direction="up" delay={0.1} cascade damping={0.1}>
            <div className='itemText'   >
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            </Slide>

            <div className='Button'>
                <Slide direction="up" delay={0.1} cascade damping={0.1}>
                <div className='buttonGroups'>
                    <div className='leftBtn'>
                        {leftBtnText}
                    </div>

                    {/* {title === "Accessories" ? <div className='leftBtn rightBtn' style={{display:'none'}}>
                        {rightBtnText}
                    </div> : <div className='leftBtn rightBtn'>
                        {rightBtnText}
                    </div> } */}
                    {rightBtnText &&
                        <div className='leftBtn rightBtn'>
                            {rightBtnText}
                        </div>
                    }

                </div>
                </Slide>
                {title === "Accessories" ?
                    <div>
                        <span className="m_scroll_arrows unu black"></span>
                        <span className="m_scroll_arrows doi black"></span>
                        <span className="m_scroll_arrows trei black"></span>
                    </div>
                    :
                    <div >
                        <span className="m_scroll_arrows unu"></span>
                        <span className="m_scroll_arrows doi"></span>
                        <span className="m_scroll_arrows trei"></span>
                    </div>
                }

            </div>
        </div>
    );
}

export default Section;

