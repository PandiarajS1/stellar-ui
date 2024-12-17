import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";


const faqSection = [
      {
        topic: "What is this UI library?",
        description: "Our UI library is a comprehensive collection of responsive, customizable, and easy-to-use components that help developers create modern web applications. It’s designed to save you time by providing pre-built, well-structured components that can be quickly integrated into your projects, reducing the need for manual coding and design from scratch."
      },
      {
        topic: "How do I get started?",
        description: "Getting started is simple! First, choose the plan that best suits your needs. Then, you can easily integrate the library into your project by installing it through npm or yarn. After installation, explore our comprehensive documentation for detailed instructions on using each component and styling them to fit your application."
      },
      {
        topic: "Can I customize the components?",
        description: "Absolutely! All the components in our library are fully customizable. You can modify the appearance, behavior, and functionality to suit your specific design needs. Whether you need to adjust colors, fonts, or layouts, you can do so with ease. Additionally, the library provides options to integrate custom themes and plugins to align with your project's branding."
      },
      {
        topic: "Is there any support available?",
        description: "Yes, we offer email support for all users. If you're on the Pro or Enterprise plans, you'll also receive priority email support to ensure quicker response times for any queries or issues you may encounter. We’re committed to assisting you in resolving any technical challenges so you can focus on building your project."
      },
      {
        topic: "Is there a free trial?",
        description: "At this moment, we do not offer a free trial. However, we provide extensive documentation, sample code, and a demo version of the UI library so you can evaluate its features before making a commitment. We’re confident that once you see how powerful and easy it is to use, you’ll be excited to get started with one of our pricing plans."
      }
    ]
  

export const Faq = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">FAQ</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              This is the start of something new
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Find answers to the most common questions about our UI library and how it can help you streamline your web development process. Whether you&apos;re just getting started or have specific queries, we&apos;ve got you covered.
            </p>
          </div>
          <div>
            <Button className="gap-4" variant="outline">
              Any questions? Reach out <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqSection.map((faq, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>
                  {faq.topic}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);