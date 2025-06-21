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
import { TechnologiesSelector } from "./technologiesSelector";
import Image from "next/image";
import { toast } from "sonner";
import { ProjectType } from "@/lib/types";

interface NewProjectProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function NewProject({ open, onOpenChange }: NewProjectProps) {
	const [formData, setFormData] = React.useState({
		title: "",
		description: null as string | null,
		slug: "",
		technologies: [] as string[],
		photos: [] as string[],
		link: null as string | null,
		blogPosts: "",
		launchDate: undefined as Date | undefined,
	});
	const [uploading, setUploading] = React.useState(false);
	const [files, setFiles] = React.useState<File[]>([]);

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
		});
		setFiles([]);
	};

	const handleCreateProject = async () => {
		// here we will convert formData to json and save it to supabase storage
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

		const newProject: ProjectType = {
			slug: formData.slug.trim(),
			title: formData.title.trim(),
			description: formData.description?.trim() || null,
			technologies: formData.technologies,
			photos: [], // we will fill this after uploading photos to supabase
			link: formData.link?.trim() || null,
			blogPosts: splitBlogPosts.filter((post) => post !== ""),
			launchDate: formData.launchDate || null,
		};

		setUploading(true);

		try {
			const photosFormData = new FormData();
			files.forEach((file) => {
				photosFormData.append("files", file);
			});
			photosFormData.append("bucket", "photos");

			const photosResponse = await fetch("/api/upload-photos", {
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

			if (photosData.urls) {
				newProject.photos = photosData.urls;
			} else {
				toast.error("No photos uploaded successfully.");
				setUploading(false);
				return;
			}

			const response = await fetch("/api/upload-json", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					filename: `projects/${newProject.slug}.json`,
					data: newProject,
				}),
			});

			if (!response.ok) {
				const errorData = await response.json();
				toast.error(`Error uploading project: ${errorData.error}`);
				setUploading(false);
				return;
			}

			toast.success(
				`Project "${newProject.title}" created successfully!`
			);
		} catch (error) {
			toast.error(
				`Error uploading project: ${
					error instanceof Error ? error.message : "Unknown error"
				}`
			);
		} finally {
			setUploading(false);
		}

		toast.success(`Project "${newProject.title}" created successfully!`);
		onOpenChange(false);
		resetFormData();
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogTrigger asChild>
				<Button className="w-fit" size="lg">
					<FolderOpenIcon weight="fill" className="size=5" />
					Add new project to{" "}
					<span className="text-yellow bg-accent px-2 rounded-sm">
						/projects
					</span>
					<PlusIcon className="size-4" weight="bold" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create new project</DialogTitle>
					<DialogDescription>Yippee!!!</DialogDescription>
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
								const files = Array.from(e.target.files || []);
								setFiles((prevFiles) => [
									...prevFiles,
									...files,
								]);
							}}
							className="border-dashed cursor-pointer text-foreground/50"
							disabled={uploading}
						/>
						{/* Display selected photos */}
						{files.length > 0 && (
							<div className="flex flex-wrap gap-2 mt-2">
								{files.map((photo, index) => {
									const objectUrl =
										URL.createObjectURL(photo);
									return (
										<div key={index} className="relative">
											<Image
												src={objectUrl}
												alt={`Preview ${index + 1}`}
												width={100}
												height={100}
												className="w-20 h-20 object-cover rounded border"
											/>
											<button
												type="button"
												onClick={() => {
													const newPhotos =
														formData.photos.filter(
															(_, i) =>
																i !== index
														);
													setFormData({
														...formData,
														photos: newPhotos,
													});
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
						)}
					</div>
					<div className="flex flex-row items-center justify-end gap-2">
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
							Create project
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
