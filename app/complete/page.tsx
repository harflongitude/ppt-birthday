import AudioPlayer from "@/components/audio-player";
import {  getDriveFolders, getFolderContents } from "@/data/drive-api";
import CompleteContent from "@/module/complete";
import { ContentFolderProps } from "@/module/content-folder";
import Layout from "@/module/layout";
import Link from "next/link";


export default async function CompletePage() {
    const folder = await getDriveFolders() ?? []
    const file = await Promise.all(folder.map(async (item) => {
        if (item.name === 'Hehe') {
            return; 
        }
        const contents = await getFolderContents(item.id!);
        console.log(contents);
        return { folderName: item.name, folderId: item.id,contents };
    }));
    const clear = file.filter(Boolean);
    console.log(clear);
    return (
        <>
            <CompleteContent folder={clear as ContentFolderProps[]} />
            <Layout layout={"one music"}/>
        </>
    )
}