import styles from './Header.module.scss';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <header className={styles['header']}>
      <h1>Kolor</h1>
      <div className={styles['header__burger-container']}>
        <MenuIcon />
      </div>
    </header>
  )
}