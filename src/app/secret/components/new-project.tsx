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
import { FolderOpenIcon, PlusIcon, XIcon } from "@phosphor-icons/react";
import React from "react";
import { TechnologiesSelector } from "./technologiesSelector";
import Image from "next/image";

interface NewProjectProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function NewProject({ open, onOpenChange }: NewProjectProps) {
	const [formData, setFormData] = React.useState({
		title: "",
		description: "",
		slug: "",
		technologies: [] as string[],
		photos: [] as string[],
		link: "",
		blogPosts: "",
		launchDate: new Date(),
	});

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
						setFormData({
							title: "",
							description: "",
							slug: "",
							technologies: [],
							photos: [],
							link: "",
							blogPosts: "",
							launchDate: new Date(),
						});
					}}
				>
					Reset form
				</Button>

				<div className="flex flex-col gap-4 w-full">
					<div className="flex flex-col gap-1 w-full">
						<label
							className="text-sm font-semibold font-sans"
							htmlFor="project-title"
						>
							Title
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
							value={formData.description}
							onChange={(e) =>
								setFormData({
									...formData,
									description: e.target.value,
								})
							}
						/>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<label
							className="text-sm font-semibold font-sans"
							htmlFor="project-slug"
						>
							Slug
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
							value={formData.link}
							onChange={(e) =>
								setFormData({
									...formData,
									link: e.target.value,
								})
							}
							autoCorrect="off"
						/>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<label
							className="text-sm font-semibold font-sans"
							htmlFor="project-launch-date"
						>
							Launch date?
						</label>
						<Input
							type="date"
							placeholder="Project launch date"
							id="project-launch-date"
							value={
								formData.launchDate.toISOString().split("T")[0]
							}
							onChange={(e) =>
								setFormData({
									...formData,
									launchDate: new Date(e.target.value),
								})
							}
							autoCorrect="off"
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
								const fileUrls = files.map((file) =>
									URL.createObjectURL(file)
								);
								setFormData({
									...formData,
									photos: [...formData.photos, ...fileUrls],
								});
							}}
							className="border-dashed cursor-pointer text-foreground/50"
						/>
						{/* Display selected photos */}
						{formData.photos.length > 0 && (
							<div className="flex flex-wrap gap-2 mt-2">
								{formData.photos.map((photo, index) => (
									<div key={index} className="relative">
										<Image
											src={photo}
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
														(_, i) => i !== index
													);
												setFormData({
													...formData,
													photos: newPhotos,
												});
											}}
											className="absolute cursor-pointer -top-1 -right-1 bg-red hover:brightness-75 text-foreground rounded-full w-4 h-4 flex items-center justify-center text-xs"
										>
											<XIcon weight="bold" />
										</button>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
