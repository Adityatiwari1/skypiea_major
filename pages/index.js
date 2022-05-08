import Sidebar from "../components/Sidebar"
import Main from "../components/Main"

const styles = {
  container: "h-full u-full flex bg--[#fff]"
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Main />
    </div>
  )
}
