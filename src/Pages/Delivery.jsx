import React, { useEffect, useState } from 'react'
import useFormPersist from 'react-hook-form-persist'
import { useForm} from 'react-hook-form'
import styled from 'styled-components'
import Checkbox from '../components/Checkbox'
import Stepper from '../components/Stepper'
import { ButtonPayment, Container, DetailItem, MainSection, MainTitle, SummarySection, TotalPrice, WrapperSection } from '../components/Styled-Component'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import BackLink from '../components/BackLink'

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Counter = styled.p`
  color: ${(props) => props.err ? "#FF8A00" : "#1BD97B"};
  font-size: 14px;
  margin-top: -5px;
  margin-left: 5px;
`

const From = styled.form`
  margin-right: 32px;
`

const ListInput = styled.div`
  display: flex;
  padding-top: 35px;

  .userInput{
    width: 370px;
    padding-right: 70px;
  }

  .dropshipperInput{
    width: 270px;
  }
`

const schema = yup.object({
  email: yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
  phone: yup.string().matches(/^[0-9-+,]*$/).min(6).max(20),
  address: yup.string().max(120).required(),
  dropshipper: yup.boolean(),
  dropshipperName: yup.string().when('dropshipper', {
    is: true,
    then: yup.string().required("Must enter email address")
  }),
  dropshipperPhone: yup.string().matches(/^[0-9-+,]*$/).min(6).max(20).when('dropshipper', {
    is: true,
    then: yup.string().required("Must enter email address")
  }),
}).required();

const Delivery = () => {
    
    const [checked, setChecked] = useState( JSON.parse(window.localStorage.getItem('checkDistributor') || false) )

    const { register, handleSubmit, formState: { errors } , resetField, setValue, watch, getValues} = useForm({ mode: 'onChange',
      resolver: yupResolver(schema)
    });

    useFormPersist('form', {watch, setValue});

    const navigate = useNavigate()

    useEffect(()=>{

      window.localStorage.setItem('checkDistributor', checked);

      if(checked === false){
        resetField("dropshipperName");
        resetField("dropshipperPhone");
        setValue('dropshipper', false);
      } else {
        setValue('dropshipper', true);
      }

      console.log(errors)

    }, [checked, resetField, setValue, errors])

    const onSubmit = (data) => {
      console.log("halo")
      console.log(data)
      navigate("/")
    };

    const handleCheckboxChange = (event) => {
      setChecked(event.target.checked)
    }

    const counter = (data) => {
      return data ? data.length : 0
    }

    const rupiah = (number)=>{
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(number);
    }

    return (
        <Container>

          <Stepper submit={handleSubmit(onSubmit)}></Stepper>
    
          <BackLink>
            Back to cart
          </BackLink>
    
          <WrapperSection>
            <MainSection>
              <From onSubmit={handleSubmit(onSubmit)}>
                  <Head>
                    <MainTitle>Delivery Details</MainTitle>

                    <label>
                      <Checkbox checked={checked} onChange={handleCheckboxChange} />
                      <span style={{ marginLeft: "8px" }}>Send as dropshipper</span>
                    </label>
                  </Head>

                  <ListInput>
                    <div className='userInput'>
                      <Input err={errors.email} type="text" label="Email" name="email" register={register}></Input>

                      <Input err={errors.phone} type="tel" label="Phone Number" name="phone" register={register}></Input>
                  
                      <Input err={errors.address} as="textarea" label="Delivery Address" name="address" register={register}></Input>
                      
                      <Counter err={errors.address}>{counter(getValues('address'))}/120</Counter>
                    </div>

                    <div className='dropshipperInput'>

                      <Input err={errors.dropshipperName}  type="text" check={checked} label="Dropshipper Name" name="dropshipperName" register={register}></Input>

                      <Input err={errors.dropshipperPhone} type="text" check={checked} label="Dropshipper Phone Number" name="dropshipperPhone" register={register}></Input>

                    </div>
                  </ListInput>
              </From>
            </MainSection>

            <SummarySection>
              <div>
                <h2>Summary</h2>
                <p className="item">10 items purchased</p>
              </div>
    
              <div className="detail-payment">
                <DetailItem>
                  <p>Cost of goods</p>
                  <p className="price">Rp 500.000,00</p>
                </DetailItem>

                {
                  checked ? 
                  <DetailItem>
                    <p>Dropshipping Fee</p>
                    <p className="price">Rp 5.900,00</p>
                  </DetailItem>
                  :
                  <></>
                }

                <TotalPrice>
                  <p>Total</p>
                  <p>{checked ? rupiah(505900) : rupiah(500000)}</p>
                </TotalPrice>

                <ButtonPayment onClick={handleSubmit(onSubmit)}>Continue to Payment</ButtonPayment>
              </div>
            </SummarySection>
          </WrapperSection>
  
      </Container>
    )
}

export default Delivery