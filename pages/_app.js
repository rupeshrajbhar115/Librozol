// MODULES //
import { useEffect } from "react";
import Script from "next/script";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// UTILS //
import SmoothScrolling from "@/utils/SmoothScrolling";

// STYLES //
import "@/styles/globals/globals.scss";

// IMAGES //

// DATA //

/** App Page */
export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		SmoothScrolling();
	}, []);

	return (
		<>
			<Component {...pageProps} />
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-RV7EV89CLH"
			></script>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
	window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'G-RV7EV89CLH');`}
			</Script>
		</>
	);
}
