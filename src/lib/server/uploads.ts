import { supabase } from "./supabase-client";

export async function uploadJSONToSupabase(
	filename: string,
	jsonData: object
): Promise<{ success: boolean; error?: string }> {
	const fileBlob = new Blob([JSON.stringify(jsonData, null, 2)], {
		type: "application/json",
	});

	const { error } = await supabase.storage
		.from("projects")
		.upload(filename, fileBlob, {
			contentType: "application/json",
			upsert: true, // overwrite if file exists, this is useful for updates
		});

	if (error) {
		console.error("Error uploading JSON to Supabase:", error);
		return { success: false, error: error.message };
	}

	return { success: true };
}

export async function uploadImagesToSupabase(
	images: File[],
	bucket: string = "photos"
) {
	const uploadPromises = images.map((image) => {
		return supabase.storage.from(bucket).upload(image.name, image, {
			contentType: image.type,
			upsert: true, // overwrite if file exists
		});
	});

	const results = await Promise.all(uploadPromises);

	const errors = results.filter((result) => result.error);
	if (errors.length > 0) {
		console.error("Error uploading images to Supabase:", errors);
		return { success: false, error: errors[0].error?.message };
	}

	const urls = results
		.map((result) => {
			if (result.data) {
				return supabase.storage
					.from(bucket)
					.getPublicUrl(result.data.path).data.publicUrl;
			}
			return "";
		})
		.filter((url) => url !== "");

	return { success: true, urls };
}
