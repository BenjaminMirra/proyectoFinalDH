import React,{useState,useEffect} from 'react'
import { InputLabel } from '../../molecules/InputLabel/InputLabel'
import { Heading } from '../../atoms/Heading/Heading'
import { Button } from '../../atoms/Button/Button'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
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
        if(windowWidth < 768){
            setMedidas({inputSize:'sm',inputSpacerHeight:'xs',buttonWidth:'sm',titleSpacerHeight:'xxs'})
        }
        else if(windowWidth<1366){
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



    const handleSubmit=(e)=>{
        
        e.preventDefault()
        
        firstValidation('firstname','lastname','email','password','repassword')&& console.log('Bien !!')
        
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
                },1000)
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
                
            </form>
            <div className="name-surname">
                <div className="name">
                    <InputLabel value={formValues.firstname}  id='firstname' name='firstname' onChange={handleChange()} label={"Nombre"} size={"base"} type={"text"} placeholder={"Ingrese su nombre"} isError={errors.firstname} ></InputLabel>
                </div>
                <SpacerHorizontal height={medidas.inputSpacerHeight} />
                <div className="surname">
                    <InputLabel value={formValues.lastname} id='lastname' name='lastname' onChange={handleChange()} label={"Apellido"} size={"base"} type={"text"} placeholder={"Ingrese su apellido"} isError={errors.lastname} ></InputLabel>
                </div>
            </div>
            <SpacerHorizontal height={medidas.inputSpacerHeight} />
            <div>
                <InputLabel value={formValues.email} id='email' name='email' onChange={handleChange()} label={"Correo electrónico"} size={medidas.inputSize} type={"email"} placeholder={"Ingrese su email"} isError={errors.email} ></InputLabel>
            </div>
            <SpacerHorizontal height={medidas.inputSpacerHeight} />
            <div>
                <InputLabel value={formValues.password} id='password' name='password' onChange={handleChange()} label={"Contraseña"} size={medidas.inputSize} type={"text"} placeholder={"Ingrese su contraseña"} isError={errors.password} ></InputLabel>
            </div>
            <SpacerHorizontal height={medidas.inputSpacerHeight} />
            <div>
                <InputLabel  value={formValues.repassword} id='repassword' name='repassword' onChange={handleChange()} label={"Confirmar Contraseña"} size={medidas.inputSize} type={"text"} placeholder={"Reingrese su contraseña"} isError={errors.repassword}></InputLabel>
            </div>
            <div className='boton-register'>
                <Button onClick={handleSubmit} size={medidas.buttonWidth} type='submit' variant={true} label='Crear cuenta' ></Button>
            </div>
                <p>
                    ¿Ya tienes cuenta?
                    <a href="null"> Iniciar Sesión</a >
                </p>
            

        </div>
    )
}


