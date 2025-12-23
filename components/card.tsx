import { cn } from "@/utils/cn";
import Image from "next/image";

type CardProps = {
    title: string;
    description?: string;
    mediaType?: "image" | "video" | "none";
    mediaSrc?: string;
    className?: string;
};

export default function Card({ title, description, mediaType = "none", mediaSrc, className }: CardProps) {
    return (
        <div
            className={cn(
                "relative min-h-40 bg-pink-200/20 backdrop-blur-md border border-pink-300/30 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-pink-200/30 hover:shadow-xl hover:shadow-pink-500/20 cursor-pointer",
                className
            )}
        >
            {/* Media Section */}
            {mediaType !== "none" && mediaSrc && (
                <div className="w-full h-56 md:h-40 bg-pink-900/20 overflow-hidden">
                    {mediaType === "image" ? (
                        <Image
                            src={mediaSrc}
                            alt={title}
                            width={200}
                            height={224}
                            className="w-full h-full object-cover"
                        />
                    ) : mediaType === "video" ? (
                        <video
                            src={"/api/video/" + mediaSrc}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            playsInline
                        />
                    ) : null}
                </div>
            )}
            
            {/* Content Section */}
            <div className="p-3">
                <h3 className="text-sm font-semibold text-pink-100 truncate">{title}</h3>
                {description && (
                    <p className="text-xs text-pink-200/70 mt-1 truncate">{description}</p>
                )}
            </div>
        </div>
    );
}

// Skeleton Component
export function CardSkeleton({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative bg-pink-200/10 backdrop-blur-md border border-pink-300/20 rounded-lg overflow-hidden animate-pulse",
                className
            )}
        >
            {/* Media skeleton */}
            <div className="w-full h-24 bg-pink-900/20"></div>
            
            {/* Content skeleton */}
            <div className="p-3 space-y-2">
                <div className="h-4 bg-pink-300/30 rounded w-3/4"></div>
                <div className="h-3 bg-pink-300/20 rounded w-1/2"></div>
            </div>
        </div>
    );
}