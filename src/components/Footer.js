/* eslint-disable react/jsx-no-target-blank */
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //
import Face from "../../public/img/home/face.png";
import Link from "../../public/img/home/linkedin.png";
import Insta from "../../public/img/home/insta.png";
import You from "../../public/img/home/you.png";

// DATA //

/** Footer Component */
export default function Footer() {
	return (
		<footer className={`${styles.main_footer}`}>
			<div className="container">
				<div className={`${styles.footer_section}`}>
					<div className={`${styles.left}`}>
						<p className={`${styles.para_width}`}>
							The information contained herein is reliable based on current
							information, but the advertiser makes no representations, guarantees, or
							warranties, express or implied, including any implied warranties of
							merchantability or fitness for a particular purpose, or regarding the
							completeness, accuracy, or timeliness of any information. Always consult
							your pipe and/ or fitting manufacturer for current recommendations. ©
							Lubrizol Advanced Materials 2025, all rights reserved. All marks are
							property of Lubrizol Advanced Materials, a Berkshire Hathaway Company.
						</p>
						<h6>
							<a
								href="https://www.lubrizol.com/Legal/Lubrizol-Privacy-and-Cookie-Policy"
								target="_blank"
							>
								Terms of use | Privacy and Cookies policy
							</a>
						</h6>
					</div>
					<div className={`${styles.right}`}>
						<p>Follow us on:</p>
						<ul>
							<li>
								<a href="https://www.facebook.com/flowguardplus" target="_blank">
									<img src={Face.src} className="img-responsive" alt="facebook" />
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/showcase/lubrizol-cpvc/"
									target="_blank"
								>
									<img src={Link.src} className="img-responsive" alt="Link" />
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/flowguard_plus/?hl=en"
									target="_blank"
								>
									<img src={Insta.src} className="img-responsive" alt="facebook" />
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/@FlowGuardPlusIndia" target="_blank">
									<img src={You.src} className="img-responsive" alt="facebook" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
