import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const UserAssetsLayout = () => {
  return (
    <div className="h-full flex-1 flex-col space-y-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <span>
          <h1 className="text-2xl font-bold tracking-tight">Assets</h1>
          <p className="text-muted-foreground">
            Supported Cryptocurrencies for Transfer
          </p>
        </span>
      </div>
      {/* Tables */}
      <Tabs defaultValue="coin" className="w-[450px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="coin">Coin</TabsTrigger>
          <TabsTrigger value="nft">NFT</TabsTrigger>
          <TabsTrigger value="sft">SFT</TabsTrigger>
        </TabsList>
        <TabsContent value="coin">coin</TabsContent>
        <TabsContent value="nft">nft</TabsContent>
        <TabsContent value="sft">sft</TabsContent>
      </Tabs>
    </div>
  );
};
