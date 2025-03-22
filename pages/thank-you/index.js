/* eslint-disable react/jsx-no-undef */
// MODULES //
import Script from "next/script";
import { useRef, useEffect, useState } from "react";

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
import Wave from "../../public/img/home/wave.png";
import Wave2 from "../../public/img/home/wave2.png";
import WaterDrop from "../../public/img/home/water_drap.png";
import Hand from "../../public/img/home/hand.png";
import Child from "../../public/img/home/child_img.png";
import IntroBanner from "../../public/img/home/intro_banner.jpg";
import Logo from "../../public/img/home/header_logo.svg";
import IntroLogo from "../../public/img/home/intro_logo.gif";
import FlowGuard from "../../public/img/home/flow_guard.png";
import HandPoint from "../../public/img/home/curser.png";
import thankYou from "../../public/img/home/thank_you_img.jpg";

// DATA //

<>
	<Script
		id="facebook-pixel"
		strategy="afterInteractive"
		dangerouslySetInnerHTML={{
			__html: `
            !function(f,b,e,v,n,t,s) {
              if(f.fbq) return; n=f.fbq=function() {
                n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
              };
              if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
              n.queue=[]; t=b.createElement(e); t.async=!0;
              t.src=v; s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
            
            fbq('init', '1628407397791855');
            fbq('track', 'PageView');
            fbq('track', 'Lead');
          `,
		}}
	/>

	<noscript>
		<img
			height="1"
			width="1"
			style={{ display: "none" }}
			src="https://www.facebook.com/tr?id=1628407397791855&ev=PageView&noscript=1"
		/>
		<img
			height="1"
			width="1"
			style={{ display: "none" }}
			src="https://www.facebook.com/tr?id=1628407397791855&ev=Lead&noscript=1"
		/>
	</noscript>
</>;

/** Home Page */
export default function HomePage() {
	const videoRef = useRef(null);
	const formSectionRef = useRef(null);
	const [fadeOut, setFadeOut] = useState(false);
	const [showStep2, setShowStep2] = useState(false);
	const [showStep3, setShowStep3] = useState(false);
	const [showStep4, setShowStep4] = useState(false);
	const [videoPlayed, setVideoPlayed] = useState(false);
	const [showFlowGuard, setShowFlowGuard] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setFadeOut(true);
		}, 2000); // 2 seconds

		return () => clearTimeout(timer);
	}, []);

	/** handleVideoPlay */
	const handleVideoPlay = () => {
		if (videoRef.current) {
			videoRef.current.play();
			setVideoPlayed(true);
		}
		setShowFlowGuard(false);
	};
	/** Scroll to Form Section */
	const handleScrollToForm = () => {
		if (formSectionRef.current) {
			formSectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

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
				{/* <section className={`${styles.section_2}`}>
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
						<h6>Source: SPML Water Loss Management</h6>
						<div className={`${styles.hand_box}`}>
							<h3>
								With every pledge, <span>FlowGuard® Plus</span> will save 1500 litres of
								water.
							</h3>
						</div>
					</div>
				</section> */}
				<section className={`${styles.section_3} pt_100`} ref={formSectionRef}>
					<div className="container">
						{/* <Form /> */}
						<div className={`${styles.thank_you_data}`}>
							<h3>
								Thank you for <br />
								taking the pledge!
							</h3>
							<div className={`${styles.thank_img}`}>
								<img src={thankYou.src} className="img-responsive" alt="wave" />
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.section_4}`}>
					<img
						src={Wave2.src}
						className={`${styles.wave2} img-responsive`}
						alt="wave"
					/>
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
