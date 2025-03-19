// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import MainWrapperComponent from "@/sections/MainWrapperComponent";

// SECTIONS //

// PLUGINS //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //

// DATA //

gsap.registerPlugin(ScrollTrigger);

/** Home Page */
export default function HomePage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			{/* <Header /> */}

			{/* Page Content starts here */}
			<main className={`${styles.HomePage} lines_bg`}>
				<MainWrapperComponent gsap={gsap} ScrollTrigger={ScrollTrigger} />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			{/* <Footer /> */}
		</div>
	);
}
