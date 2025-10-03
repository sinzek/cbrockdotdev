"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";
import { createPortal } from "react-dom";

export type ConfirmOptions = {
	title: React.ReactNode;
	message: React.ReactNode;
	onConfirm?: () => void;
	onCancel?: () => void;
	variant?: "default" | "danger";
};

export function useConfirm() {
	const [isOpen, setIsOpen] = React.useState(false);
	const [options, setOptions] = React.useState<ConfirmOptions | null>(null);
	const [resolver, setResolver] = React.useState<(result: boolean) => void>(() => () => {});
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const confirm = (opts: ConfirmOptions): Promise<boolean> => {
		setIsOpen(true);
		setOptions(opts);
		return new Promise((resolve) => {
			setResolver(() => resolve);
		});
	};

	const handleCancel = () => {
		setIsOpen(false);
		if (options?.onCancel) {
			options.onCancel();
		}
		resolver(false);
	};

	const handleConfirm = () => {
		setIsOpen(false);
		if (options?.onConfirm) {
			options.onConfirm();
		}
		resolver(true);
	};

	const dialogContent = (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent>
				<div className="flex flex-col gap-4">
					<DialogTitle
						className={cn(
							`text-2xl font-header font-semibold`,
							options?.variant === "danger" ? "text-yellow" : "text-foreground"
						)}
					>
						{options?.title}
					</DialogTitle>
					<DialogDescription className="text-base font-light font-sans text-foreground">
						{options?.message}
					</DialogDescription>
					<div className="flex flex-row justify-end items-center gap-2">
						<Button onClick={handleCancel}>Cancel</Button>
						<Button variant={options?.variant === "danger" ? "danger" : "confirm"} onClick={handleConfirm}>
							Confirm
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);

	const ConfirmDialog = mounted ? createPortal(dialogContent, document.body) : null;

	return { confirm, ConfirmDialog };
}
