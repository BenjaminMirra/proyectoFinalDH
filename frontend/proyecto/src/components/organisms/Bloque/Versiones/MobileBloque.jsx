import React from 'react'
import { Icon } from '../../../atoms/Icon/Icon'
import { Heading } from '../../../atoms/Heading/Heading'
import './MobileBloque.css'
import { Paragraph } from '../../../atoms/paragraph/Paragraph'

export const MobileBloque = () => {

    return (
        <div className="mobile-container">
            <div className="mobile-bloque-container-first">
                <div className='mobile-bloque-container-first-first'>
                    <Paragraph >HOTEL</Paragraph>
                    <Heading variant='base' type='md'  >Hermitage Hotel</Heading>
                </div>
                <div className='mobile-bloque-container-first-second'>
                    <Icon icon="arrowLeft" width="lg" />
                </div>

            </div>
            <div className="mobile-bloque-container-second">
                <div className='mobile-product-icon-ubication'>
                    <div className="mobile-product-icon">
                        <Icon icon="location" width="sm" ></Icon>
                    </div>
                    <div className="mobile-product-ubication">
                        <Paragraph>
                            Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina <br/>
                        </Paragraph>
                    </div>
                </div>

                <div className="mobile-rating">
                    <div className="mobile-rating-score-first">
                        <div className="mobile-rating-score-text">
                            <Paragraph size="md" variant="secondary">Muy Bueno</Paragraph>
                        </div>
                        <div className="mobile-rating-score-star">
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                        </div>
                    </div>
                    <div className="mobile-rating-score-second
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


