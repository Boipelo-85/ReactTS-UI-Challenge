
import styles from './Card.module.css'


export const Card = () => {
        return (

                <div>
                        <div className={styles['last-cards']}>
                                <div className={styles['card-4']}>
                                        <h2 className={styles['card-title']}>Holiday</h2>
                                        <h2 className={styles['card-offer']}>- 20% OFF</h2>
                                        <div>
                                                <button className={styles['button-1']}>
                                                        SALES TODAY
                                                </button>
                                        </div>
                                </div>
                                <div className={styles['card-5']}>
                                        <div className={styles['mid-button-2']} >
                                                <button className={styles['button-2']}>
                                                        ORDER NOW
                                                </button>
                                        </div>

                                </div>
                                <div className={styles['card-6']}>
                                        <div className={styles['last-texts']}>

                                                <h2 className={styles['collection-title']}>Holiday Collection</h2>
                                                <h2 className={styles['collection-subtitle']}>while store last here</h2>
                                                <h2 className={styles['collection-tagline']}>Out noww</h2>

                                        </div>
                                        <div className={styles['mid-button-3']}>
                                                <button className={styles['button-3']}>
                                                        ORDER NOW
                                                </button>
                                        </div>

                                </div>
                        </div>
                </div>

        )
}
