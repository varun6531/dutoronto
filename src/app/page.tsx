import Hero from "../components/Hero"
import styles from "../../styles/globals.css"

export default function Home() {
  return (
    <div>    
      <div className={styles.container}>
        <Hero heading="Delta Upsilon" message="Building Better Men"></Hero>
      </div>
    </div>
  )
}
