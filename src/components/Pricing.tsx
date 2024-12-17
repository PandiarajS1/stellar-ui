import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Pricing = () => (
  <div className="w-full py-20 lg:py-30 lg:px-10">
    <div className="container mx-auto">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge>Pricing</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
            Prices that make sense!
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Managing The UI Kits with all features and functionalites
          </p>
        </div>
        <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                  Startup
                </span>
              </CardTitle>
              <CardDescription>
              Perfect for individuals starting their journey with UI design, providing the essentials for building projects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row  items-center gap-2 text-xl">
                  <span className="text-4xl">$0</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Access to basic components</p>
                      <p className="text-muted-foreground text-sm">
                      Includes essential UI components for simple designs.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>1 project included</p>
                      <p className="text-muted-foreground text-sm">
                      Ideal for small personal projects.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Email support</p>
                      <p className="text-muted-foreground text-sm">
                      Get help via email with basic inquiries.
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                Get Started <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full shadow-2xl rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                Pro
                </span>
              </CardTitle>
              <CardDescription>
              Designed for professionals who need more power and customization options for larger-scale projects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row  items-center gap-2 text-xl">
                  <span className="text-4xl">$49</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Access to all components</p>
                      <p className="text-muted-foreground text-sm">
                      Unlock the full library of advanced UI components.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>5 projects included</p>
                      <p className="text-muted-foreground text-sm">
                      Suitable for multiple client or personal projects.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Priority email support</p>
                      <p className="text-muted-foreground text-sm">
                      Receive priority response for faster issue resolution.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="gap-4">
                Upgrade Now <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                  Enterprise
                </span>
              </CardTitle>
              <CardDescription>
              Tailored for large teams and organizations needing advanced features, 24/7 support, and unlimited access.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row  items-center gap-2 text-xl">
                  <span className="text-4xl">$99</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>24/7 support</p>
                      <p className="text-muted-foreground text-sm">
                      Get round-the-clock support to address any issues immediately.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Unlimited access to all components</p>
                      <p className="text-muted-foreground text-sm">
                      Enjoy unrestricted access to every component.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Unlimited projects</p>
                      <p className="text-muted-foreground text-sm">
                      Work on an unlimited number of projects with no restrictions.
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                Contact Us <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);