// import { MainContent } from "./components/main-content";
// import { Navbar } from "./components/navbar";
// import { Sidebar } from "./components/sidebar";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const DashboardLayout = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen w-full rounded-lg border"
    >
      {/* Sidebar */}
      <ResizablePanel defaultSize={14}>
        <div className="flex h-screen items-start justify-start p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="vertical">
          {/* Navbar */}
          <div className="flex items-center justify-center p-6 h-[80px] border-b">
            <span className="font-semibold">Navbar</span>
          </div>
          {/* Main Content */}
          <div className="flex h-screen items-start justify-start p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );

  // return (
  //   <div className="h-full">
  //     <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
  //       <Navbar />
  //     </div>
  //     <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
  //       <Sidebar />
  //     </div>
  //     <main className="md:pl-56 pt-[80px] h-full">
  //       <MainContent />
  //     </main>
  //   </div>
  // );
};
