import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        // Set default theme to light when component mounts
        if (theme !== "light") {
            setTheme("light");
        }
    }, []); // Run only on component mount

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => {
                const newTheme = theme === "light" ? "dark" : "light";
                setTheme(newTheme);
                toast("Please refresh the page!", {
                    description: `Theme set to ${newTheme === "light" ? "light" : "dark"}.`,
                });
            }}
        >
            {theme === "light" ? (
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            ) : (
                <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
