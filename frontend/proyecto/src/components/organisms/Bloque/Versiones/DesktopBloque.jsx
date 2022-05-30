import React from 'react'
import { Icon } from '../../../atoms/Icon/Icon'
import { Heading } from '../../../atoms/Heading/Heading'
import './DesktopBloque.css'
import { Paragraph } from '../../../atoms/paragraph/Paragraph'

export const DesktopBloque = () => {

    return (
        <div className="desktop-bloque-container">
            <div className="desktop-bloque-container-first">
                <div className='desktop-bloque-container-first-first'>
                    <Paragraph >HOTEL</Paragraph>
                    <Heading variant='base' type='md'  >Hermitage Hotel</Heading>
                </div>
                <div className='desktop-bloque-container-first-second'>
                    <Icon icon="arrowLeft" width="lg" />
                </div>

            </div>
            <div className="desktop-bloque-container-second">
                <div className='desktop-product-icon-ubication'>
                    <div className="desktop-product-icon">
                        <Icon icon="location" width="sm" ></Icon>
                    </div>
                    <div className="desktop-product-ubication">
                        <Paragraph>
                            Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina <br/>
                            A 940 m del centro
                        </Paragraph>
                    </div>
                </div>

                <div className="rating">
                    <div className="desktop-rating-score-first">
                        <div className="desktop-rating-score-text">
                            <Paragraph size="md" variant="secondary">Muy Bueno</Paragraph>
                        </div>
                        <div className="desktop-rating-score-star">
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                        </div>
                    </div>
                    <div className="desktop-rating-score-second
                    ">
                        <Paragraph size="lg" variant="secondary">
                            8
                        </Paragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}


