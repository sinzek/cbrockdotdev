import { cn } from "@/lib/utils";
import { CaretDownIcon } from "@phosphor-icons/react";
import React from "react";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface MultiSelectProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	options: string[];
	selectedOptions: string[];
	onSelect: (option: string) => void;
	onDeselect: (option: string) => void;
	placeholder?: string;
	disabled?: boolean;
}

export function MultiSelect({
	open,
	onOpenChange,
	options,
	selectedOptions,
	onSelect,
	onDeselect,
	placeholder,
	disabled = false,
}: MultiSelectProps) {
	const [searchQuery, setSearchQuery] = React.useState("");

	const filteredOptions = options.filter((option) => option.toLowerCase().includes(searchQuery.toLowerCase()));

	return (
		<Popover open={open} onOpenChange={onOpenChange} modal={false}>
			<PopoverTrigger asChild>
				<button
					className={cn(
						"group flex items-center gap-2 px-3 min-h-9 border border-foreground/25 bg-foreground/5 hover:border-foreground text-sm rounded-sm cursor-pointer text-left transition-all disabled:opacity-50 disabled:pointer-events-none",
						open && "ring-[2px] ring-yellow/75 border-foreground"
					)}
					disabled={disabled}
				>
					{selectedOptions.length > 0 ? (
						selectedOptions.join(", ")
					) : (
						<span className="text-foreground/50">{placeholder || "Select options"}</span>
					)}
					<span
						className={cn(
							"ml-auto transition-all text-foreground/50 group-hover:text-foreground",
							open && "-rotate-90 text-foreground"
						)}
					>
						<CaretDownIcon weight="duotone" size={16} />
					</span>
				</button>
			</PopoverTrigger>
			<PopoverContent className="p-1" onPointerDownOutside={(e) => e.preventDefault()}>
				<Input
					className="w-full mb-2"
					placeholder="🔍 Search..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<div className="max-h-72 overflow-y-auto pr-1 space-y-0.5" onWheel={(e) => e.stopPropagation()}>
					{filteredOptions.map((option) => (
						<div
							key={option}
							className="flex items-center gap-2 px-2 py-1 hover:bg-yellow/25 rounded-sm cursor-pointer"
							onClick={() => {
								if (selectedOptions.includes(option)) {
									onDeselect(option);
								} else {
									onSelect(option);
								}
							}}
						>
							<input
								type="checkbox"
								checked={selectedOptions.includes(option)}
								onChange={() => {
									if (selectedOptions.includes(option)) {
										onDeselect(option);
									} else {
										onSelect(option);
									}
								}}
								className="cursor-pointer w-4 h-4"
							/>
							<label className="cursor-pointer">{option}</label>
						</div>
					))}
				</div>
			</PopoverContent>
		</Popover>
	);
}
