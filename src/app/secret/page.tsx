"use client";

import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import {
	PlusIcon,
	ChatCircleDotsIcon,
	ReadCvLogoIcon,
	GithubLogoIcon,
	ArrowUpRightIcon,
	UploadSimpleIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { ProjectModal } from "./components/project-modal";
import React from "react";
import Projects from "@/components/projects";
import { useConfirm } from "./hooks/useConfirm";

export default function SecretPage() {
	const [newProjectOpen, setNewProjectOpen] = React.useState(false);
	const { confirm, ConfirmDialog } = useConfirm();

	return (
		<>
			<Toaster />

			<div className="flex w-full max-w-4xl flex-col gap-20">
				{ConfirmDialog}
				<section className="flex flex-col gap-12">
					<h1 className="text-4xl font-semibold font-header">
						Welcome back bro
					</h1>
					<div className="flex flex-row items-center gap-4 flex-wrap">
						<ProjectModal
							open={newProjectOpen}
							onOpenChange={setNewProjectOpen}
						/>
						<Button className="w-fit" size="lg">
							<ChatCircleDotsIcon
								weight="fill"
								className="size=5"
							/>
							Create new blog post
							<PlusIcon className="size-4" weight="bold" />
						</Button>
						<Button className="w-fit" size="lg">
							<ReadCvLogoIcon weight="fill" className="size=5" />
							Upload latest resume
							<UploadSimpleIcon
								className="size-4"
								weight="bold"
							/>
						</Button>
						<Link
							href="https://www.overleaf.com/project/6514ada93990fb42467e0d41"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button className="w-fit" size="lg">
								<ReadCvLogoIcon
									weight="fill"
									className="size=5"
								/>
								Edit resume on Overleaf
								<ArrowUpRightIcon
									className="size-4"
									weight="bold"
								/>
							</Button>
						</Link>
						<Link
							href="https://www.overleaf.com/project/6514ada93990fb42467e0d41"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button className="w-fit" size="lg">
								<GithubLogoIcon
									className="size-4"
									weight="fill"
								/>
								GitHub Repo
								<ArrowUpRightIcon
									className="size-4"
									weight="bold"
								/>
							</Button>
						</Link>
					</div>
					<Projects secret confirm={confirm} />
				</section>
			</div>
		</>
	);
}
