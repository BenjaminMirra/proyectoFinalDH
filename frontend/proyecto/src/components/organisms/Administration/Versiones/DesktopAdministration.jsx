import React from 'react';
import { Button } from '../../../atoms/Button/Button';
import { Heading } from '../../../atoms/Heading/Heading';
import { Input } from '../../../atoms/Input/Input';
import Label from '../../../atoms/Label/Label';
import { InputLabel } from '../../../molecules/InputLabel/InputLabel';
import './DesktopAdministration.css';

export const DesktopAdministration = () => {
    return (
        <div className="desktopAdministration-container">
            <div className="desktopAdministration">
                <Heading title='h4' variant='primary' type='lg' >
                    Crear Alojamiento
                </Heading>
                <div className="desktopAdministracion-add">
                    <div className="desktopAdministracion-add-name-category">
                        <div className="desktopAdministracion-add-name">
                            <InputLabel placeholder="Hotel Hermitage " label='Nombre' disabled={false}>
                            </InputLabel>
                        </div>
                        <div className="desktopAdministracion-add-category">
                            <InputLabel placeholder="Hotel" label='Categoría' disabled={false}>
                            </InputLabel>
                        </div>
                    </div>
                    <div className="desktopAdministracion-add-direccion-ciudad">
                        <div className="desktopAdministracion-add-direccion">
                            <InputLabel placeholder="Av. Colón 1242" label='Dirección' disabled={false}>
                            </InputLabel>
                        </div>
                        <div className="desktopAdministracion-add-ciudad">
                            <InputLabel placeholder="Buenos Aires, Argentina" label='Ciudad' disabled={false}>
                            </InputLabel>
                        </div>
                    </div>
                    <div className="desktopAdministracion-add-descripcion">
                        <div className="desktopAdministracion-add-descripcion-info">
                            <Label label='Descripción'></Label>
                            <textarea placeholder='Escriba aquí' name="" id="descripcion-info" cols="30" rows="10" />
                        </div>
                    </div>
                    <div className="desktopAdministracion-add-latitud-longitud">
                        <div className="desktopAdministracion-add-latitud">
                            <InputLabel placeholder="Latitud" label='Latitud' disabled={false}>
                            </InputLabel>
                        </div>
                        <div className="desktopAdministracion-add-longitud">
                            <InputLabel placeholder="Longitud" label='Longitud' disabled={false}>
                            </InputLabel>
                        </div>
                    </div>


                    <div className="desktopAdministracion-add-agregarAtributo">
                        <Heading title='h4' variant='primary' type='md' >
                            Agregar atributos
                        </Heading>
                        <div className="desktopAdministracion-add-atributo">
                            <div className='desktopAdministracion-add-atributo-parte1'>
                                <InputLabel placeholder="Wifi" label='Nombre' disabled={false}>
                                </InputLabel>
                            </div>
                            <div className='desktopAdministracion-add-atributo-parte2'>
                                <InputLabel placeholder="fa-wifi" label='Ícono' disabled={false}>
                                </InputLabel>
                            </div>
                            <div className='desktopAdministracion-add-atributo-parte3'>
                                <Button label="+" />
                            </div>
                        </div>
                    </div>
                    <div className="desktopAdministracion-add-politicas">
                        <Heading title="h1" variant={"primary"} type="md">
                            Políticas del Producto
                        </Heading>
                        <div className="desktopAdministracion-politicas">
                            <div className="add-politicas-normas">
                                <Heading title='h4' variant='primary' type='md' >
                                    Normas de la Casa
                                </Heading>
                                <Label label='Descripción'></Label>
                                <textarea placeholder='Escriba aquí' name="" id="norma-info" cols="30" rows="10" />
                            </div>
                            <div className="add-politicas-saludyseguridad">
                                <Heading title='h4' variant='primary' type='md' >
                                    Salud y Seguridad
                                </Heading>
                                <Label label='Descripción'></Label>
                                <textarea placeholder='Escriba aquí' name="" id="saludyseguridad-info" cols="30" rows="10" />
                            </div>
                            <div className="add-politicas-cancelacion">
                                <Heading title='h4' variant='primary' type='md' >
                                    Políticas de Cancelación
                                </Heading>
                                <Label label='Descripción'></Label>
                                <textarea placeholder='Escriba aquí' name="" id="cancelacion-info" cols="30" rows="10" />
                            </div>
                        </div>
                    </div>
                    <div className="desktopAdministracion-add-cargarImagen">
                        <Heading title='h4' variant='primary' type='md' >
                            Cargar imágenes
                        </Heading>
                        <div className="desktopAdministracion-add-imagen">
                            <div className='desktopAdministracion-add-imagen-parte1'>
                                <Input placeholder="Insertar https://">
                                </Input>
                            </div>
                            <div className='desktopAdministracion-add-imagen-parte2'>
                                <Button label="+" />
                            </div>
                        </div>
                    </div>
                    <div className='desktopAdminsitracion-add-button'>
                        <Button label="Crear" />
                    </div>
                </div>
            </div>


        </div>
    )
}
