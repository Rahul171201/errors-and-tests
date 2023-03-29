import Navbar from "@/components/Navbar/Navbar";
import { Suspense, useEffect, useState } from "react";
import styles from "../styles/Promise.module.css";

const myPromise = new Promise((res, rej) => {
	setTimeout(() => {
		res("done successfully");
	}, 3000);
});

const Promises = () => {
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		myPromise.then(
			(result) => {
                setLoading(false);
				console.log(result, "my result");
			},
			(error) => {
                setLoading(false);
				console.log(error, "error hai bhai");
                throw new Error('Error hai rahul');
			}
		);
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className={styles.mainWrapper}>
			<Suspense fallback={<div>Loading</div>}>
				<Navbar name="PROMISES"></Navbar>
				<div className={styles.bodyWrapper}>ok</div>
			</Suspense>
		</div>
	);
};

export default Promises;
