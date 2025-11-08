import { Bookmark, Eye, EyeClosed, Heart, HeartCrack } from "lucide-react";
import Link from "next/link";

export function Shot({thumbnail, link, title, author, likes, views}){
    function format(count){
        if(count >= 1000000){
            return `${(count / 1000000).toFixed(1)}M`
        }

        if(count >= 1000){
            return `${(count / 1000).toFixed(1)}K`
        }

        return count
    }

    return (
        <div className="flex flex-col items-center rounded-2xl">
            <div className="min-w-full relative group min-h-[266px] bg-gray-300 rounded-2xl">
                <img src={thumbnail.src} alt={thumbnail.alt} className="rounded-lg"/>
                <Link href={link} className="absolute inset-0"></Link>
                <div className="justify-between items-center absolute left-0 right-0 bottom-0 z-50 p-4 hidden group-hover:flex duration-200 transition overly-bg">
                    <h2 className="text-white capitalize font-semibold truncate">{title}</h2>
                    <div className="flex items-center gap-2">
                        <button className="bg-white p-2.5 rounded-full cursor-pointer">
                            <Bookmark className="size-4 text-gray-800" />
                        </button>
                        <button className="bg-white p-2.5 rounded-full cursor-pointer">
                            <Heart className="size-4 text-gray-800" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center py-2">
                <div className="flex items-center gap-2">
                    <img src={author.avatar} alt={author.name} className="size-6 rounded-full"/>
                    <span className="capitalize">{author.name}</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-0.5">
                        <HeartCrack className="size-4 fill-gray-400 text-gray-400"/>
                        <span className="text-sm text-gray-800">{format(likes)}</span>
                    </div>
                     <div className="flex items-center gap-0.5">
                        <Eye className="size-4 text-gray-400"/>
                        <span className="text-sm text-gray-800">{format(views)}</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}