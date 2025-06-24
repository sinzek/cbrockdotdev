import { MultiSelect } from "@/components/ui/multi_select";
import React from "react";
import { technologies } from "@/lib/constants";

interface TechnologiesSelectorProps {
	selectedTechnologies: string[];
	setSelectedTechnologies: (technologies: string[]) => void;
	disabled?: boolean;
}

export function TechnologiesSelector({
	selectedTechnologies,
	setSelectedTechnologies,
	disabled = false,
}: TechnologiesSelectorProps) {
	const [open, setOpen] = React.useState(false);

	const technologiesButStrings = technologies.map((tech) => tech.name);

	const handleSelect = (option: string) => {
		setSelectedTechnologies([...selectedTechnologies, option]);
	};

	const handleDeselect = (option: string) => {
		setSelectedTechnologies(
			selectedTechnologies.filter((tech) => tech !== option)
		);
	};

	return (
		<MultiSelect
			open={open}
			onOpenChange={setOpen}
			options={technologiesButStrings}
			selectedOptions={selectedTechnologies}
			onSelect={handleSelect}
			onDeselect={handleDeselect}
			placeholder={"Technologies used to create the project"}
			disabled={disabled}
		/>
	);
}
