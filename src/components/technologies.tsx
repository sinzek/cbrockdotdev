import StackIcon from "tech-stack-icons";
import { technologies as allTechnologies } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Technologies = ({
	technologies,
	mini,
}: {
	technologies?: { name: string; icon: string }[];
	mini?: boolean;
}) => {
	return (
		<>
			<div
				className={cn(
					"flex flex-row items-center flex-wrap",
					mini ? "gap-4" : "gap-10"
				)}
			>
				{(technologies ? technologies : allTechnologies).map((tech) => {
					return (
						<div
							className="group flex flex-col items-center justify-center gap-2"
							key={tech.name}
						>
							<StackIcon
								name={tech.icon}
								className={cn(
									"grayscale-25 hover:grayscale-0 transition-all shrink-0",
									mini ? "size-10" : "size-18"
								)}
							/>
							{!mini && (
								<span
									className={cn(
										"pointer-events-none font-sans group-hover:text-foreground text-foreground/50 transition-colors duration-200 font-light text-center",
										mini ? "text-xs" : "text-sm"
									)}
								>
									{tech.name}
								</span>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};
