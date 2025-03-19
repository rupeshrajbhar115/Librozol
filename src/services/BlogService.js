/* eslint-disable require-jsdoc */

/** Get All Blog */
export async function getAllBlogs() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
		headers: {
			Authorization: `Bearer ${process.env.TOKEN}`,
		},
	});
	const data = await res.json();
	return data;
}

/** Get ID Blog */
export async function getIdBlogs(_id) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/blogById/${_id}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.TOKEN}`,
			},
		}
	);
	const data = await res.json();
	return data;
}

/** Post One Blog */
export async function createBlog({ token, formdata }) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
		method: "POST",
		// headers: {
		// 	Authorization: `Bearer ${process.env.TOKEN}`,
		// },
		body: formdata,
	});
	const data = await res.json();
	return data;
}

/** Delete One Blog */
export async function deleteBlog({ title }) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${title}`,
		{
			method: "DELETE",
			// headers: { Authorization: `Bearer ${token}` },
		}
	);
	const data = await res.json();
	window.location.reload();
	return data;
}

// updateOneBlogById
// eslint-disable-next-line require-jsdoc
export async function updateOneBlogById({ formdata, _id }) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/updateOneBlogById/${_id}`,
		{
			method: "PUT",
			// headers: {
			// 	"Content-Type": "application/json",
			// },
			body: formdata,
		}
	);
	const data = await res.json();
	return data;
}
