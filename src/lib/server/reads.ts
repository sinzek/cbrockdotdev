import { supabase } from "./supabase-client";
import { ProjectType } from "../types";

export async function getProjects() {
	try {
		const { data, error } = await supabase
			.from("projects")
			.select("*")
			.order("launchDate", { ascending: false });

		if (error) {
			console.error("Error fetching projects from Supabase:", error);
			return { success: false, error: error.message };
		}

		if (!data) {
			return { success: true, projects: [] };
		}

		return { success: true, projects: data as ProjectType[] };
	} catch (error) {
		console.error("Error fetching projects:", error);
		return { success: false, error: "Failed to fetch projects." };
	}
}
