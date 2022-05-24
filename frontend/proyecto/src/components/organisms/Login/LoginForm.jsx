import React,{useState,useEffect} from 'react'
import { InputLabel } from '../../molecules/InputLabel/InputLabel'
import { Heading } from '../../atoms/Heading/Heading'
import { Button } from '../../atoms/Button/Button'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
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
        const inputArray=['firstname','lastname','email','password','repassword']
        
        e.preventDefault()
        
        // firstValidation('firstname','lastname','email','password','repassword')&& console.log('Bien !!')
        
    }
    return (<>
        <div className="login">
            <div>
                <Heading title='h2' type='md' variant='secondary' >Iniciar Sesión</Heading>
            </div>
            <SpacerHorizontal height={medidas.titleSpacerHeight}/>
            <div>
                <InputLabel value={formValues.email} id='email' name='email' onChange={handleChange()} label={"Email"} size={medidas.inputSize} type={"text"} placeholder={"Ingrese su email"} isError={errors.email} ></InputLabel>
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







        




        </>
    )
}


