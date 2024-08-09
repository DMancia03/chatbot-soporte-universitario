import Image from "next/image";
import styles from "./page.module.css";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.chatbot_title}>
        <h1 className={styles.title}>Bienvenido al Chatbot de Soporte</h1>   
      </div>         
      <Chatbot />
    </main>
  );
}
