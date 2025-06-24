import { supabase } from "./supabase-client";

export async function deleteProjectFromSupabase(slug: string) {
	const { error } = await supabase.from("projects").delete().eq("slug", slug);

	if (error) {
		console.error("Error deleting project from Supabase:", error);
		return { success: false, error: error.message };
	}

	console.log("Project deleted successfully:", slug);
	return { success: true };
}
