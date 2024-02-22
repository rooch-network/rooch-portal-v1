import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send } from "lucide-react";

interface UserAppItemProps {
  id: number;
  name: string;
  description: string;
  profileUrl: string;
  logoUrl: string;
  type: string;
}

export const UserAppItem = ({
  id,
  name,
  description,
  profileUrl,
  logoUrl,
  type,
}: UserAppItemProps) => {
  return (
    <Card
      key={id}
      className="h-full w-full md:w-[360px] transition-all dark:bg-zinc-800/90 dark:hover:border-primary/70 hover:shadow-md overflow-hidden"
    >
      <CardHeader className="px-4">
        <div className="flex items-center justify-start gap-x-3">
          <div>
            <Avatar>
              <AvatarImage src={profileUrl} alt={description} />
              <AvatarFallback />
            </Avatar>
          </div>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="mx-4 border rounded-lg overflow-hidden">
          <img
            src={logoUrl}
            alt="NFT Image"
            className="rounded-md object-cover transition-all"
          />
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button variant="default" size="sm" className="w-full">
          <div className="flex items-center justify-center gap-x-2">
            <Send className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            {type}
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
};
