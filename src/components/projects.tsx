"use client";

import { ConfirmOptions } from "@/app/secret/hooks/useConfirm";
import { useProjects } from "@/context/project-context";
import { useMobile } from "@/hooks/useMobile";
import { ArrowsOutIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { formatDateToMY } from "../lib/utils";
import { AnimationWrapper } from "./animations";
import { SecretProjectMenu } from "./secret-project-menu";
import { Button } from "./ui/button";

export default function Projects({
	secret,
	confirm,
}: {
	secret?: boolean;
	confirm?: (opts: ConfirmOptions) => Promise<boolean>;
}) {
	const { projects, projectsLoading } = useProjects();
	const isMobile = useMobile();

	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{projects && projects.length > 0 ? (
					projects.map((project, index) => {
						return (
							<AnimationWrapper
								key={`projects-${project.slug}`}
								delay={index * 0.05}
								direction={isMobile ? "right" : "up"}
								whenInView
								className="flex"
							>
								<div className="group relative flex flex-col w-full rounded-lg overflow-hidden border border-foreground/20 border-t-foreground/40 hover:border-red/50 hover:border-t-red/75 dual-shadow-red-hover transition-all">
									{project.photos.length > 0 ? (
										<Image
											src={project.photos[0]}
											alt={`Screenshot of ${project.title}`}
											width={1280}
											height={720}
											className="object-contain aspect-video border-b border-foreground/10"
										/>
									) : (
										<div className="aspect-video bg-red/50 flex items-center justify-center">
											<p className="text-foreground">No image available.</p>
										</div>
									)}
									<div className="h-full bg-gradient-to-b from-foreground/5 to-foreground/10 to-5% px-4 pt-2 pb-16 space-y-2 rounded-b-lg">
										<div className="w-full flex flex-row items-center justify-between">
											<h3 className="group-hover:text-red font-header transition-all duration-200 text-2xl">
												{project.title}
											</h3>
											{project.launchDate && (
												<p className="text-xl text-foreground/70 font-extralight">
													{formatDateToMY(new Date(project.launchDate))}
												</p>
											)}
										</div>
										<p className="text-sm font-bold text-red font-sans mt-4">
											{project.technologies.sort((a, b) => a.localeCompare(b)).join(", ")}
										</p>
										<p className="text-base font-light text-foreground/75 font-sans mt-4">
											{project.description}
										</p>
										<div className="absolute flex flex-row items-center gap-2 bottom-4">
											{project.slug !== "null" && (
												<Link href={`/projects/${project.slug}`}>
													<Button variant="default">
														Read more
														<ArrowsOutIcon />
													</Button>
												</Link>
											)}
											{project.link && (
												<Link href={project.link} target="_blank" rel="noopener noreferrer">
													<Button variant="confirm" className="font-semibold">
														Visit site
														<ArrowUpRightIcon weight="bold" />
													</Button>
												</Link>
											)}
										</div>
									</div>
									{secret && confirm && (
										<div className="absolute top-4 right-4">
											<SecretProjectMenu confirm={confirm} project={project} />
										</div>
									)}
								</div>
							</AnimationWrapper>
						);
					})
				) : (
					<div className="col-span-1 lg:col-span-2 text-center">
						{projectsLoading ? <p>Loading projects...</p> : <p>No projects found.</p>}
					</div>
				)}
			</div>
		</>
	);
}
