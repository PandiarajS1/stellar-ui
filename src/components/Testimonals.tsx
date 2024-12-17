"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      review: "This UI library made designing interfaces so much quicker and smoother. Highly recommend for any web project!"
    },
    {
      name: "Jane Smith",
      review: "This UI library made designing interfaces so much quicker and smoother. Highly recommend for any web project!"
    },
    {
      name: "Michael Johnson",
      review: "This UI library made designing interfaces so much quicker and smoother. Highly recommend for any web project!"
    },
    {
      name: "Emily Davis",
      review: "This UI library made designing interfaces so much quicker and smoother. Highly recommend for any web project!"
    },
    {
      name: "Daniel Lee",
      review: "This UI library made designing interfaces so much quicker and smoother. Highly recommend for any web project!"
    },
    {
      name: "Sophia Clark",
      review: "This UI library made designing interfaces so much quicker and smoother. Highly recommend for any web project!"
    },
    {
      name: "Lucas Walker",
      review: "This UI library made designing interfaces so much quicker and smoother. Highly recommend for any web project!"
    },
    {
      name: "Olivia Hall",
      review: "This UI library made designing interfaces so much quicker and smoother. Highly recommend for any web project!"
    },
    {
      name: "James Martinez",
      review: "This UI library made designing interfaces so much quicker and smoother. Highly recommend for any web project!"
    },
    {
      name: "Ava Robinson",
      review: "This UI library made designing interfaces so much quicker and smoother. Highly recommend for any web project!"
    }
  ];
  

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
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40 lg:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by thousands of Developers around the world
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((person, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          Best decision
                        </h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          {person.review}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span>{person.name}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
