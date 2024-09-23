import React from 'react';
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

const CustomLink = ({text,link}:{text:string,link:string}) => {
    return (
        <Link href={link} target="_blank" className="flex justify-center items-center gap-1 px-3">
            <p className="text-amber-50 hover:text-amber-100">{text}</p>
            <ArrowUpRight />
        </Link>
    );
};

export default CustomLink;