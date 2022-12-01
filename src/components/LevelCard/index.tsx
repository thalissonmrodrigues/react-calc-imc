import { Level } from '../../helpers/imc';
import styles from './styles.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    data: Level;
}

export const LevelCard = (props: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: props.data.color}}>
            <div className={styles.levelIcon}>
                {props.data.icon === 'up' && <img src={upImage} alt="upImage" width="30"/>}
                {props.data.icon === 'down' && <img src={downImage} alt="downImage" width="30"/>}
            </div>
            <div className={styles.levelTitle}>{props.data.title}</div>

            {props.data.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {props.data.yourImc} kg/m²</div>
            }

            <div className={styles.levelInfo}>
                <>
                    Imc está entre <strong>{props.data.imc[0]}</strong> e <strong>{props.data.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}