import { MoveDownLeft, MoveUpRight } from "lucide-react";

export const Stats1 = () => (
  <div className="w-full py-10 lg:py-10 px-10">
    <div className="container mx-auto">
      <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8">
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            500.000
            <span className="text-muted-foreground text-sm tracking-normal">
              +20.1%
            </span>
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            Monthly active users
          </p>
        </div>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            20.105
            <span className="text-muted-foreground text-sm tracking-normal">
              -2%
            </span>
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            Daily active users
          </p>
        </div>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-success" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            $52.520k
            <span className="text-muted-foreground text-sm tracking-normal">
              +8%
            </span>
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            Total Fund Collected
          </p>
        </div>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            45,000
            <span className="text-muted-foreground text-sm tracking-normal">
              +2%
            </span>
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            Stars in Github
          </p>
        </div>
      </div>
    </div>
  </div>
);