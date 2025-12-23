import Card from "@/components/card";
import { mimeType } from "./complete";
import Link from "next/link";
import Button from "@/components/button";

export type CardFile = {
    id: string;
    name: string;
    mimeType: string;
    thumbnailLink?: string;
    webContentLink?: string;
}

export default function DetailComplete({ file }: { file: CardFile[] }){
    const files = Array.isArray(file) ? file : [];
    console.log(files);
    return (
        <>
        <Button label="Balik lagi!" type="link" src="/complete" className=" fixed bottom-0 z-20 mb-4 w-fit right-4"/>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-8">
            
            {files.map((item) => {
                const type = item.mimeType.substring(0, item.mimeType.indexOf("/")) as mimeType;
                return(
<Card key={item.id} title={item.name} mediaType={type} mediaSrc={type === "image" ? item.thumbnailLink || "" : item.id || ""} />
                )
            }
                
            )}
        </div>
        </>
    )
}