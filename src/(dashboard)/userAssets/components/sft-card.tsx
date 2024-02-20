import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BitcoinIcon, LockKeyhole } from "lucide-react";

export const SftCard = () => {
  return (
    <>
      <Card className="w-full transition-all dark:hover:border-primary/70 hover:shadow-md overflow-hidden">
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="rounded-lg">
              ROOCH
            </Badge>
            <Badge
              variant="default"
              className="cursor-pointer"
              onClick={() => {}}
            >
              #537f3a
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex items-center justify-center h-[80px]">
          <div className="flex items-center justify-center flex-col gap-3">
            <h3 className="text-4xl font-semibold">1,626</h3>
            <div className="text-muted-foreground flex items-center justify-center text-sm gap-1">
              <div className="flex items-center justify-center">
                <LockKeyhole className="w-3 h-3" />
                <p>Locked ROOCH:</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="dark:text-amber-300 text-amber-500">3.1888</p>
                <BitcoinIcon className="w-4 h-4 dark:text-amber-500 text-amber-600" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-wrap gap-2 md:flex-row">
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            List
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            Split
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-red-500 text-red-500 hover:border-red-500 hover:text-red-500 hover:bg-red-500/20 w-full flex-1"
          >
            Burn
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-amber-500 text-amber-500 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/20 w-full flex-1"
          >
            Transfer
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full transition-all dark:hover:border-primary/70 hover:shadow-md overflow-hidden">
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="rounded-lg">
              ROOCH
            </Badge>
            <Badge
              variant="default"
              className="cursor-pointer"
              onClick={() => {}}
            >
              #537f3a
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex items-center justify-center h-[80px]">
          <div className="flex items-center justify-center flex-col gap-3">
            <h3 className="text-4xl font-semibold">1,626</h3>
            <div className="text-muted-foreground flex items-center justify-center text-sm gap-1">
              <div className="flex items-center justify-center">
                <LockKeyhole className="w-3 h-3" />
                <p>Locked ROOCH:</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="dark:text-amber-300 text-amber-500">3.1888</p>
                <BitcoinIcon className="w-4 h-4 dark:text-amber-500 text-amber-600" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-wrap gap-2 md:flex-row">
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            List
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            Split
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-red-500 text-red-500 hover:border-red-500 hover:text-red-500 hover:bg-red-500/20 w-full flex-1"
          >
            Burn
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-amber-500 text-amber-500 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/20 w-full flex-1"
          >
            Transfer
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full transition-all dark:hover:border-primary/70 hover:shadow-md overflow-hidden">
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="rounded-lg">
              ROOCH
            </Badge>
            <Badge
              variant="default"
              className="cursor-pointer"
              onClick={() => {}}
            >
              #537f3a
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex items-center justify-center h-[80px]">
          <div className="flex items-center justify-center flex-col gap-3">
            <h3 className="text-4xl font-semibold">1,626</h3>
            <div className="text-muted-foreground flex items-center justify-center text-sm gap-1">
              <div className="flex items-center justify-center">
                <LockKeyhole className="w-3 h-3" />
                <p>Locked ROOCH:</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="dark:text-amber-300 text-amber-500">3.1888</p>
                <BitcoinIcon className="w-4 h-4 dark:text-amber-500 text-amber-600" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-wrap gap-2 md:flex-row">
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            List
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            Split
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-red-500 text-red-500 hover:border-red-500 hover:text-red-500 hover:bg-red-500/20 w-full flex-1"
          >
            Burn
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-amber-500 text-amber-500 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/20 w-full flex-1"
          >
            Transfer
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full transition-all dark:hover:border-primary/70 hover:shadow-md overflow-hidden">
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="rounded-lg">
              ROOCH
            </Badge>
            <Badge
              variant="default"
              className="cursor-pointer"
              onClick={() => {}}
            >
              #537f3a
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex items-center justify-center h-[80px]">
          <div className="flex items-center justify-center flex-col gap-3">
            <h3 className="text-4xl font-semibold">1,626</h3>
            <div className="text-muted-foreground flex items-center justify-center text-sm gap-1">
              <div className="flex items-center justify-center">
                <LockKeyhole className="w-3 h-3" />
                <p>Locked ROOCH:</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="dark:text-amber-300 text-amber-500">3.1888</p>
                <BitcoinIcon className="w-4 h-4 dark:text-amber-500 text-amber-600" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-wrap gap-2 md:flex-row">
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            List
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            Split
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-red-500 text-red-500 hover:border-red-500 hover:text-red-500 hover:bg-red-500/20 w-full flex-1"
          >
            Burn
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-amber-500 text-amber-500 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/20 w-full flex-1"
          >
            Transfer
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full transition-all dark:hover:border-primary/70 hover:shadow-md overflow-hidden">
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="rounded-lg">
              ROOCH
            </Badge>
            <Badge
              variant="default"
              className="cursor-pointer"
              onClick={() => {}}
            >
              #537f3a
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex items-center justify-center h-[80px]">
          <div className="flex items-center justify-center flex-col gap-3">
            <h3 className="text-4xl font-semibold">1,626</h3>
            <div className="text-muted-foreground flex items-center justify-center text-sm gap-1">
              <div className="flex items-center justify-center">
                <LockKeyhole className="w-3 h-3" />
                <p>Locked ROOCH:</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="dark:text-amber-300 text-amber-500">3.1888</p>
                <BitcoinIcon className="w-4 h-4 dark:text-amber-500 text-amber-600" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-wrap gap-2 md:flex-row">
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            List
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            Split
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-red-500 text-red-500 hover:border-red-500 hover:text-red-500 hover:bg-red-500/20 w-full flex-1"
          >
            Burn
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-amber-500 text-amber-500 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/20 w-full flex-1"
          >
            Transfer
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full transition-all dark:hover:border-primary/70 hover:shadow-md overflow-hidden">
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="rounded-lg">
              ROOCH
            </Badge>
            <Badge
              variant="default"
              className="cursor-pointer"
              onClick={() => {}}
            >
              #537f3a
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex items-center justify-center h-[80px]">
          <div className="flex items-center justify-center flex-col gap-3">
            <h3 className="text-4xl font-semibold">1,626</h3>
            <div className="text-muted-foreground flex items-center justify-center text-sm gap-1">
              <div className="flex items-center justify-center">
                <LockKeyhole className="w-3 h-3" />
                <p>Locked ROOCH:</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="dark:text-amber-300 text-amber-500">3.1888</p>
                <BitcoinIcon className="w-4 h-4 dark:text-amber-500 text-amber-600" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-wrap gap-2 md:flex-row">
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            List
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            Split
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-red-500 text-red-500 hover:border-red-500 hover:text-red-500 hover:bg-red-500/20 w-full flex-1"
          >
            Burn
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-amber-500 text-amber-500 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/20 w-full flex-1"
          >
            Transfer
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full transition-all dark:hover:border-primary/70 hover:shadow-md overflow-hidden">
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="rounded-lg">
              ROOCH
            </Badge>
            <Badge
              variant="default"
              className="cursor-pointer"
              onClick={() => {}}
            >
              #537f3a
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex items-center justify-center h-[80px]">
          <div className="flex items-center justify-center flex-col gap-3">
            <h3 className="text-4xl font-semibold">1,626</h3>
            <div className="text-muted-foreground flex items-center justify-center text-sm gap-1">
              <div className="flex items-center justify-center">
                <LockKeyhole className="w-3 h-3" />
                <p>Locked ROOCH:</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="dark:text-amber-300 text-amber-500">3.1888</p>
                <BitcoinIcon className="w-4 h-4 dark:text-amber-500 text-amber-600" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-wrap gap-2 md:flex-row">
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            List
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            Split
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-red-500 text-red-500 hover:border-red-500 hover:text-red-500 hover:bg-red-500/20 w-full flex-1"
          >
            Burn
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-amber-500 text-amber-500 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/20 w-full flex-1"
          >
            Transfer
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full transition-all dark:hover:border-primary/70 hover:shadow-md overflow-hidden">
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="rounded-lg">
              ROOCH
            </Badge>
            <Badge
              variant="default"
              className="cursor-pointer"
              onClick={() => {}}
            >
              #537f3a
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex items-center justify-center h-[80px]">
          <div className="flex items-center justify-center flex-col gap-3">
            <h3 className="text-4xl font-semibold">1,626</h3>
            <div className="text-muted-foreground flex items-center justify-center text-sm gap-1">
              <div className="flex items-center justify-center">
                <LockKeyhole className="w-3 h-3" />
                <p>Locked ROOCH:</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="dark:text-amber-300 text-amber-500">3.1888</p>
                <BitcoinIcon className="w-4 h-4 dark:text-amber-500 text-amber-600" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-wrap gap-2 md:flex-row">
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            List
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
          >
            Split
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-red-500 text-red-500 hover:border-red-500 hover:text-red-500 hover:bg-red-500/20 w-full flex-1"
          >
            Burn
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg cursor-pointer border-amber-500 text-amber-500 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/20 w-full flex-1"
          >
            Transfer
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
