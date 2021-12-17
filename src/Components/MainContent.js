import React from 'react'
import styled from 'styled-components';
import CtaButton from './CtaButton';
import Navigation from './Navigation';
import SmallHeading from './SmallHeading';
import smoke from '../img/smoke.png';

function MainContent() {
    return (
        <MainContentStyled >
            <Navigation />
            <div className="content">
                <div className="left">
                    <SmallHeading title={'Work in Progress.'} identifier={'Before'} />
                    <h1>
                        Conrad Maré
                        <span className='GradientText'>Web Developer</span> 
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="btns-con">
                        <CtaButton name={'discover more'} />
                        <CtaButton name={'get help'} />
                    </div>
                </div>
                <div className="right">
                    <img src={smoke} alt="" />
                </div>
            </div>
        </MainContentStyled >
    )
}


const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    .content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        width: 100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.8rem 0;
            }
            .btns-con{
                margin-top: 3rem;
            }
        }

        .right{
            img{
                position: absolute;
                right: -11%;
                bottom: -1%;
                width: 40%;
                opacity: 0.7;
            }
        }
    }
`;
export default MainContent;
