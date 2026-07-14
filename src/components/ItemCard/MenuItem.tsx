import React from 'react'
import { ItemCardImage, ItemCardText, type PropsItems } from './ItemCard'
import styles from './ItemCard.module.css'



type ItemsProps = {

    items: PropsItems[]

}


export const MenuItem: React.FC<ItemsProps> = ({ items }) => {
    return (
        <section className={styles['cards-section']}>
            <div className={styles['cards-row']}>
                <div className={styles['image-row']}>

                    {items && items.length > 0 && items.map(product => (
                        <div className={styles['card-column']}>
                            <div className={styles['image-card']}>
                                <ItemCardImage
                                    imgLink={product.imgLink}
                                    name={product.name}
                                    description={product.description}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles['cards-row']}>
                <div className={styles['text-row']}>

                    {items && items.length > 0 && items.map(product => (
                        <div  className={styles['card-column']}>
                            <div className={styles['texts-card']}>

                                <ItemCardText
                                    imgLink={product.imgLink}
                                    name={product.name}
                                    description={product.description}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
