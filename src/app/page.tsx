declare module '*.css';
import Hero from "../components/Hero"
import styles from "../../styles/globals.css"
import Slider from "@/components/Slider"
import { SliderData } from "@/components/SiiderData"

export default function Home() {
  return (
    <div>    
      <div className={styles.container}>
        <Hero heading="Delta Upsilon Toronto Chapter" message="Building Better Men"></Hero>
        <Slider slides={SliderData}></Slider>
      </div>
    </div>
  )
}
