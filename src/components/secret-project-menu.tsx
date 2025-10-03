"use client";

import { ProjectModal } from "@/app/secret/components/project-modal";
import { ConfirmOptions } from "@/app/secret/hooks/useConfirm";
import { useProjects } from "@/context/project-context";
import { ProjectType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { DotsThreeVerticalIcon, PenIcon, TrashIcon } from "@phosphor-icons/react";
import React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function SecretProjectMenu({
	project,
	confirm,
}: {
	project: ProjectType;
	confirm: (opts: ConfirmOptions) => Promise<boolean>;
}) {
	const [open, setOpen] = React.useState(false);
	const [editProjectOpen, setEditProjectOpen] = React.useState(false);
	const [visible, setVisible] = React.useState(project.visible);

	const { deleteProject, updateProject } = useProjects();

	const handleDelete = async () => {
		const ok = await confirm({
			title: "Delete project",
			message: (
				<span>
					{" "}
					are you sure you want to delete the project &quot;
					<span className="text-yellow font-bold">{project.title}</span>
					&quot; from the portfolio? this action cannot be undone.{" "}
				</span>
			),
		});

		if (!ok) {
			setOpen(false);
			return;
		}

		await deleteProject(project.slug);
		setOpen(false);
	};

	const handleChangeVisibility = async (visible: boolean) => {
		const ok = await confirm({
			title: "change project visibility",
			message: `are you sure you want to ${
				visible ? "show this project on the public portfolio?" : "hide this project from the public portfolio?"
			}`,
		});

		if (!ok) {
			setOpen(false);
			return;
		}

		await updateProject({
			...project,
			visible,
		});
		setVisible(visible);
	};

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Button
					className={cn("aspect-square p-1 rounded-sm", open && "bg-yellow/25 border-yellow text-yellow")}
				>
					<DotsThreeVerticalIcon weight="bold" size={18} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
				<DropdownMenuLabel>Project actions</DropdownMenuLabel>
				<DropdownMenuItem onSelect={(e) => e.preventDefault()} className="cursor-default">
					<Checkbox
						className="group-hover:border-yellow size-4"
						checked={visible}
						onCheckedChange={(checked) => {
							handleChangeVisibility(!!checked.valueOf());
						}}
					/>
					visible?
				</DropdownMenuItem>
				<ProjectModal
					open={editProjectOpen}
					onOpenChange={(open) => {
						setEditProjectOpen(open);
						if (!open) {
							setOpen(false);
						}
					}}
					project={project}
					triggerChild={
						<DropdownMenuItem onSelect={(e) => e.preventDefault()}>
							<PenIcon />
							edit project
						</DropdownMenuItem>
					}
				/>

				<DropdownMenuItem onSelect={handleDelete}>
					<TrashIcon />
					delete project
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
