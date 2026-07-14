import React from 'react'

import { Text } from '../Texts/Text'
import styles from './Navbar.module.css'
import { ContentContainer } from '../ContentContainer'


export const Navbar = () => {
  return (  

          < nav >

                <ContentContainer className={styles.content}>

                
                    <Text variant={'h2'} style={{color:'#000',margin : 0,fontFamily:'Alex Brush',fontStyle:'italic',padding: '3px',fontSize:'45px',fontWeight:'bold'}}>Patisserie</Text>
                
                <div className={styles['nav-right']}>


                <div className={styles['nav-links']}>
                        <a href='#home' className={styles['link']}>HOME</a>
                        <a href='#menu' className={styles['link']}>MENU</a>
                        <a href='#cakes' className={styles['link']}>CAKES</a>
                        <a href='#pastries' className={styles['link']}>PASTRIESE</a>
                        <a href='#contact' className={styles['link']}>CONTACT</a>
                </div>
                <div className={styles['profile-contact']}>

                          <button className={styles['nav-button']}> 0666 ORDER NOW </button>
                </div>

                </div>

                </ContentContainer>
               
          
    </nav>
  )
}
