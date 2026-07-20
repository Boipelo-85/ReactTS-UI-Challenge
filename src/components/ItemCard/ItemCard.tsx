import React from 'react'

import {Text} from '../Texts/Text'
import styles from './ItemCard.module.css'

export type PropsItems = {

    name:string,
    description : string,
    imgLink : string
}

export const ItemCardImage : React.FC<PropsItems> = ({imgLink}) => {

  return (
    
    <div className={styles['whole-pictures']}>
    
         <div className={styles['mid-pictures']}> 
              <img className={styles['image']} src={imgLink} alt={'the picture of product :  {$description}'} />
        </div>
    
    </div>
       
  )

}

export const ItemCardText : React.FC<PropsItems> = ({name,description}) => {

  return (
    
    <div className={styles['parent']}>
    
      <div className={styles['mid-texts']}>
        <article>
              <Text variant={'h2'} style={{color:'black',fontFamily: '"Courier New", Courier, monospace',fontWeight: 'bold'}}>{name}</Text>
              <Text variant={'h2'}  style={{ color:'black', fontSize: '5px' }}>{description}</Text>

              <div className={styles['button-style']}>
              
                <button className={styles['buttons']}>
                  Order now.
              </button>

              </div>
            
          
        </article>
        </div>
    
    </div>
       
  )

}
