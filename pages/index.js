// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //
import Wave from "../public/img/home/wave.png";
import WaterDrop from "../public/img/home/water_drap.png";
import Hand from "../public/img/home/hand.png";
import Child from "../public/img/home/child_img.png";
import IntroBanner from "../public/img/home/intro_banner.jpg";
import Logo from "../public/img/home/header_logo.svg";
import IntroLogo from "../public/img/home/intro_logo.gif";

// DATA //

/** Home Page */
export default function HomePage() {
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setFadeOut(true);
		}, 2000); // 2 seconds

		return () => clearTimeout(timer);
	}, []);
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Librozol-Campaign"}
				Desc={"Librozol Campaign"}
				OgImg={""}
				Url={"/"}
			/>

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<section className={`${styles.section_1}`}>
					<div
						className={`${styles.intro_banner} ${
							fadeOut ? styles.introBannerFade : ""
						}`}
					>
						<div className={`${styles.header}`}>
							<img src={Logo.src} className="img-responsive" alt="banner" />
						</div>
						<img src={IntroBanner.src} className="img-responsive" alt="banner" />
						<div className={`${styles.intro_logo}`}>
							<img src={IntroLogo.src} className="img-responsive" alt="banner" />
						</div>
					</div>
					<div className={`${styles.flow_animation}`}>
						<div className={`${styles.step_1}`}>
							<video autoPlay muted loop>
								<source src="../img/home/Dvideo1.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</section>
				<section className={`${styles.section_2}`}>
					<div className={`${styles.hand}`}>
						<img src={Hand.src} className="img-responsive" alt="wave" />
					</div>
					<div className={`${styles.wave}`}>
						<img src={Wave.src} className="img-responsive" alt="wave" />
					</div>
					<div className={`${styles.water_title}`}>
						<div className={`${styles.water_drop}`}>
							<img src={WaterDrop.src} className="img-responsive" alt="wave" />
						</div>
						<div className={`${styles.title} text_center pt_20`}>
							<h2>
								3.4 trillion litres of water <br className="hidden_xs" /> is lost to
								leaks every
								<br className="hidden_xs" /> year.
							</h2>
						</div>
					</div>
					<div className={`${styles.lost_water}`}>
						<h6>1 Source: SPML Water Loss Management</h6>
						<div className={`${styles.hand_box}`}>
							<h3>
								With every pledge, <span>FlowGuard® Plus</span> will save 1500 litres of
								water.
							</h3>
						</div>
					</div>
				</section>
				<section className={`${styles.section_3}`}>
					<div className="container">
						<Form />
					</div>
				</section>
				<section className={`${styles.section_4}`}>
					<div className="container">
						<div className={`${styles.child_section}`}>
							<div className={`${styles.child_img}`}>
								<img src={Child.src} className="img-responsive" alt="wave" />
							</div>
							<div className={`${styles.child_info}`}>
								<h2>
									With the pledges received, <span>FlowGuard® Plus</span> will help set
									up rainwater harvesting units in water-stressed neighbourhoods for
									water conservation.
								</h2>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
			{/* Page Content ends here */}
		</div>
	);
}
