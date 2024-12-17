import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Feature = () => (
  <div className="w-full py-20 lg:py-0 lg:px-10">
    <div className="container mx-auto">
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <div>
          <Badge>Features</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Something new!
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
          Explore the key features that make our UI library fast, flexible, and perfect for modern web development.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Lightweight and Fast</p>
                <p className="text-muted-foreground text-sm">
                Enjoy a minimal bundle size that ensures lightning-fast load times without compromising functionality.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Customizable Components</p>
                <p className="text-muted-foreground text-sm">
                Easily adapt and style components to match your project&apos;s unique design requirements with simple customization options.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Responsive Design</p>
                <p className="text-muted-foreground text-sm">
                Built for all screen sizes, our components deliver a seamless experience across mobile, tablet, and desktop devices
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Pre-Built Components</p>
                <p className="text-muted-foreground text-sm">
                Access a comprehensive set of ready-to-use components like buttons, cards, modals, and navigation bars to accelerate development
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Theming Support</p>
                <p className="text-muted-foreground text-sm">
                Effortlessly switch between light and dark modes or create your own theme with built-in theming capabilities.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Developer-Friendly</p>
                <p className="text-muted-foreground text-sm">
                Designed with clean code and modern frameworks, ensuring smooth integration and a hassle-free developer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);