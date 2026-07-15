import { useState } from 'react'


import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Text } from './components/Texts/Text'

import { Footer } from './components/Footer/Footer'
import { MenuItem } from './components/ItemCard/MenuItem'
import cupCakes from './assets/first-pic.jpg'
import secCupCakes from './assets/second-pic.jpg'
import macaroins from './assets/third-picture.jpg'
import mainLogo from './assets/logo.png'
import { Card } from './components/Cards/Card'


function App() {

  const [itemCakes] = useState([

        {name:'Custom Cake',description : 'Custom cakes in South Africa are special because they combine artistry with , flavor—bakeries across the country design cakes',imgLink : cupCakes},
        {name:'Macaroins',description : 'Custom cakes in South Africa are special because they combine artistry with , flavor—bakeries across the country design cakes',imgLink : secCupCakes},
        {name:'CupCakesCollection',description : 'Custom cakes in South Africa are special because they combine artistry with , flavor—bakeries across the country design cakes',imgLink : macaroins}
        
  ])

  return (
    
    <div id='app-container'>
      <div id='scrollable'>
        <Navbar />

        <div id='main-picture'>

          <div id='main-texts'>
            <Text variant={'h2'} style={{ color: 'black', fontFamily: 'Alex Brush', fontWeight: 'bold', textAlign: 'center', paddingTop: '10px', fontStyle: 'italic', fontSize: '70px',marginBottom: '0px' }}>Delight in </Text>
            <Text variant={'h2'} style={{ color: '#131212', padding: '2px',paddingTop: '5px',fontFamily: 'Century Gothic'}}>PATIICU IN FUERY BITE!</Text>
            <div>

              <button id='picture-button'>
                ORDER NOW
              </button>

            </div>

          </div>

        </div>
        <div id='middle-content'>
            <Text variant={'h2'} style={{color:'#222222',fontFamily: "Exo, sans-serif",fontSize:30}}> Delight in every Bite! </Text>
        </div>

        <div id='mid-content'>

            <MenuItem items={itemCakes}/>

        </div>

            <div id='card-wholeContent'>
                <img src={mainLogo} alt={' main logo here '}/>
                <div id='card-content'>
                    <Card />
                </div>
            </div>        

      </div>

      <Footer />

    </div>
  )
}

export default App
