"use client";

import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
	DotsThreeVerticalIcon,
	PenIcon,
	TrashIcon,
} from "@phosphor-icons/react";
import { ConfirmOptions } from "@/app/secret/hooks/useConfirm";
import { Checkbox } from "./ui/checkbox";
import { ProjectType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ProjectModal } from "@/app/secret/components/project-modal";
import { useProjects } from "@/context/project-context";

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
					Are you sure you want to delete the project &quot;
					<span className="text-red font-bold">{project.title}</span>
					&quot; from the portfolio? This action cannot be undone.{" "}
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
			title: "Change project visibility",
			message: `Are you sure you want to ${
				visible
					? "show this project on the public portfolio?"
					: "hide this project from the public portfolio?"
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
					className={cn(
						"aspect-square p-1 rounded-sm",
						open && "bg-red/25 border-red text-red"
					)}
				>
					<DotsThreeVerticalIcon weight="bold" size={18} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
				<DropdownMenuLabel>Project actions</DropdownMenuLabel>
				<DropdownMenuItem
					onSelect={(e) => e.preventDefault()}
					className="cursor-default"
				>
					<Checkbox
						className="group-hover:border-red size-4"
						checked={visible}
						onCheckedChange={(checked) => {
							handleChangeVisibility(!!checked.valueOf());
						}}
					/>
					Visible?
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
							Edit project
						</DropdownMenuItem>
					}
				/>

				<DropdownMenuItem onSelect={handleDelete}>
					<TrashIcon />
					Delete project
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
