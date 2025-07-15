import StackIcon from "tech-stack-icons";
import { technologies as allTechnologies } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimationWrapper } from "./animations";

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
					mini ? "gap-4" : "lg:gap-10 gap-6"
				)}
			>
				{(technologies ? technologies : allTechnologies).map(
					(tech, index) => {
						return (
							<AnimationWrapper
								key={tech.name}
								delay={index * 0.05}
								whenInView
							>
								<div className="group flex flex-col items-center justify-center gap-2">
									<StackIcon
										name={tech.icon}
										className={cn(
											"grayscale-25 hover:grayscale-0 transition-all shrink-0",
											mini
												? "size-10"
												: "lg:size-18 size-12"
										)}
									/>
									{!mini && (
										<span
											className={cn(
												"pointer-events-none font-sans group-hover:text-foreground text-foreground/50 transition-colors duration-200 font-light text-center",
												mini
													? "text-xs"
													: "text-xs lg:text-sm"
											)}
										>
											{tech.name}
										</span>
									)}
								</div>
							</AnimationWrapper>
						);
					}
				)}
			</div>
		</>
	);
};
