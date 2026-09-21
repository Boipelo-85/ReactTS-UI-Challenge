import React from 'react'
import { ItemCardImage, ItemCardText, type PropsItems } from './ItemCard'
import styles from './ItemCard.module.css'


//Item props where i called iy from another file(ItemCard.tsx)
type ItemsProps = {

    items: PropsItems[]

}

//Displaying section for all items using map function
export const MenuItem: React.FC<ItemsProps> = ({ items }) => {
    return (
        <section className={styles['cards-section']}>

            <div className={styles['cards-row']}>
                <div className={styles['image-row']}>

                    {/* //Iterating / looping within items go display all of them  */}
                    {/* and also checcking if the lengtht is greater then to iterate */}

                    {/* ItemCardImage section forf iteration */}
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
                    {/* and also checcking if the lengtht is greater then to iterate */}
                    {/*ItemCardText forf iteration */}
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
