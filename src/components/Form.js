// MODULES //
import { useRef, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { useForm } from "react-hook-form";

// UTILS //

// STYLES //
import styles from "@/styles/components/Form.module.scss";

// IMAGES //

// DATA //

/** DummyComponent Component */
export default function Form() {
	const formRef = useRef();
	const [isSubmited, setIsSubmited] = useState(false);

	/** Default to GB(UK) or any other default country */
	const [countryCode, setCountryCode] = useState();
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm();

	// Watch for jobCategory value
	const selectedJobCategory = watch("jobCategory");

	/** */
	const onSubmit = async (data) => {
		console.log(
			"Form Data Submitted:",
			JSON.stringify({
				data: { ...data },
			})
		);
		const Headers = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
			},
			body: JSON.stringify({
				data: { ...data },
			}),
		};
		/** */
		async function sendData() {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/librozol-forms`,
				Headers
			).then((data) => data.json());
			// .then((data) => {
			reset(), setIsSubmited(true);
			// })
			// .catch((err) => console.log(err));
			// const resData = await res.json();
			// console.log(resData);
		}

		sendData();
	};
	return (
		<div className={styles.form_section}>
			<div className={`${styles.title_section}`}>
				<h2>Take the Pledge</h2>
				<p>Join those who have pledged to save water. #SaveALitre</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
				<div className={styles.formGroupSection}>
					<div className={styles.formGroup}>
						<label className={`${styles.lable_text}`}>Full name</label>
						<input
							className={`${styles.input} text_xs`}
							type="text"
							id="name"
							name="name"
							placeholder="Full Name*"
							{...register("name", { required: true })}
						/>
						{errors.name && errors.name.type == "required" && (
							<label className="error">This field is required</label>
						)}
					</div>
					<div className={styles.formGroup}>
						<label className={`${styles.lable_text}`}>Phone number</label>
						<input
							className={`${styles.input} text_xs`}
							type="text"
							id="number"
							name="number"
							placeholder="Phone number"
							{...register("number", {
								required: "This field is required",
								pattern: {
									value: /^[6-9]\d{9}$/,
									message: "Enter a valid 10-digit phone number",
								},
							})}
						/>
						{errors.number && errors.number.type == "required" && (
							<label className="error">This field is required</label>
						)}
					</div>
				</div>
				<div className={styles.formGroupSection}>
					<div className={styles.formGroup}>
						<label className={`${styles.lable_text}`}>Email address</label>
						<input
							className={`${styles.input} text_xs`}
							type="email"
							id="email"
							name="email"
							placeholder="Email Address*"
							{...register("email", {
								required: true,
								pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
							})}
						/>
						{errors.email && errors.email.type == "required" && (
							<label className="error">This field is required</label>
						)}
						{errors.email && errors.email.type == "pattern" && (
							<label className="error">Enter valid email</label>
						)}
					</div>
					<div className={styles.formGroup}>
						<label className={`${styles.lable_text}`}>City</label>
						<input
							className={`${styles.input} text_xs`}
							type="text"
							id="city"
							name="city"
							placeholder="City Name*"
							{...register("city", { required: true })}
						/>
						{errors.city && errors.city.type == "required" && (
							<label className="error">This field is required</label>
						)}
					</div>
				</div>
				<div className={styles.formGroupSection}>
					<div className={styles.formGroup}>
						<label className={`${styles.lable_text}`}>Job Category</label>
						<select
							{...register("jobCategory", { required: true })}
							className={`${styles.input} text_xs`}
						>
							<option value="">Select a Job Category</option>
							<option value="Consultant">Consultant</option>
							<option value="Builder">Builder</option>
							<option value="Business Owner">Business Owner</option>
							<option value="Private Job">Private Job</option>
							<option value="Plimber">Plimber</option>
							<option value="Other">Other</option>
						</select>
						{errors.jobCategory && (
							<p className={`${styles.errors_msg} error`}>This field is required</p>
						)}
					</div>
					{selectedJobCategory === "Other" && (
						<div className={styles.formGroup}>
							<label className={`${styles.lable_text}`}>Others</label>
							<input
								className={`${styles.input} text_xs`}
								type="text"
								id="others"
								name="others"
								placeholder="Design service"
								{...register("others", { required: "This field is required" })}
							/>
							{errors.others && (
								<label className="error">{errors.others.message}</label>
							)}
						</div>
					)}
				</div>
				<div className={styles.formGroupSection}>
					<div className={`${styles.formGroup} ${styles.check_box}`}>
						<input
							type="checkbox"
							id="terms"
							name="terms"
							{...register("terms", { required: "This field is required" })}
						/>
						{errors.terms && (
							<label className={`${styles.checkbox_error} error`}>
								{errors.terms.message}
							</label>
						)}
						<label htmlFor="terms">
							I accept <a href="#">terms of use</a>
						</label>
					</div>
				</div>
				<div className={`${styles.btn_section}`}>
					<button className={`${styles.btn_secondary}`}>Pledge Now</button>
				</div>

				{isSubmited && (
					<p className={`${styles.thank_you} para_sm mt_20 color_white pt_10`}>
						Thank you for reaching out! We’ve received your message and will get back
						to you soon.
					</p>
				)}
			</form>
		</div>
	);
}
