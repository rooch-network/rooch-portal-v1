import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const UserSettingsLayout = () => {
  return (
    <div className="h-full w-full flex-1 flex-col space-y-8 flex">
      <Card className="relative overflow-hidden w-full border-border/40">
        <CardHeader className="absolute top-0 left-0 z-10 p-4 md:p-6 w-full">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl md:text-3xl leading-tight text-white">
                Rooch Account
              </CardTitle>
              <CardDescription className="text-wrap text-white/85 dark:text-white/70 text-xs md:text-sm">
                Manage Your Wallet Connections and Authorized Sessions.
              </CardDescription>
            </div>
            <div className="ml-2">
              <span>Your balance</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div>
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 object-cover w-full h-28 md:h-32 opacity-80 select-none" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between relative pb-8 md:pb-14 px-4 md:px-6 dark:bg-zinc-800/90 h-full">
          <div className="absolute">
            <Avatar className="w-12 h-12 md:w-20 md:h-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="Logic" />
              <AvatarFallback className="text-xl">LO</AvatarFallback>
            </Avatar>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
