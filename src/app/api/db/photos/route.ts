import { uploadImagesToSupabase } from "@/lib/server/uploads";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const formData = await req.formData();
		const files = formData.getAll("files") as File[];
		const bucket = (formData.get("bucket") as string) || "photos";

		if (!files || files.length === 0) {
			return new Response(
				JSON.stringify({ error: "No files provided." }),
				{
					status: 400,
				}
			);
		}

		const result = await uploadImagesToSupabase(files, bucket);

		if (!result.success) {
			return new Response(JSON.stringify({ error: result.error }), {
				status: 500,
			});
		}

		return NextResponse.json({ success: true, urls: result.urls });
	} catch (error) {
		console.error("Error uploading images:", error);
		return new Response(
			JSON.stringify({ error: "Failed to upload images." }),
			{ status: 500 }
		);
	}
}
