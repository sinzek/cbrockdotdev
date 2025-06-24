import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	CheckIcon,
	CircleNotchIcon,
	FolderOpenIcon,
	PlusIcon,
	XIcon,
} from "@phosphor-icons/react";
import React from "react";
import { TechnologiesSelector } from "./technologies-selector";
import Image from "next/image";
import { toast } from "sonner";
import { ProjectType } from "@/lib/types";
import { Checkbox } from "@/components/ui/checkbox";
import { useProjects } from "@/context/project-context";

interface ProjectModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	project?: ProjectType;
	onProjectSaved?: () => void;
	triggerChild?: React.ReactNode;
}

export function ProjectModal({
	open,
	onOpenChange,
	project,
	onProjectSaved,
	triggerChild,
}: ProjectModalProps) {
	const isEditing = !!project;
	const { updateProject, createProject } = useProjects();

	const [formData, setFormData] = React.useState({
		title: "",
		description: null as string | null,
		slug: "",
		technologies: [] as string[],
		photos: [] as string[],
		link: null as string | null,
		blogPosts: "",
		launchDate: undefined as Date | undefined,
		visible: false,
	});
	const [uploading, setUploading] = React.useState(false);
	const [files, setFiles] = React.useState<File[]>([]);

	React.useEffect(() => {
		if (open) {
			if (project) {
				setFormData({
					title: project.title,
					description: project.description,
					slug: project.slug,
					technologies: project.technologies,
					photos: project.photos,
					link: project.link,
					blogPosts: project.blogPosts.join(", "),
					launchDate: project.launchDate
						? new Date(project.launchDate)
						: undefined,
					visible: project.visible,
				});
			} else {
				resetFormData();
			}
		}
	}, [open, project]);

	const resetFormData = () => {
		setFormData({
			title: "",
			description: "",
			slug: "",
			technologies: [],
			photos: [],
			link: "",
			blogPosts: "",
			launchDate: undefined,
			visible: false,
		});
		setFiles([]);
	};

	const handleCreateProject = async () => {
		// validation
		if (!formData.title.trim()) {
			toast.error("Project title is required.");
			return;
		}

		if (!formData.slug.trim()) {
			toast.error("Project slug is required.");
			return;
		}

		const splitBlogPosts = formData.blogPosts
			.split(",")
			.map((post) => post.trim());

		const projectData: ProjectType = {
			slug: formData.slug.trim(),
			title: formData.title.trim(),
			description: formData.description?.trim() || null,
			technologies: formData.technologies,
			photos: isEditing ? formData.photos : [], // we will fill this after uploading photos to supabase
			link: formData.link?.trim() || null,
			blogPosts: splitBlogPosts.filter((post) => post !== ""),
			launchDate: formData.launchDate || null,
			visible: formData.visible,
		};

		setUploading(true);

		try {
			// Only upload new photos if files are selected
			if (files.length > 0) {
				const photosFormData = new FormData();
				files.forEach((file) => {
					photosFormData.append("files", file);
				});
				photosFormData.append("bucket", "photos");

				const photosResponse = await fetch("/api/db/photos", {
					method: "POST",
					body: photosFormData,
				});

				if (!photosResponse.ok) {
					const errorData = await photosResponse.json();
					toast.error(`Error uploading photos: ${errorData.error}`);
					setUploading(false);
					return;
				}

				const photosData = await photosResponse.json();

				if (photosData.urls && photosData.success) {
					// Append new photos to existing ones (for editing) or replace (for new project)
					projectData.photos = isEditing
						? [...projectData.photos, ...photosData.urls]
						: photosData.urls;
				} else {
					toast.error(
						"Error while uploading photos. Please try again."
					);
					setUploading(false);
					return;
				}
			}

			if (isEditing) {
				// update existing project
				await updateProject({
					...projectData,
				});
			} else {
				// create new project
				await createProject({
					...projectData,
				});
			}

			resetFormData();
			onProjectSaved?.(); // Call callback if provided
		} catch (error) {
			toast.error(
				`Error ${isEditing ? "updating" : "uploading"} project: ${
					error instanceof Error ? error.message : "Unknown error"
				}`
			);
		} finally {
			setUploading(false);
			onOpenChange(false);
		}
	};

	const handleRemoveExistingPhoto = (photoIndex: number) => {
		const newPhotos = formData.photos.filter((_, i) => i !== photoIndex);
		setFormData({
			...formData,
			photos: newPhotos,
		});
	};

	// Handle removing new file uploads
	const handleRemoveNewFile = (fileIndex: number) => {
		const newFiles = files.filter((_, i) => i !== fileIndex);
		setFiles(newFiles);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogTrigger asChild>
				{isEditing && triggerChild ? (
					triggerChild
				) : (
					<Button className="w-fit" size="lg">
						<FolderOpenIcon weight="fill" className="size=5" />
						Add new project to{" "}
						<span className="text-yellow bg-accent px-2 rounded-sm">
							/projects
						</span>
						<PlusIcon className="size-4" weight="bold" />
					</Button>
				)}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						{isEditing ? "Edit project" : "Create new project"}
					</DialogTitle>
					<DialogDescription className="hidden">
						{isEditing
							? "Update project details here"
							: "This is where the magic happens"}
					</DialogDescription>
				</DialogHeader>
				<Button
					className="absolute py-0.5 top-3 right-11"
					onClick={() => {
						resetFormData();
					}}
					disabled={uploading}
				>
					Reset form
				</Button>

				<div className="flex flex-col gap-4 w-full">
					<div className="flex flex-col gap-1 w-full">
						<label
							className="text-sm font-semibold font-sans"
							htmlFor="project-title"
						>
							Title*
						</label>
						<Input
							type="text"
							placeholder="Project title"
							id="project-title"
							value={formData.title}
							onChange={(e) =>
								setFormData({
									...formData,
									title: e.target.value,
								})
							}
							autoCorrect="off"
							disabled={uploading}
						/>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<label
							className="text-sm font-semibold font-sans"
							htmlFor="project-description"
						>
							Description
						</label>
						<Textarea
							placeholder="Project description"
							id="project-description"
							value={formData.description || ""}
							onChange={(e) =>
								setFormData({
									...formData,
									description: e.target.value,
								})
							}
							disabled={uploading}
						/>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<label
							className="text-sm font-semibold font-sans"
							htmlFor="project-slug"
						>
							Slug* (used as identifier, must be unique)
						</label>
						<div className="flex flex-row items-center gap-2">
							<span className="text-sm font-sans">
								https://www.cbrock.dev/projects/
							</span>
							<Input
								type="text"
								placeholder="some-project-slug"
								id="project-slug"
								value={formData.slug}
								onChange={(e) =>
									setFormData({
										...formData,
										slug: e.target.value,
									})
								}
								autoCorrect="off"
								disabled={uploading}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<label
							className="text-sm font-semibold font-sans"
							htmlFor="technologies"
						>
							Technologies
						</label>
						<TechnologiesSelector
							selectedTechnologies={formData.technologies}
							setSelectedTechnologies={(technologies) =>
								setFormData({
									...formData,
									technologies: technologies,
								})
							}
							disabled={uploading}
						/>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<label
							className="text-sm font-semibold font-sans"
							htmlFor="project-link"
						>
							Link
						</label>
						<Input
							type="text"
							placeholder="Project link"
							id="project-link"
							value={formData.link || ""}
							onChange={(e) =>
								setFormData({
									...formData,
									link: e.target.value,
								})
							}
							autoCorrect="off"
							disabled={uploading}
						/>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<label
							className="text-sm font-semibold font-sans"
							htmlFor="project-launch-date"
						>
							Launch date
						</label>
						<Input
							type="date"
							placeholder="Project launch date"
							id="project-launch-date"
							value={
								formData.launchDate?.toISOString().split("T")[0]
							}
							onChange={(e) =>
								setFormData({
									...formData,
									launchDate: new Date(e.target.value),
								})
							}
							autoCorrect="off"
							disabled={uploading}
						/>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<label
							className="text-sm font-semibold font-sans"
							htmlFor="project-blog-posts"
						>
							Blog posts (links separated by commas)
						</label>
						<Textarea
							placeholder="Blog post links"
							id="project-blog-posts"
							value={formData.blogPosts}
							onChange={(e) =>
								setFormData({
									...formData,
									blogPosts: e.target.value, // will be parsed into an array
								})
							}
							disabled={uploading}
						/>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<label
							className="text-sm font-semibold font-sans"
							htmlFor="project-photos"
						>
							Photos (recommended aspect ratio 16:9)
						</label>
						<Input
							type="file"
							multiple
							accept="image/*"
							id="project-photos"
							onChange={(e) => {
								const newFiles = Array.from(
									e.target.files || []
								);
								setFiles((prevFiles) => [
									...prevFiles,
									...newFiles,
								]);
							}}
							className="border-dashed cursor-pointer text-foreground/50"
							disabled={uploading}
						/>

						{/* display existing photos (for editing) */}
						{isEditing && formData.photos.length > 0 && (
							<div className="mt-2">
								<span className="text-xs font-medium text-foreground/70">
									Existing photos:
								</span>
								<div className="flex flex-wrap gap-2 mt-1">
									{formData.photos.map((photoUrl, index) => (
										<div
											key={`existing-${index}`}
											className="relative"
										>
											<Image
												src={photoUrl}
												alt={`Existing photo ${
													index + 1
												}`}
												width={100}
												height={100}
												className="w-20 h-20 object-cover rounded border"
											/>
											<button
												type="button"
												onClick={() =>
													handleRemoveExistingPhoto(
														index
													)
												}
												disabled={uploading}
												className="absolute cursor-pointer -top-1 -right-1 bg-red hover:brightness-75 text-foreground rounded-full w-4 h-4 flex items-center justify-center text-xs disabled:opacity-50 disabled:pointer-events-none"
											>
												<XIcon weight="bold" />
											</button>
										</div>
									))}
								</div>
							</div>
						)}

						{/* display new file uploads */}
						{files.length > 0 && (
							<div className="mt-2">
								{isEditing && (
									<span className="text-xs font-medium text-foreground/70">
										New photos to upload:
									</span>
								)}
								<div className="flex flex-wrap gap-2 mt-1">
									{files.map((photo, index) => {
										const objectUrl =
											URL.createObjectURL(photo);
										return (
											<div
												key={`new-${index}`}
												className="relative"
											>
												<Image
													src={objectUrl}
													alt={`New photo ${
														index + 1
													}`}
													width={100}
													height={100}
													className="w-20 h-20 object-cover rounded border"
												/>
												<button
													type="button"
													onClick={() => {
														handleRemoveNewFile(
															index
														);
														URL.revokeObjectURL(
															objectUrl
														);
													}}
													disabled={uploading}
													className="absolute cursor-pointer -top-1 -right-1 bg-red hover:brightness-75 text-foreground rounded-full w-4 h-4 flex items-center justify-center text-xs disabled:opacity-50 disabled:pointer-events-none"
												>
													<XIcon weight="bold" />
												</button>
											</div>
										);
									})}
								</div>
							</div>
						)}
					</div>
					<div className="flex flex-col gap-1 w-full">
						<label
							className="text-sm font-semibold font-sans"
							htmlFor="project-visibility"
						>
							Visibility
						</label>
						<div className="flex flex-row items-center gap-2">
							<Checkbox
								checked={formData.visible}
								onCheckedChange={(checked) =>
									setFormData({
										...formData,
										visible: !!checked.valueOf(),
									})
								}
							/>
							<span className="text-sm font-sans">
								Make this project visible on the public{" "}
								<span className="text-yellow bg-accent px-1 rounded-sm">
									/projects
								</span>{" "}
								page?
							</span>
						</div>
					</div>
					<div className="flex flex-row items-center justify-end gap-2 mt-6">
						<Button
							variant="default"
							size="lg"
							disabled={uploading}
							onClick={() => onOpenChange(false)}
						>
							Cancel
							<XIcon weight="bold" className="size-4" />
						</Button>
						<Button
							variant="confirm"
							size="lg"
							onClick={() => handleCreateProject()}
							disabled={uploading}
						>
							{isEditing ? "Update project" : "Create project"}
							{uploading ? (
								<CircleNotchIcon
									weight="bold"
									className="size-4 animate-spin"
								/>
							) : (
								<CheckIcon weight="bold" className="size-4" />
							)}
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
