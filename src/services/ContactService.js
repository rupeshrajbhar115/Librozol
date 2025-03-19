/** Get All Blog */
export async function getAllContact() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
		headers: {
			Authorization: `Bearer ${process.env.TOKEN}`,
		},
	});
	const data = await res.json();
	return data;
}

/** Delete One Blog */
export async function deleteContact({ firstName }) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/contact/${firstName}`,
		{
			method: "DELETE",
			// headers: { Authorization: `Bearer ${token}` },
		}
	);
	const data = await res.json();
	window.location.reload();
	return data;
}
