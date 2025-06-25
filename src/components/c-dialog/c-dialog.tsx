import React from "react";

// my own custom dialog solution, basically just a barebones version of radix dialog

type cDialogContextType = {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
	onOpenChange?: (open: boolean) => void;
};

export const cDialogContext = React.createContext<
	cDialogContextType | undefined
>(undefined);

interface CDialogOptions {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
}

export function CDialog({ children, open, onOpenChange }: CDialogOptions) {
	const [isOpen, setIsOpen] = React.useState<boolean>(open || false);

	const setIsOpenCallback = (isItOpen: boolean) => {
		setIsOpen(isItOpen);
		onOpenChange?.(isItOpen);
	};
	// I think this is better than the useEffect approach tbh

	return (
		<cDialogContext.Provider
			value={{ isOpen, setIsOpen: setIsOpenCallback }}
		>
			{children}
		</cDialogContext.Provider>
	);
}

export function useCDialog() {
	const context = React.useContext(cDialogContext);
	if (!context) {
		throw new Error("useCDialog must be used within a CDialog");
	}
	return context;
}
