import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeaturedSfts } from "./featured-sfts";
import { AllSfts } from "./all-sfts";

export const SftTabs = () => {
  return (
    <Tabs defaultValue="featured" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="featured">Featured SFTs</TabsTrigger>
        <TabsTrigger value="all">All SFTs</TabsTrigger>
      </TabsList>
      <TabsContent value="featured">
        <FeaturedSfts />
      </TabsContent>
      <TabsContent value="all">
        <AllSfts />
      </TabsContent>
    </Tabs>
  );
};
