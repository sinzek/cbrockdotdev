import { uploadJSONToSupabase } from "@/lib/server/uploads";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const { filename, data } = await request.json();

	if (!filename || !data) {
		return NextResponse.json(
			{ error: "Filename and data are required." },
			{ status: 400 }
		);
	}

	const result = await uploadJSONToSupabase(filename, data);

	if (!result.success) {
		return NextResponse.json({ error: result.error }, { status: 500 });
	}

	return NextResponse.json({ success: true }, { status: 200 });
}
