import React,{useState,useEffect} from 'react'
import { InputLabel } from '../../molecules/InputLabel/InputLabel'
import { Heading } from '../../atoms/Heading/Heading'
import { Button } from '../../atoms/Button/Button'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
import { Paragraph } from '../../atoms/paragraph/Paragraph'
import { Outlet, Link } from "react-router-dom";

import './LoginForm.css'

export const LoginForm = () => {
    
     const [medidas,setMedidas]=useState({inputSize:'base',inputSpacerHeight:'xs',buttonWidth:'xs',titleSpacerHeight:'xs'})
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    useEffect(() => {
    function handleResize() {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if(windowWidth < 768){
            setMedidas({inputSize:'sm',inputSpacerHeight:'xs',buttonWidth:'sm',titleSpacerHeight:'xxs'})
        }
        else if(windowWidth>=768 && windowWidth<1366){
            setMedidas({inputSize:'md',inputSpacerHeight:'md',buttonWidth:'md',titleSpacerHeight:'lg'})
        }
        else if(windowWidth>=1366){
            setMedidas({inputSize:'2xl',inputSpacerHeight:'xs',buttonWidth:'xs',titleSpacerHeight:'xs'})

        }
        
    },[windowWidth]);




    const [formValues,setFormValues]=useState({})
    const handleChange=()=>(event)=>{
        const {value,name}=event.target
        setFormValues({...formValues,[name]:value})
    }
    const [errors,setErrors]=useState({email:false,password:false})
    const handleErrorsTrue=(id)=>{
        
        return setErrors((prevValue)=>({...prevValue,[id]:true}))
    }
    const handleErrorsFalse=(id)=>setErrors({...errors,[id]:false})

let userData={}
    useEffect(()=>{
        userData={
            firstname:'Juan',
            lastname:'Perez',
        }
    },[formValues])


    const handleSubmit=(e)=>{
    
        
        e.preventDefault()
        
        if(firstValidation('email','password')){
            localStorage.setItem("userData",JSON.stringify(userData))
            window.location.href='http://localhost:3000/'
        }
        
    }

     function firstValidation(email,password){
        
        let result=true;

        
        if(!checkLength(formValues[email])){
            result=false
            handleErrorsTrue(email)
                setTimeout(function(){
                    handleErrorsFalse(email)
                },1000)
        }
        if(!checkLength(formValues[password])){
            result=false
            handleErrorsTrue(password)
                setTimeout(function(){
                    handleErrorsFalse(password)
                },1000)
        }
        
        if(!formValues[email].toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )){
        result=false
        handleErrorsTrue(email)
                setTimeout(function(){
                    handleErrorsFalse(email)
                },1300)
    }
        return result;
    }
    
    

    function checkLength(input){
        
        let result=true
        if(input==undefined){
            result=false
        }
        else if(input.length<2){
            result=false
        }
        else if(input.length>30){
            result=false;
        }
        // console.log(result);
        return result
    }
    return (<>
        <div className="login">
            <div>
                <Heading title='h2' type='lg' variant='primary' >Iniciar Sesión</Heading>
            </div>
            <SpacerHorizontal height={medidas.titleSpacerHeight}/>
            <form >
                <div className='login-input'>
                <InputLabel value={formValues.email} id='email' name='email' onChange={handleChange()} label={"Email"} size={medidas.inputSize} type={"text"} placeholder={"Ingrese su email"} isError={errors.email} ></InputLabel>
                {errors.email&&<Paragraph variant='error' size='sm' > Un email válido es requerido</Paragraph>}
            </div>
            <SpacerHorizontal height={medidas.inputSpacerHeight} />
            <div className='login-input'>
                <InputLabel  value={formValues.password} id='password' name='password' onChange={handleChange()} label={"Contraseña"} size={medidas.inputSize} type={"password"} placeholder={"Ingrese su contraseña"} isError={errors.password}></InputLabel>
                {errors.password&&<Paragraph variant='error' size='sm' >La contraseña es requerida</Paragraph>}
            </div>
            <div className='boton-register'>
                <Button onClick={handleSubmit} size={medidas.buttonWidth} type='submit' variant={true} label='Ingresar' ></Button>
            </div>
                
            </form>
            <p>
                    ¿No tienes cuenta?
                    <Link to={'/sign-up'}>Crear cuenta</Link >
                </p>

            
            
        </div>







        




        </>
    )
}


