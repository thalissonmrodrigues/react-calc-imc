import { ChangeEvent, useState } from 'react';
import styles from './App.module.css'
import poweredImg from './assets/powered.png';
import leftArrow from './assets/leftarrow.png';
import { LevelCard } from './components/LevelCard';
import { levels, calculateImc, Level } from './helpers/imc';

const App = () => {
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0);
  const [showCard, setShowCard] = useState<Level | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleHeight = (event: ChangeEvent<HTMLInputElement>) => {
    setHeight(parseFloat(event.target.value))
  }

  const handleWeight = (event: ChangeEvent<HTMLInputElement>) => {
    setWeight(parseFloat(event.target.value))
  }

  const handleCalculateButton = () => {
    if (height && weight) {
      setShowCard(calculateImc(height, weight));
      setDisabled(true);
    }
    else {
      alert('Digite todos os campos.')
    }
  }

  const handleBackButton = () => {
    setShowCard(null);
    setHeight(0);
    setWeight(0);
    setDisabled(false);
  }

  return (
    <div>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImg} alt="logo" width="150" />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input 
            type="number" 
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            disabled={disabled}
            value={height > 0 ? height : ''}
            onChange={handleHeight}
          />

          <input 
            type="number" 
            placeholder="Digite a seu peso. Ex: 75.3 (em kg)"
            disabled={disabled}
            value={weight > 0 ? weight : ''}
            onChange={handleWeight}
          />

          <button disabled={disabled} onClick={handleCalculateButton}>Calcular</button>
        </div>
        
        <div className={styles.rightSide}>
          {!showCard &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <LevelCard key={key} data={item} />
              ))}
            </div>
          }

          {showCard &&
            <div className={styles.cardBig}>
              <div className={styles.leftArrow} onClick={handleBackButton}>
                <img src={leftArrow} alt="leftArrow" width="25" />
              </div>
              <LevelCard data={showCard}/>
            </div>
          }
        </div>
      </div>

      <div className={styles.footer}>
        Desenvolvido por <a href="https://www.linkedin.com/in/thalissonmrodrigues/">Thalisson</a>
      </div>
    </div>
  )
}

export default App;