// MODULES //
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
import Wave from "../public/img/home/wave.png";
import Wave2 from "../public/img/home/wave2.png";
import WaterDrop from "../public/img/home/water_drap.png";
import Hand from "../public/img/home/hand.png";
import Child from "../public/img/home/child_img.png";
import IntroBanner from "../public/img/home/intro_banner.jpg";
import Logo from "../public/img/home/header_logo.svg";
import IntroLogo from "../public/img/home/intro_logo.gif";
import FlowGuard from "../public/img/home/flow_guard.png";
import HandPoint from "../public/img/home/curser.png";

// DATA //

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
					<div className={styles.flow_animation_wrapper}>
						{fadeOut && !showStep2 && !showStep3 && !showStep4 && (
							<div className={styles.flow_animation}>
								<div className={styles.step_wrapper_1}>
									<div className={styles.step_1}>
										<video autoPlay muted className="hidden_xs">
											<source src="../img/home/desktop_video_1.mp4" type="video/mp4" />
											Your browser does not support the video tag.
										</video>
										<video autoPlay muted className="visible_xs">
											<source src="../img/home/mobile_video_1.mp4" type="video/mp4" />
											Your browser does not support the video tag.
										</video>
									</div>
									<div className={`${styles.video_text}`}>
										<h3>
											Leaky pipes
											<br /> dampen your walls.
										</h3>
										<h5>Stop it to #SaveALitre</h5>
										<div className={`${styles.btn_section}`}>
											<div
												className={`${styles.btn_secondary}`}
												onClick={() => setShowStep2(true)}
											>
												Stop the Leakage
											</div>
										</div>
									</div>
								</div>
							</div>
						)}

						{showStep2 && !showStep3 && !showStep4 && (
							<div className={styles.flow_animation}>
								<div
									className={styles.step_wrapper_2}
									onClick={() => setShowStep3(true)}
								>
									<div className={styles.step_1}>
										<video autoPlay muted loop className="hidden_xs">
											<source src="../img/home/desktop_video_21.mp4" type="video/mp4" />
											Your browser does not support the video tag.
										</video>
										<video autoPlay muted className="visible_xs">
											<source src="../img/home/mobile_video_2.mp4" type="video/mp4" />
											Your browser does not support the video tag.
										</video>
										<img
											src={HandPoint.src}
											className={`${styles.hand_point} img-responsive`}
											alt="banner"
										/>
									</div>

									<div className={`${styles.video_text}`}>
										<h3>
											Tap on the <br /> rusted pipe
										</h3>
										<h5>to stop the water leak.</h5>
									</div>
								</div>
							</div>
						)}

						{showStep3 && !showStep4 && (
							<div className={styles.flow_animation}>
								<div className={styles.step_wrapper_2}>
									{showFlowGuard && (
										<div className={`${styles.step_1}`}>
											<video autoPlay muted loop className="hidden_xs">
												<source src="../img/home/desktop_video_21.mp4" type="video/mp4" />
											</video>
											<video autoPlay muted className="visible_xs">
												<source src="../img/home/mobile_video_2.mp4" type="video/mp4" />
												Your browser does not support the video tag.
											</video>
										</div>
									)}

									<div
										className={`${styles.step_1} `}
										onClick={() => {
											setShowStep4(true);
										}}
									>
										<video ref={videoRef} muted className="hidden_xs">
											<source src="../img/home/desktop_video_3.mp4" type="video/mp4" />
										</video>
										<video autoPlay muted className="visible_xs">
											<source src="../img/home/mobile_video_3.mp4" type="video/mp4" />
											Your browser does not support the video tag.
										</video>
									</div>

									{showFlowGuard && (
										<div
											className={`${styles.flow_guard_wrapper}`}
											onClick={handleVideoPlay}
										>
											<div className={`${styles.flow_guard}`}>
												<img
													src={FlowGuard.src}
													className={`${styles.floating_img} img-responsive`}
													alt="banner"
												/>
												<img
													src={HandPoint.src}
													className={`${styles.hand_point} ${styles.floating_img} img-responsive`}
													alt="banner"
												/>
											</div>
										</div>
									)}

									<div
										className={`${styles.video_text}`}
										onClick={() => setShowStep4(true)}
									>
										<h3>
											Replace the Faulty <br />
											pipe with Floguard®
											<br />
											Plus CPV
										</h3>
										<h5>to stop the water leak.</h5>
									</div>
								</div>
							</div>
						)}

						{showStep4 && (
							<div className={styles.flow_animation}>
								<div className={styles.step_wrapper_2}>
									<div className={styles.step_1}>
										<video autoPlay muted loop className="hidden_xs">
											<source src="../img/home/desktop_video_4.mp4" type="video/mp4" />
										</video>
										<video autoPlay muted className="visible_xs">
											<source src="../img/home/mobile_video_4.mp4" type="video/mp4" />
											Your browser does not support the video tag.
										</video>
									</div>
									<div className={`${styles.video_text}`}>
										<h3>
											Congratulations, <br />
											you did it!
										</h3>
										<h5>
											Floguard® Plus CPV helps prevent leaks. Now take the pledge to save
											water in real life.{" "}
										</h5>
										<div className={`${styles.btn_section}`} onClick={handleScrollToForm}>
											<div className={`${styles.btn_secondary}`}>Take the Pledge</div>
										</div>
									</div>
								</div>
							</div>
						)}
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
						<h6>Source: SPML Water Loss Management</h6>
						<div className={`${styles.hand_box}`}>
							<h3>
								With every pledge, <span>FlowGuard® Plus</span> will save 1500 litres of
								water.
							</h3>
						</div>
					</div>
				</section>
				<section className={`${styles.section_3}`} ref={formSectionRef}>
					<div className="container">
						<Form />
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
