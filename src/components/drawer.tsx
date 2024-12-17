"use client";

import avatar from "../../../public/avatar.png"
import deploy from "../../../public/deploy.png"
import calender from "../../../public/calender.png"
import background from "../../../public/background.png"
import bar from "../../../public/bar.png"
import breadcrumbs from "../../../public/breadcrumbs.png"
import stats from "../../../public/stats.png"
import styling from "../../../public/styling.png"
import graph from "../../../public/graph.png"
import mode from "../../../public/mode.png"

import { useEffect, useState } from "react";
import {
Carousel,
CarouselApi,
CarouselContent,
CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export const Drawer = () => {
const [api, setApi] = useState<CarouselApi>();
const [current, setCurrent] = useState(0);

const images = [
    breadcrumbs,
    deploy,
    calender,
    avatar,
    mode,
    graph,
    styling,
    background,
    bar,
    stats,
]

useEffect(() => {
    if (!api) {
    return;
    }

    setTimeout(() => {
    if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
    } else {
        api.scrollNext();
        setCurrent(current + 1);
    }
    }, 1000);
}, [api, current]);

return (
    <div className="w-full py-20 lg:py-0 lg:px-10">
    <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-10 items-center">
        <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left">
            The ReadyMade UI Features
        </h3>
        <div className="relative w-full col-span-4">
            <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
            <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
                {images.map((item, index) => (
                <CarouselItem
                    className="basis-1/4 lg:basis-1/6"
                    key={index}
                >
                    <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                    <Image src={item} alt="images"></Image>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            </Carousel>
        </div>
        </div>
    </div>
    </div>
);
};