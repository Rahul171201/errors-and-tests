import styles from "./ListItem.module.css";
import Link from "next/link";

const ListItem = ({href, name} : {href: string, name: string}) => {
	return (
		<Link href={href} className={styles.link}>
			<div className={styles.listItem}>{name}</div>
		</Link>
	);
};

export default ListItem;
