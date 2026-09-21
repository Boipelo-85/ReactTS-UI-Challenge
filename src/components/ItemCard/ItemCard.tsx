import React from 'react'

import {Text} from '../Texts/Text'
import styles from './ItemCard.module.css'

//Props for the items
export type PropsItems = {

    name:string,
    description : string,
    imgLink : string
    
}

//Image section where i declared images
export const ItemCardImage : React.FC<PropsItems> = ({imgLink}) => {

  return (
    
    <div className={styles['whole-pictures']}>
    
         <div className={styles['mid-pictures']}> 
              <img className={styles['image']} src={imgLink} alt={'the picture of product :  {$description}'} />
        </div>
    
    </div>
       
  )

}

//Text section where i declared text that are found under the images
export const ItemCardText : React.FC<PropsItems> = ({name,description}) => {

  return (
    
    <div className={styles['parent']}>
    
      <div className={styles['mid-texts']}>
        <article>
          {/* // Name and the description of the image */}
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
