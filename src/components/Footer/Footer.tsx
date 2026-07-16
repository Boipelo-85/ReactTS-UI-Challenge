
import { ContentContainer } from '../ContentContainer'
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import CupCake from '../../assets/footer1.png'
import footerImage from '../../assets/footer_card.png'


export const Footer = () => {
  return (

    <footer>
      <ContentContainer className={styles['footer-content']}>
        <div className={styles['footer-left']}>
          <img src={CupCake} alt='cupcakes' className={styles['cup-style']} />
        </div>

        <div className={styles['footer-middle']}>
         <img src={footerImage} alt="footer image card thats appreciate support" className={styles['cup-style']}/>
        </div>
        
        <div className={styles['footer-right']}>
          <h2 style={{fontFamily:'Dancing Script'}}>Patisserie de Pâte </h2>
          <div className={styles['icons']}>
            <a href="https://www.facebook.com/thecakebakeshop" title="The Cake Bake Shop® on Facebook" target="_blank" >
              <FaFacebook className={styles['icon1']} />
            </a>
            <a href="https://instagram.com/thecakebakeshop" title="The Cake Bake Shop® on Instagram" target="_blank">
              <FaInstagram className={styles['icon2']} />
            </a>
            <a  href="https://www.pinterest.com/thecakebakeshop" title="The Cake Bake Shop® on Pinterest" target="_blank" >
              <FaPinterest className={styles['icon3']} />
            </a>   
          </div>
          <p >Follow us on all socila media platform</p>
        </div>
      </ContentContainer>
    </footer>

  )
}
