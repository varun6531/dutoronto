import React from "react";
import Link from "next/link";

const Hero = ({heading, message}) => {
    return (
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]"/>
            <div className="p-5 text-white z-[2] mt-[-10rem]">
                <h2 className="text-5xl font-bold">{heading}</h2>
                <p className="py-6 text-xl">{message}</p>
                <Link href='/about'><button className="px-8 py-2 border">Learn More</button></Link>
            </div>
        </div>
    )
}

export default Hero;