/* eslint-disable require-jsdoc */
// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/sections/ContactForm";
import MetaTags from "@/components/MetaTags";
import SideHeader from "@/components/sideHeader";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/Contact.module.scss";

// UTILS //

// IMAGES //
import Delete from "@/../public/img/delete.png";

// DATA //

import { getAllContact } from "@/services/ContactService";
import { deleteContact } from "@/services/ContactService";

/** Contact Page */
export default function ContactPage({ firstName }) {
	const [contact, setContact] = useState([]);

	// useEffect
	useEffect(() => {
		async function fetchContact() {
			const data = await getAllContact();
			setContact(data);
		}

		fetchContact();
	}, []);
	console.log(contact, "contact");

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Header */}
			<Header />
			<SideHeader />

			{/* Page Content starts here */}
			<main className={styles.BlogPage}>
				<div className={`${styles.title_addEntery_btn}`}>
					<div className={`${styles.title}`}>
						<h2>Contacts</h2>
					</div>
				</div>
				<div className={`${styles.show_data} ${styles.show_data_bg}`}>
					<div className={`${styles.field}`}>
						<h4>First Name</h4>
					</div>
					<div className={`${styles.field}`}>
						<h4>Last Name</h4>
					</div>
					<div className={`${styles.field}`}>
						<h4>Email</h4>
					</div>
					<div className={`${styles.field}`}>
						<h4>Number</h4>
					</div>
					<div className={`${styles.field}`}>
						<h4>msg</h4>
					</div>
					<div className={`${styles.field}`}>
						<h4>Action</h4>
					</div>
				</div>
				<>
					{contact.contact?.map((item, ind) => {
						return (
							<div className={`${styles.show_data}`} key={ind}>
								<div className={`${styles.field}`}>
									<p>{item.firstName}</p>
								</div>
								<div className={`${styles.field}`}>
									<p>{item.lastName}</p>
								</div>
								<div className={`${styles.field}`}>
									<p>{item.email}</p>
								</div>
								<div className={`${styles.field}`}>
									<p>{item.number}</p>
								</div>
								<div className={`${styles.field}`}>
									<p>{item.msg}</p>
								</div>
								<div className={`${styles.field}`}>
									<div className={`${styles.action}`}>
										<div
											className={`${styles.action_img}`}
											// onClick={() => console.log(`Editing ${item.title}`)}
											onClick={() => deleteContact({ firstName: item.firstName })}
										>
											<img src={Delete.src} alt="Edit" />
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
