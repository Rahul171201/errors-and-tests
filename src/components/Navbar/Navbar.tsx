import styles from "./Navbar.module.css";

const Navbar = ({ name }: { name: string }) => {
	return (
		<div className={styles.navbar}>
			<h1>{name}</h1>
		</div>
	);
};

export default Navbar;
