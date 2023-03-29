import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ListItem from "@/components/ListItem/ListItem";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className={styles.mainWrapper}>
			<Navbar name="ERRORS AND TEST"></Navbar>
			<div className={styles.bodyWrapper}>
				<h2>ERRORS</h2>
			</div>
			<div className={styles.bodyWrapper}>
				<h2>TEST</h2>
				<ListItem href="/promises" name="PROMISES"></ListItem>
			</div>
		</div>
	);
}
