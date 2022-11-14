import Footer from '../../components/Footer/Footer'
import { Outlet } from "react-router-dom";
import styles from './Frame.module.css'
import GitLink from '../../components/GitLink/GitLink'

export default function Frame () {
  return (
    <div className={styles.container}>
      <GitLink/>
      <Outlet/>
      <Footer/>
    </div>
  )
}