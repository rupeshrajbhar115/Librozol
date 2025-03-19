// MODULES //
import { useEffect, useRef, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/MakingProfound.module.scss";

// IMAGES //
import MakingImg1 from "../../public/img/making/making_img_1.jpg";
import MakingImg2 from "../../public/img/making/making_img_2.jpg";
import MakingImg3 from "../../public/img/making/making_img_3.jpg";
import MakingImg4 from "../../public/img/making/making_img_4.jpg";
import Icon1 from "../../public/img/making/making_icon1.png";
import Icon2 from "../../public/img/making/making_icon2.png";
import Icon3 from "../../public/img/making/making_icon3.png";
import Icon4 from "../../public/img/making/making_icon4.png";

// DATA //

/** MainWrapper Component */
export default function MakingProfound({ gsap, ScrollTrigger }) {
	const boxImg1Ref = useRef(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (boxImg1Ref.current) {
			const boxWidth = boxImg1Ref.current.clientWidth;
			setWidth(boxWidth);

			// Set CSS variable globally
			document.documentElement.style.setProperty("--box-width", `${boxWidth}px`);
		}
	}, []);
	console.log(width, "width");

	return (
		<>
			<div className={`${styles.MakingProfound} MakingProfound`}>
				<h2 className="text_xs text_center pb_40">Making a mark so profound</h2>
				<div className={`${styles.img_section}`}>
					<div
						ref={boxImg1Ref}
						className={`${styles.box_img1} ${styles.box_img} box_img1`}
					>
						<img
							src={Icon1.src}
							className={`${styles.icon} img-responsive`}
							alt="Making icon"
						/>
						<img src={MakingImg1.src} className="img-responsive" alt="Making image" />
						<h4 className="text_m pt_10">
							Bronze Glory! ABWA U-17 Boys Shine at ISSO Tournament!
						</h4>
					</div>
					<div className={`${styles.box_img2} ${styles.box_img} box_img2`}>
						<img
							src={Icon2.src}
							className={`${styles.icon} img-responsive`}
							alt="Making icon"
						/>
						<img src={MakingImg2.src} className="img-responsive" alt="Making image" />
						<h4 className="text_m pt_10">
							Bronze Glory! ABWA U-17 Boys Shine at ISSO Tournament!
						</h4>
					</div>
					<div className={`${styles.box_img3} ${styles.box_img} box_img3`}>
						<img
							src={Icon3.src}
							className={`${styles.icon} img-responsive`}
							alt="Making icon"
						/>
						<img src={MakingImg3.src} className="img-responsive" alt="Making image" />
						<h4 className="text_m pt_10">
							Bronze Glory! ABWA U-17 Boys Shine at ISSO Tournament!
						</h4>
					</div>
					<div className={`${styles.box_img4} ${styles.box_img} box_img4`}>
						<img
							src={Icon4.src}
							className={`${styles.icon} img-responsive`}
							alt="Making icon"
						/>
						<img src={MakingImg4.src} className="img-responsive" alt="Making image" />
						<h4 className="text_m pt_10">
							Bronze Glory! ABWA U-17 Boys Shine at ISSO Tournament! Bronze Glory! ABWA
							U-17 Boys Shine at ISSO Tournament!
						</h4>
					</div>
				</div>
			</div>
		</>
	);
}
