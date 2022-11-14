import Footer from '../../components/Footer/Footer'
import { Outlet } from "react-router-dom";
import styles from './Frame.module.css'

export default function Frame () {
  return (
    <div className={styles.container}>
      <Outlet/>
      <Footer/>
    </div>
  )
}