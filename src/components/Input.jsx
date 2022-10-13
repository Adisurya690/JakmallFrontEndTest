import React from 'react'
import styled from 'styled-components'

// const { register } = useFormContext();
const ContainerInput = styled.div`
    width: 100%;
    /* padding: 28px 15px 10px 15px;
    border: 1px solid #CCCCCC; */
    position: relative;
    margin-bottom: 10px;
`
const StyledLabel = styled.label`
    position: absolute;
    top: 0;
    color: ${(props) => props.check === false ? "#CCCCCC" : "black"};;
    font-size: 16px;
    font-weight: 400;
    ${(props) => props.check === false ? "pointer-events: none" : ""};
    transform: translate(20px, 20px);
    transition: all 400ms ease-in-out;
`
const StyledInput = styled.input`
    width: 100%;
    display: block;
    background: transparent;
    border: none;
    outline: none;
    color: black;
    padding: 28px 15px 10px 15px;
    border: 1px solid #CCCCCC;
    font-size: 16px;
    ${(props) => props.check === false ? "pointer-events: none" : ""};

    &:focus + ${StyledLabel}, &:required:valid + ${StyledLabel} {
        color: ${(props) => props.err ? "#FF8A00" : "#1BD97B"};
        font-size: 13px;
        transform: translate(15px, 10px);
    }

    &:focus, &:required:valid {
        border: 1px solid ${(props) => props.err ? "#FF8A00" : "#1BD97B"};
    }
`

const TextArea = styled(StyledInput).attrs({as: "textarea"})`
    height: 90px;
`

const Input = ({err, check, name, type, label, register, as}) => (
    
  
    <ContainerInput>
        {as ? 
            <TextArea err={err} id={name} type={type} {...register(name)} required></TextArea>
            :
            <StyledInput check={check} err={err} id={name} type={type} {...register(name, {required: true})} required ></StyledInput>
        }
        <StyledLabel check={check} htmlFor={name}>{label}</StyledLabel>
    </ContainerInput>

)

export default Input