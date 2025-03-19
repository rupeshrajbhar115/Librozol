/* eslint-disable quotes */
// MODULES //
import React, { useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/MainWrapper.module.scss";
import MakingProfound from "./MakingProfound";

// IMAGES //

// DATA //

/** MainWrapper Component */
export default function MainWrapperComponent({ gsap, ScrollTrigger }) {
	useEffect(() => {
		const winH = window.innerHeight;
		const winW = window.innerWidth;

		const gap =
			parseFloat(
				getComputedStyle(document.documentElement).getPropertyValue("--box-width")
			) || 300;

		const ScrollAnimation = gsap.timeline({
			ease: "power2.out",
		});

		ScrollAnimation.fromTo(
			".box_img1",
			{
				x: `${gap * 1.3}px`,
				rotate: -6,
			},
			{
				x: `${gap * 1.1}px`,
				rotate: -10,
			},
			"1st"
		)
			.fromTo(
				".box_img2",
				{
					x: `${gap / 2.5}px`,
					rotate: -3,
				},
				{
					x: `${gap / 3.5}px`,
					rotate: -5,
				},
				"1st"
			)
			.fromTo(
				".box_img3",
				{
					x: `${gap / -1.9}px`,
				},
				{
					x: `${gap / -2}px`,
				},
				"1st"
			)
			.fromTo(
				".box_img4",
				{
					x: `${gap * -1.4}px`,
					rotate: 4,
				},
				{
					x: `${gap * -1.3}px`,
					rotate: 8,
				},
				"1st"
			);

		ScrollTrigger.create({
			trigger: `.${styles.MainWrapper}`,
			animation: ScrollAnimation,
			// start: "top 80%",
			// end: "+=100%",
			start: "top 80%",
			end: "bottom bottom",
			scrub: true,
			// markers: true,
			pinSpacing: true,
		});

		const ScrollAnimationCard = gsap.timeline();

		ScrollAnimationCard.fromTo(
			".box_img1",
			{
				x: `${gap * 1.1}px`,
				ease: "none",
			},
			{
				x: `${parseInt("0px") - 60}px`,
				// x: "0",
				y: "55px",
				ease: "none",
			},
			"1st"
		)
			.fromTo(
				".box_img2",
				{
					x: `${gap / 3.5}px`,
					ease: "none",
				},
				{
					x: `${parseInt("0px") - 20}px`,
					ease: "none",
				},
				"1st"
			)
			.fromTo(
				".box_img3",
				{ x: `${gap / -2}px`, ease: "none" },
				{
					x: `${parseInt("0px") + 20}px`,
					y: "15px",
					ease: "none",
				},
				"1st"
			)
			.fromTo(
				".box_img4",
				{
					x: `${gap * -1.3}px`,
					y: "45px",
					ease: "none",
				},
				{
					// x: "0px",
					x: `${parseInt("0px") + 60}px`,
					ease: "none",
				},
				"1st"
			);

		ScrollTrigger.create({
			trigger: `.${styles.MainWrapper}`,
			animation: ScrollAnimationCard,
			start: "center center",
			end: `bottom+=${winH / 2} center`,
			scrub: true,
			markers: true,
			pin: true,
			pinSpacing: true,
		});
	}, []);

	// useEffect(() => {
	// 	if (typeof window === "undefined") return;

	// 	gsap.registerPlugin(ScrollTrigger);

	// 	const gap =
	// 		parseFloat(
	// 			getComputedStyle(document.documentElement).getPropertyValue("--box-width")
	// 		) || 300;

	// 	/** --- FORWARD ANIMATION --- **/
	// 	let ScrollAnimation = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: `.${styles.MainWrapper}`,
	// 			start: "top 80%",
	// 			end: "bottom top",
	// 			scrub: 0.8,
	// 			pinSpacing: true,
	// 			markers: true, // Enable this if you need to debug
	// 		},
	// 	});

	// 	ScrollAnimation.to(
	// 		".box_img1",
	// 		{ x: `${gap * 1.1}px`, rotate: -10, duration: 1.2 },
	// 		"start"
	// 	)
	// 		.to(".box_img2", { x: `${gap / 3.5}px`, rotate: -5, duration: 1.2 }, "start")
	// 		.to(".box_img3", { x: `${gap / -2}px`, duration: 1.2 }, "start")
	// 		.to(
	// 			".box_img4",
	// 			{ x: `${gap * -1.3}px`, rotate: 8, duration: 1.2 },
	// 			"start"
	// 		);

	// 	/** --- REVERSE ANIMATION (RETURN TO ORIGINAL POSITION) --- **/
	// 	let ScrollAnimationCard = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: `.${styles.MainWrapper}`,
	// 			start: "top top",
	// 			end: "+=" + window.innerHeight * 1,
	// 			scrub: 0.8,
	// 			pin: true,
	// 			pinSpacing: true,
	// 			markers: true,
	// 		},
	// 	});

	// 	ScrollAnimationCard.to(
	// 		".box_img1",
	// 		{ x: "0px", rotate: 0, ease: "none" },
	// 		"reverse"
	// 	)
	// 		.to(".box_img2", { x: "0px", rotate: 0, ease: "none" }, "reverse")
	// 		.to(".box_img3", { x: "0px", ease: "none" }, "reverse")
	// 		.to(".box_img4", { x: "0px", rotate: 0, ease: "none" }, "reverse");

	// 	return () => {
	// 		ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	// 	};
	// }, [gsap, ScrollTrigger]);
	return (
		<>
			<div className={`${styles.height}`}></div>
			<div className={`${styles.MainWrapper} ptb_50`}>
				<MakingProfound gsap={gsap} ScrollTrigger={ScrollTrigger} />
			</div>
			<div className={`${styles.height}`}></div>
		</>
	);
}
