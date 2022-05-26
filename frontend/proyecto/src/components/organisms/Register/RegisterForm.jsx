import React,{useState,useEffect} from 'react'
import { InputLabel } from '../../molecules/InputLabel/InputLabel'
import { Heading } from '../../atoms/Heading/Heading'
import { Button } from '../../atoms/Button/Button'
import { Paragraph } from '../../atoms/paragraph/Paragraph'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
import { Outlet, Link } from "react-router-dom";
import './RegisterForm.css'

export const RegisterForm = () => {
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
        if(windowWidth <= 768){
            setMedidas({inputSize:'sm',inputSpacerHeight:'xs',buttonWidth:'sm',titleSpacerHeight:'xxs'})
        }
        else if(windowWidth<=1366){
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
    const [errors,setErrors]=useState({firstname:false,lastname:false,email:false,password:false,repassword:false})
    const handleErrorsTrue=(id)=>{
        
        return setErrors((prevValue)=>({...prevValue,[id]:true}))
    }
    const handleErrorsFalse=(id)=>setErrors({...errors,[id]:false})
    let userData={}
    useEffect(()=>{
        userData={
            firstname:formValues.firstname,
            lastname:formValues.lastname,
        }
    },[formValues])

    const handleSubmit=(e)=>{
        
        e.preventDefault()
        console.log(JSON.stringify(userData) );
        if(firstValidation('firstname','lastname','email','password','repassword')){
            localStorage.setItem("userData",JSON.stringify(userData))
            window.location.href='http://localhost:3000/'
        }
    }
    

    function firstValidation(firstname,lastname,email,password,repassword){
        
        let result=true;

        if(!checkLength(formValues[firstname])){
            result=false
            handleErrorsTrue(firstname)
                setTimeout(function(){
                    handleErrorsFalse(firstname)
                },1000)
        }
        if(!checkLength(formValues[lastname])){
            result=false
            handleErrorsTrue(lastname)
                setTimeout(function(){
                    handleErrorsFalse(lastname)
                },1000)
        }
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
        if(!checkLength(formValues[repassword])){
            result=false
            handleErrorsTrue(repassword)
                setTimeout(function(){
                    handleErrorsFalse(repassword)
                },1000)
        }
        if(formValues[password]!==formValues[repassword]){
            result=false
            handleErrorsTrue(repassword)
            handleErrorsTrue(password)
                setTimeout(function(){
                    handleErrorsFalse(repassword)
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
    return (
        <div className="register">
            
            <div>
                <Heading title='h2' type='md' variant='primary' >Crear Cuenta</Heading>
            </div>
            <SpacerHorizontal height={medidas.titleSpacerHeight}/>
            <form >
                <div className="name-surname">
                <div className="name register-input ">
                    <InputLabel value={formValues.firstname}  id='firstname' name='firstname' onChange={handleChange()} label={"Nombre"} size={"base"} type={"text"} placeholder={"Ingrese su nombre"} isError={errors.firstname} ></InputLabel>
                        {errors.firstname&&<Paragraph variant='error' size='sm' > Un nombre válido es requerido</Paragraph>}
                </div>
                <SpacerHorizontal height={medidas.inputSpacerHeight} />
                <div className="surname register-input ">
                    <InputLabel value={formValues.lastname} id='lastname' name='lastname' onChange={handleChange()} label={"Apellido"} size={"base"} type={"text"} placeholder={"Ingrese su apellido"} isError={errors.lastname} ></InputLabel>
                    {errors.lastname&&<Paragraph variant='error' size='sm' > Un apellido válido es requerido</Paragraph>}
                </div>
            </div>
            <SpacerHorizontal height={medidas.inputSpacerHeight} />
            <div className='register-input'>
                <InputLabel value={formValues.email} id='email' name='email' onChange={handleChange()} label={"Correo electrónico"} size={medidas.inputSize} type={"email"} placeholder={"Ingrese su email"} isError={errors.email} ></InputLabel>
                {errors.email&&<Paragraph variant='error' size='sm' > Un email válido es requerido</Paragraph>}
            </div>
            <SpacerHorizontal height={medidas.inputSpacerHeight} />
            <div className='register-input' >
                <InputLabel value={formValues.password} id='password' name='password' onChange={handleChange()} label={"Contraseña"} size={medidas.inputSize} type={"password"} placeholder={"Ingrese su contraseña"} isError={errors.password} ></InputLabel>
                {errors.password&&<Paragraph variant='error' size='sm' > Una contraseña válida es requerido</Paragraph>}
            </div>
            <SpacerHorizontal height={medidas.inputSpacerHeight} />
            <div className='register-input' >
                <InputLabel  value={formValues.repassword} id='repassword' name='repassword' onChange={handleChange()} label={"Confirmar Contraseña"} size={medidas.inputSize} type={"password"} placeholder={"Reingrese su contraseña"} isError={errors.repassword}></InputLabel>
                {errors.repassword&&<Paragraph variant='error' size='sm' > Las contraseñas no coinciden</Paragraph>}
            </div>
            
                <Button onClick={handleSubmit} size={medidas.buttonWidth} type='submit' variant={true} label='Crear cuenta' ></Button>
            
                
            </form>
            <p>
                    ¿Ya tienes cuenta?
                    <Link to="/login"> Iniciar Sesión</Link >
                </p>
            

        </div>
    )
}


