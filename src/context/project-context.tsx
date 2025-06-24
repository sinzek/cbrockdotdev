import { ProjectType } from "@/lib/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "sonner";

type ProjectContextType = {
	projects: ProjectType[];
	projectsLoading: boolean;
	fetchProjectsError: Error;
	refetchProjects: () => Promise<void>;
	createProject: (newProject: ProjectType) => Promise<ProjectType>;
	updateProject: (updatedProject: ProjectType) => Promise<ProjectType>;
	deleteProject: (projectSlug: string) => Promise<string>;
};

export const ProjectContext = React.createContext<
	ProjectContextType | undefined
>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
	const {
		data: projects,
		isLoading,
		refetch,
		error: fetchProjectsError,
	} = useQuery<ProjectType[]>({
		queryKey: ["projects"],
		queryFn: async () => {
			const response = await fetch("/api/db/projects");
			if (!response.ok) {
				throw new Error("Failed to fetch projects");
			}

			const { projects } = await response.json();

			return projects;
		},
		retry: 2,
	});

	const refetchProjects = React.useCallback(async () => {
		try {
			await refetch();
		} catch (error) {
			console.error("Failed to refetch projects:", error);
		}
	}, [refetch]);

	const { mutateAsync: createProject } = useMutation({
		mutationFn: async (newProject: ProjectType) => {
			const response = await fetch("/api/db/projects", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ project: newProject }),
			});

			console.log("Creating project:", newProject);

			if (!response.ok) {
				throw new Error("Failed to create project");
			}

			const data = await response.json();

			toast.success(
				`Project with slug ${newProject.slug} created successfully`
			);
			return data.project;
		},
		onError: (error) => {
			console.error("Error creating project:", error);
			toast.error(
				"An unexpected error occurred while creating the project"
			);
		},
		onSuccess: () => {
			refetchProjects();
		},
	});

	const { mutateAsync: updateProject } = useMutation({
		mutationFn: async (updatedProject: ProjectType) => {
			const response = await fetch("/api/db/projects", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ project: updatedProject }),
			});

			if (!response.ok) {
				throw new Error("Failed to update project");
			}

			const data = await response.json();

			toast.success(
				`Project with slug ${updatedProject.slug} updated successfully`
			);

			return data.project;
		},
		onError: (error) => {
			console.error("Error updating project:", error);
			toast.error(
				"An unexpected error occurred while updating the project"
			);
		},
		onSuccess: () => {
			refetchProjects();
		},
	});

	const { mutateAsync: deleteProject } = useMutation({
		mutationFn: async (projectSlug: string) => {
			const response = await fetch("/api/db/projects", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ slug: projectSlug }),
			});

			if (!response.ok) {
				throw new Error("Failed to delete project");
			}

			toast.success(
				`Project with slug ${projectSlug} deleted successfully`
			);

			return projectSlug;
		},
		onError: (error) => {
			console.error("Error deleting project:", error);
			toast.error(
				"An unexpected error occurred while deleting the project"
			);
		},
		onSuccess: () => {
			refetchProjects();
		},
	});

	return (
		<ProjectContext.Provider
			value={{
				projects: projects || [],
				projectsLoading: isLoading,
				refetchProjects,
				fetchProjectsError: fetchProjectsError as Error,
				createProject,
				updateProject,
				deleteProject,
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
}

export function useProjects() {
	const context = useContext(ProjectContext);
	if (!context) {
		throw new Error("useProjects must be used within a ProjectProvider");
	}
	return context;
}
