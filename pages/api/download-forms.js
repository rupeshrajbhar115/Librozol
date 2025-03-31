// PLUGINS //
import * as XLSX from "xlsx";

/** Api to download form data */
export default async (_req, res) => {
	try {
		// GraphCMS API se data fetch karna
		const dataRes = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/librozol-forms?pagination[page]=1&pagination[pageSize]=10000`,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
				},
			}
		);

		// API response ko JSON me convert karna
		const data = await dataRes.json();
		console.log("API Response Data:", data); // API response ko log karenge

		// `data.data` ki structure ko check karna
		if (!Array.isArray(data.data)) {
			console.error("API se data sahi format mein nahi aa raha!");
			return res.status(500).send("API se data sahi format mein nahi aa raha");
		}

		// Data ko ascending order mein sort karna (by 'createdAt' field)
		const jsonData = await data.data
			.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) // Sorting ascending based on 'createdAt'
			.map((item, index) => {
				console.log("Item Data:", item); // Har item ko log karenge
				return {
					id: item.id, // Directly use the fields
					name: item.name, // Name field
					number: item.number, // Number field
					email: item.email, // Email field
					city: item.city, // City field
					jobCategory: item.jobCategory, // Job Category field
					others: item.others, // Others field
					terms: item.terms, // Terms acceptance status
					createdAt: item.createdAt, // Created date
				};
			});

		console.log("Formatted Data:", JSON.stringify(jsonData, null, 2)); // Formatted data ko log karenge

		if (jsonData.length === 0) {
			console.error("Koi data export karne ke liye available nahi hai!");
			return res.status(400).send("Koi data available nahi hai");
		}

		// Excel sheet banane ke liye
		const ws = XLSX.utils.json_to_sheet(jsonData);

		// Workbook banayenge aur sheet add karenge
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");

		// Excel file buffer generate karenge
		const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "buffer" });

		// Response headers set karenge
		res.setHeader(
			"Content-Type",
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
		);
		res.setHeader(
			"Content-Disposition",
			"attachment; filename=librozol-forms.xlsx"
		);

		// Excel file ko response ke through send karenge
		res.status(200).end(excelBuffer);
	} catch (error) {
		console.error("Excel export mein error:", error);
		res.status(500).send("Internal Server Error", error);
	}
};
