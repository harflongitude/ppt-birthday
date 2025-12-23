import Folder, { FolderSkeleton } from "@/components/folder";
import { ContentFolderProps } from "./content-folder";
import Card from "@/components/card";
import Button from "@/components/button";

export type mimeType = "image" | "video" | "none" | undefined

export default function CompleteContent({ folder }: { folder: ContentFolderProps[] }) {
    console.log(folder);
    return (
        <div className="flex flex-col justify-center items-center gap-8 p-8 md:flex-row md:flex-wrap md:justify-center">
            <Button label="Balik lagi!" type="link" src="/main" className=" fixed bottom-0 z-20 mb-4 w-fit right-4"/>
            <h1 className="text-4xl font-bold text-white text-shadow-sm text-center">
                Yeay! Intinya Bahagia Terus Ya... Dimanapun dan dengan siapapun kamu berada. Maaf kalau terlalu yap yap yaping dan alay.
            </h1>
            {folder.map((item) => (
            
                <Folder key={item.folderName} title={item.folderName} href={`/complete/${item.folderId}`}>
                    {item.contents.map((content) => {
                        const type = content.mimeType.substring(0, content.mimeType.indexOf("/")) as mimeType;
                        return( 
                        <Card key={content.id} title={content.name} mediaType={type}/>
                    )})}
                </Folder>
            ))}
        </div>
    )
}