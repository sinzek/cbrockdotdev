import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/lib/server/reads";
import { uploadProjectToSupabase } from "@/lib/server/uploads";
import { deleteProjectFromSupabase } from "@/lib/server/deletions";
import { middleware } from "@/middleware";

export async function GET() {
	try {
		const { success, error, projects } = await getProjects();

		if (!success) {
			return NextResponse.json(
				{ error: error || "Failed to fetch projects." },
				{ status: 500 }
			);
		}

		if (!projects || projects.length === 0) {
			return NextResponse.json({ projects: [] }, { status: 200 });
		}

		return NextResponse.json({ success: true, projects }, { status: 200 });
	} catch (error) {
		console.error("Error fetching projects:", error);
		return NextResponse.json(
			{ error: "Failed to fetch projects." },
			{ status: 500 }
		);
	}
}

export async function POST(request: NextRequest) {
	const authResult = middleware(request);
	if (authResult.status === 401) {
		return NextResponse.json(
			{ error: "Unauthorized access." },
			{ status: 401 }
		);
	}

	try {
		const { project } = await request.json();

		if (!project || typeof project !== "object") {
			console.error("Invalid project data:", project);
			return NextResponse.json(
				{ error: "Invalid project data." },
				{ status: 400 }
			);
		}

		const { success, error } = await uploadProjectToSupabase(project);

		if (!success) {
			console.error("Error uploading project:", error);
			return NextResponse.json(
				{ error: error || "Failed to upload project." },
				{ status: 500 }
			);
		}

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error("Error uploading project:", error);
		return NextResponse.json(
			{ error: "Failed to upload project." },
			{ status: 500 }
		);
	}
}

export async function PUT(request: NextRequest) {
	const authResult = middleware(request);
	if (authResult.status === 401) {
		return NextResponse.json(
			{ error: "Unauthorized access." },
			{ status: 401 }
		);
	}

	try {
		const { project } = await request.json();

		if (!project || typeof project !== "object") {
			return NextResponse.json(
				{ error: "Invalid project data." },
				{ status: 400 }
			);
		}

		const { success, error } = await uploadProjectToSupabase(project);

		if (!success) {
			return NextResponse.json(
				{ error: error || "Failed to update project." },
				{ status: 500 }
			);
		}

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error("Error updating project:", error);
		return NextResponse.json(
			{ error: "Failed to update project." },
			{ status: 500 }
		);
	}
}

export async function DELETE(request: NextRequest) {
	const authResult = middleware(request);
	if (authResult.status === 401) {
		return NextResponse.json(
			{ error: "Unauthorized access." },
			{ status: 401 }
		);
	}

	try {
		const { slug } = await request.json();

		if (!slug || typeof slug !== "string") {
			return NextResponse.json(
				{ error: "Invalid project slug." },
				{ status: 400 }
			);
		}

		const { success, error } = await deleteProjectFromSupabase(slug);

		if (!success) {
			return NextResponse.json(
				{ error: error || "Failed to delete project." },
				{ status: 500 }
			);
		}

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error("Error deleting project:", error);
		return NextResponse.json(
			{ error: "Failed to delete project." },
			{ status: 500 }
		);
	}
}
