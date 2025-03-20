// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //
import Face from "../../public/img/home/face.png";
import What from "../../public/img/home/what.png";
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
						<p>
							©The Lubrizol Corporation 2025, all rights reserved. All marks are
							property of Lubrizol <br className="hidden_xs" /> Advanced Materials, a
							Berkshire Hathaway Company.
						</p>
						<h6>Terms of use | Privacy and Cookies policy</h6>
					</div>
					<div className={`${styles.right}`}>
						<p>Follow us on:</p>
						<ul>
							<li>
								<a href="#">
									<img src={Face.src} className="img-responsive" alt="facebook" />
								</a>
							</li>
							<li>
								<a href="#">
									<img src={What.src} className="img-responsive" alt="facebook" />
								</a>
							</li>
							<li>
								<a href="#">
									<img src={Insta.src} className="img-responsive" alt="facebook" />
								</a>
							</li>
							<li>
								<a href="#">
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
