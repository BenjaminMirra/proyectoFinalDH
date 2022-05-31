import React from 'react'
import { Icon } from '../../../atoms/Icon/Icon'
import { Heading } from '../../../atoms/Heading/Heading'
import './TabletBloque.css'
import { Paragraph } from '../../../atoms/paragraph/Paragraph'

export const TabletBloque = () => {

    return (
        <div className="tablet-bloque-container">
            <div className="tablet-bloque-container-first">
                <div className='tablet-bloque-container-first-first'>
                    <Paragraph >HOTEL</Paragraph>
                    <Heading variant='base' type='md'  >Hermitage Hotel</Heading>
                </div>
                <div className='tablet-bloque-container-first-second'>
                    <Icon icon="arrowLeft" width="lg" />
                </div>

            </div>
            <div className="tablet-bloque-container-second">
                <div className='tablet-product-icon-ubication'>
                    <div className="tablet-product-icon">
                        <Icon icon="location" width="sm" ></Icon>
                    </div>
                    <div className="tablet-product-ubication">
                        <Paragraph>
                            Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina <br/>
                            A 940 m del centro
                        </Paragraph>
                    </div>
                </div>

                <div className="rating">
                    <div className="tablet-rating-score-first">
                        <div className="tablet-rating-score-text">
                            <Paragraph size="md" variant="secondary">Muy Bueno</Paragraph>
                        </div>
                        <div className="tablet-rating-score-star">
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                            <Icon icon="star" width="xs" onClick={() => { }}></Icon>
                        </div>
                    </div>
                    <div className="tablet-rating-score-second
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


