import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type FolderProps = {
    title: string;
    href: string;
    children?: ReactNode;
    className?: string;
};

export default function Folder({ title, href, children, className }: FolderProps) {
    // Limit children to 5 cards
    const cards = Array.isArray(children) ? children.slice(0, 5) : children;
    
    return (
        <Link href={href} className={cn("group block relative", className)}>
            {/* Folder Tab */}
            <div className="relative w-64 h-48">
                {/* Tab atas folder */}
                <div className="absolute top-0 left-0 w-24 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-t-lg shadow-md border-t-2 border-l-2 border-r border-pink-300 group-hover:from-pink-300 group-hover:to-pink-400 transition-all duration-300"></div>
                
                {/* Body folder */}
                <div className="absolute top-6 left-0 w-full h-42 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 rounded-tr-lg rounded-b-lg shadow-xl shadow-pink-500/30 border-2 border-pink-300 group-hover:from-pink-300 group-hover:via-pink-400 group-hover:to-pink-500 group-hover:shadow-2xl group-hover:shadow-pink-500/50 transition-all duration-300">
                    {/* Inner shadow effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-tr-lg rounded-b-lg"></div>
                    
                    {/* Title di tengah */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <h2 className="text-xl font-bold text-pink-900 text-center px-4 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                            {title}
                        </h2>
                    </div>
                    
                    {/* Cards container */}
                    {cards && (
                        <div className="absolute bottom-4 left-4 right-4 flex gap-1 items-end justify-start overflow-hidden z-5">
                            {cards}
                        </div>
                    )}
                    
                    {/* Bottom edge shadow */}
                    <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-black/20 to-transparent rounded-b-lg"></div>
                </div>
                
                {/* Folder shadow */}
                <div className="absolute top-8 left-1 w-full h-42 bg-pink-900/30 rounded-tr-lg rounded-b-lg blur-md -z-10 group-hover:blur-lg transition-all duration-300"></div>
            </div>
        </Link>
    );
}

// Skeleton Component
export function FolderSkeleton({ className }: { className?: string }) {
    return (
        <div className={cn("relative animate-pulse", className)}>
            {/* Folder Tab */}
            <div className="relative w-64 h-48">
                {/* Tab atas folder */}
                <div className="absolute top-0 left-0 w-24 h-8 bg-pink-300/50 rounded-t-lg"></div>
                
                {/* Body folder */}
                <div className="absolute top-6 left-0 w-full h-42 bg-pink-400/50 rounded-tr-lg rounded-b-lg">
                    {/* Title skeleton */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="h-6 w-32 bg-pink-900/30 rounded"></div>
                    </div>
                    
                    {/* Cards skeleton */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-1">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-16 h-20 bg-pink-200/20 rounded"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}