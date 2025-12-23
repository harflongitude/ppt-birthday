import { cn } from "@/utils/cn"
import Link from "next/link"

export default function Button({ label, className, type = "button", src, ...props }: { label: string, className:string, type?: "button" | "link", src?: string } ) {
    if (type === "link") {
        return (
            <Link href={src || "#"} className={cn("px-4 py-2 bg-white/60 backdrop-blur-lg border border-white/70 shadow-2xl text-pink-300 rounded", className)} {...props}>
                {label}
            </Link>
        );
    }
    return (
        <button className={cn("px-4 py-2 bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl text-pink-200 rounded", className)} {...props}>
            {label}
        </button>
    );
}