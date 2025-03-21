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

			{/* Google Ads Conversion Tracking */}
			<Script id="google-ads-conversion" strategy="afterInteractive">
				{`
					gtag('event', 'conversion', {
						'send_to': 'AW-16911185916/BckECJfaz60aEPzv8P8-'
					});
				`}
			</Script>

			{/* Google Ads Conversion Tracking with URL Redirect */}
			<Script id="google-ads-conversion-url" strategy="afterInteractive">
				{`
					function gtag_report_conversion(url) {
						var callback = function () {
							if (typeof(url) !== 'undefined') {
								window.location = url;
							}
						};
						gtag('event', 'conversion', {
							'send_to': 'AW-16911185916/wfgFCLKJ5a0aEPzv8P8-',
							'value': 1.0,
							'currency': 'INR',
							'event_callback': callback
						});
						return false;
					}
				`}
			</Script>
			{/* Google Ads Conversion Tracking with URL Redirect - Second Function */}
			<Script id="google-ads-conversion-url-2" strategy="afterInteractive">
				{`
					function gtag_report_conversion_v2(url) {
						var callback = function () {
							if (typeof(url) !== 'undefined') {
								window.location = url;
							}
						};
						gtag('event', 'conversion', {
							'send_to': 'AW-16911185916/luk7CKij5a0aEPzv8P8-',
							'value': 1.0,
							'currency': 'INR',
							'event_callback': callback
						});
						return false;
					}
				`}
			</Script>
		</>
	);
}
