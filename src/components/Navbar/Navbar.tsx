
import { useState } from 'react'
import styles from './Navbar.module.css'
import { ContentContainer } from '../ContentContainer'

export const Navbar = () => {
  //creating useState for open menu/ humbuggerMennue
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  // creating variable here
  let navLinksClassName = styles['nav-links']
  let buttonClass = styles['mobile-order-button']

  if (isMenuOpen) {
    navLinksClassName = `${styles['nav-links']} ${styles.open}`
    buttonClass = `${styles['mobile-order-button']} ${styles.open}`
  }

  return (

    //Navbaar section
    <nav className={styles.nav}>
      <ContentContainer className={styles.content}>

        {/* //The first text at the left top of the UI */}
        <h2 className={styles.brand}>Patisserie</h2>

         <div className={styles['nav-right']}>
          <div className={styles['mobile-controls']}>
            {/* Humbugger Menu button*/}
            <button
              type="button"
              className={styles['menu-toggle']}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
            {/* //Order now button at the right top */}
            <div className={buttonClass}>
              <button type="button" className={styles['nav-button']}>
                0666 ORDER NOW
              </button>
            </div>
          </div>

          <div className={navLinksClassName}>
            {/* Link to navigate through the Ui */}
            <a href="#main-picture" className={styles.link}>HOME</a>
            <a href="#menu" className={styles.link}>MENU</a>
            <a href="#mid-content" className={styles.link}>CAKES</a>
            <a href="#card-wholeContent" className={styles.link}>PASTRIES</a>
            <a href="#footer" className={styles.link}>CONTACT</a>

          </div>

          <div className={styles['profile-contact']}>
            <button type="button" className={styles['nav-button']}>
              0666 ORDER NOW
            </button>
          </div>
        </div>
      </ContentContainer>
    </nav>
  )
}
