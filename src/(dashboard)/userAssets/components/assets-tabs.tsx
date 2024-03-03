import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AssetsCoin } from "./assets-coin";
import { AssetsNft } from "./assets-nft";
import { AssetsSft } from "./assets-sft";

export const AssetsTabs = () => {
  return (
    <Tabs defaultValue="coin">
      <TabsList className="grid grid-cols-3 w-full h-11 transition-all">
        <TabsTrigger value="coin" className="h-full font-semibold">
          <img
            src="/bitcoin_in_assets.svg"
            alt="coin"
            className="w-5 h-5 mr-1"
          />
          Coin
        </TabsTrigger>
        <TabsTrigger value="nft" className="h-full font-semibold">
          🎆 NFT
        </TabsTrigger>
        <TabsTrigger value="sft" className="h-full font-semibold">
          🎇 SFT
        </TabsTrigger>
      </TabsList>
      <TabsContent value="coin">
        <AssetsCoin />
      </TabsContent>
      <TabsContent value="nft">
        <AssetsNft />
      </TabsContent>
      <TabsContent value="sft">
        <AssetsSft />
      </TabsContent>
    </Tabs>
  );
};
