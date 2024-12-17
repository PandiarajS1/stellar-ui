import { Contact } from "@/components/Contact";
import { Cta } from "@/components/Cta";
import { Drawer } from "@/components/drawer";
import { Faq } from "@/components/Faq";
import { Feature } from "@/components/features";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import {Stats1} from "@/components/Stats"
import { Testimonials } from "@/components/Testimonals";



export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Drawer/>
      <Feature/>
      <Stats1/>
      <Testimonials/>
      <Pricing/>
      <Cta/>
      <Faq/>
      <Contact/>
    </div>
  );
}
