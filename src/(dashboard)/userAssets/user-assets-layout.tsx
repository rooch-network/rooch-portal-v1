import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import getTasks from "@/lib/getTasks";

export const UserAssetsLayout = async () => {
  const tasks = await getTasks();

  return (
    <div className="h-full flex-1 flex-col space-y-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <span>
          <h1 className="text-2xl font-bold tracking-tight">Assets</h1>
          <p className="text-muted-foreground">
            Supported Cryptocurrencies for Transfer
          </p>
        </span>
        {/* add some details on the right of */}
      </div>
      <DataTable data={tasks} columns={columns} />
    </div>
  );
};
