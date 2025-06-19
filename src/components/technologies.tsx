import StackIcon from "tech-stack-icons";
import { technologies } from "@/lib/constants";

export const Technologies = () => {
	return (
		<>
			<div className="flex flex-row items-center flex-wrap gap-10">
				{technologies.map((tech) => {
					return (
						<div
							className="group flex flex-col items-center justify-center gap-2"
							key={tech.name}
						>
							<StackIcon name={tech.icon} className="w-18" />
							<span className="pointer-events-none text-sm font-sans group-hover:text-foreground text-foreground/50 transition-colors duration-200 font-light text-center">
								{tech.name}
							</span>
						</div>
					);
				})}
			</div>
		</>
	);
};
