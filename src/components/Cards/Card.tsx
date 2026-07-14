
import styles from './Card.module.css'


export const Card = () => {
        return (

                <div>
                        <div className={styles['last-cards']}>
                                <div className={styles['card-4']}>
                                        <h2 style={{ paddingBottom: '5px', fontSize: '50px' ,fontFamily:'Alex Brush'}}> Holiday</h2>
                                        <h2 style={{ padding: '20px', fontFamily:'Syne Mono' , fontWeight: 'bold'}}> - 20% OFF </h2>
                                        <div>
                                                <button className={styles['button-1']}>
                                                        SALES TODAY
                                                </button>
                                        </div>
                                </div>
                                <div className={styles['card-5']}>
                                        <div className={styles['mid-button']} >
                                                <button className={styles['button-2']}>
                                                        ORDER NOW
                                                </button>
                                        </div>

                                </div>
                                <div className={styles['card-6']}>
                                        <div className={styles['last-texts']}>

                                                <h2 style={{color: '#fdfdfd', fontFamily:'Alex Brush',fontSize: 25,fontWeight:'bold'}}> Holiday Collection </h2>
                                                <h2 style={{color: '#fdfdfd',fontSize:6}}> whil store last here</h2>
                                                <h2 style={{color: '#fdfdfd',fontFamily: 'Zhi Mang Xing',fontSize:6}}> Out noww </h2>

                                        </div>
                                        <div>
                                                <button className={styles['button-3']}>
                                                        ORDER NOW
                                                </button>
                                        </div>

                                </div>
                        </div>
                </div>

        )
}
