'use client'

import categories from '@/data/categories'
import Link from 'next/link'

export default function FooterCategories(){

    return (
        <div className="flex items-center flex-nowrap min-h-37.5 my-12 overflow-x-hidden">
            <div className="flex flex-nowrap animate-slide py-6">
                {categories.map(category =>(

                    <Link href={`/shots/popular/${category.slug}`} className="flex flex-col gap-6 ml-12"  key={category.slug}>
                        <div style={{boxShadow: `7px -6px 0 -1px ${category.stackColors[0]},10px -8px 0 -1px white  ,15px -12px 0 -1px ${category.stackColors[1]}`}}  className="w-50 h-37.5 rounded-lg">
                            <img src={category.image} alt="" className="rounded-lg" />
                        </div>
                        <span className="font-semibold">{category.title}</span>
                    </Link>

                ))}
            </div>
           
            <div className="flex flex-nowrap animate-slide py-6">
                {categories.map(category =>(

                    <Link href={`/shots/popular/${category.slug}`} className="flex flex-col gap-6 ml-12"  key={category.slug}>
                        <div style={{boxShadow: `7px -6px 0 -1px ${category.stackColors[0]},10px -8px 0 -1px white  ,15px -12px 0 -1px ${category.stackColors[1]}`}}  className="w-50 h-37.5 rounded-lg">
                            <img src={category.image} alt="" className="rounded-lg" />
                        </div>
                        <span className="font-semibold">{category.title}</span>
                    </Link>

                ))}
            </div>
        </div>   
    )
}