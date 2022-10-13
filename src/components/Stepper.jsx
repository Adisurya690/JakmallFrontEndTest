import React, { useEffect, useState } from 'react'
import {HiChevronRight} from 'react-icons/hi'
import { NavLink, useLocation} from 'react-router-dom'
import styled from 'styled-components'

const StepperContainer = styled.div`
    width: 300px;
    height: 45px;
    background-color: #FFFAE6;
    border-radius: 35px;
    position: absolute;
    top: -35px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    margin: 0 auto 0;
    align-items: center;

    .arrow {
        font-size: 11px;
        color: #FF8A00;
    }

    @media (min-width: 768px) {
        width: 500px;
        height: 70px;

        .arrow {
            font-size: 20px;
            color: #FF8A00;
        }
        
    }
`

const Steps = styled(NavLink)`
    display: flex;
    align-items: center;
    color: #FF8A00;
    font-weight: 500;
    padding: 0 15px 0 15px;
    font-size: 10px;

    div{
        width: 18px;
        height: 18px;
        background-color: ${(props) => props.className === 'active' ? "#FF8A00" : "#FF8A004A"};
        color: ${(props) => props.className === 'active' ? "white" : "#FF8A00"};
        border-radius: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-right: 5px;
    }

    @media (min-width: 768px) {
        padding: 0 24.5px 0 24.5px;
        font-size: 16px;

        div{
            width: 30px;
            height: 30px;
            text-align: center;
            display: flex;
            margin-right: 10px;
        }
    }
`

const Stepper = ({submit}) => {

    const location = useLocation();

    const [deleveryActive, setDeleveryActive] = useState(false)
    const [paymentActive, setPaymentActive] = useState(false)
    const [finishyActive, setFinishActive] = useState(false)

    useEffect(()=>{
        if(location.pathname === "/"){
            setDeleveryActive(true)
        } else if (location.pathname === "/payment") {
            setDeleveryActive(true)
            setPaymentActive(true)
        } else if (location.pathname === "/finish"){
            setDeleveryActive(true)
            setPaymentActive(true)
            setFinishActive(true)
        }
        
    },[location.pathname])

    return (
        <StepperContainer>

            <Steps to="/" className={deleveryActive ? "active" : "diactive"}>
                <div>
                    <span>1</span>
                </div>
                <p>
                    Delivery
                </p>
            </Steps>
            
                <HiChevronRight className='arrow'/>
            
            <Steps to="/payment" onClick={submit} className={paymentActive ? "active" : "diactive"}>
                <div>
                    <span>2</span>
                </div>
                <p>
                    Payment
                </p>
            </Steps>
            
                <HiChevronRight className='arrow'/>
            
            <Steps to="/finish" onClick={submit} className={finishyActive ? "active" : "diactive"}>
                <div>
                    <span>3</span>
                </div>
                <p>
                    Finish
                </p>
            </Steps>
        
        </StepperContainer>
    )

}

export default Stepper