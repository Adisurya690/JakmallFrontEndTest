import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    width: 350px;
    position: relative;
    height: 1000px;
    background-color: #fff;
    margin: 50px auto;
    border-radius: 5px;
    box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
    font-family: 'Montserrat';
    /* padding: 40px; */
    
    @media (min-width: 768px) {
        width: 1020px;
        height: 480px;
        background-color: #fff;
        margin: 50px auto; 
        padding: 40px;
    }
`

export const BackLink = styled(NavLink)`
    display: flex;
    align-items: center;
    color: black;
    cursor: pointer;
    font-size: 12px;

    p{
        margin-left: 6px;
    }

    @media (min-width: 768px) {
        font-size: 16px;
        p{
        margin-left: 10px;
        }
    }
`

export const WrapperSection = styled.div`
    width: 1060px;
    height: 458px;
    margin-top: ${(props) => props.top ? props.top : "20px"};

    @media (min-width: 768px) {
        display: flex;
        width: 1060px;
        height: 458px;
        margin-top: ${(props) => props.top ? props.top : "20px"};
        justify-content: space-between;
    }

`

export const MainSection = styled.div`
    width: 100%;
    margin-top: ${(props)=> props.top ? props.top : "0"};
`

export const MainTitle = styled.h1`
    font-size: 18px;
    font-weight: 700;
    color: #FF8A00;

    @media (min-width: 768px) {
        font-size: 36px;
    }

`

export const SummarySection = styled.div`
    width: 340px;
    height: 460px;
    border-left: 1.5px solid rgba(255, 138, 0, 0.3);
    padding: 10px 15px 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2{
        font-size: 24px;
        color: #FF8A00;
        font-weight: 700;
    }

    .item {
        font-size: 14px;
        font-weight: 400;
        margin-top: 10px;
    }  

    @media (min-width: 768px) {
        width: 340px;
        height: 460px;
        border-left: 1.5px solid rgba(255, 138, 0, 0.3);
        padding: 10px 15px 0 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2{
            font-size: 24px;
            color: #FF8A00;
            font-weight: 700;
        }

        .item {
            font-size: 14px;
            font-weight: 400;
            margin-top: 10px;
        } 
    }
`
export const DetailItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;

    .price{
        font-weight: bold;
    }
`

export const TotalPrice = styled.div`
    font-size: 24px;
    color: #FF8A00;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
`
export const ButtonPayment = styled.button`
    width: 260px;
    height: 60px;
    padding: 20px 25px;
    background-color: #FF8A00;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 500;
`

export const ShipPayment = styled.div`
    margin-top: 20px;
    font-size: 14px;
    font-weight: 500;

    span{
        display:block;
        width:80px;
        border-top: 2px solid #D8D8D8;
    }

    div{
        margin-top: 20px;
    }

    .detail{
        color: #1BD97B;
        font-size: 16px;
    }
`