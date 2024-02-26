import { ConnectedAccountTable } from "./components/connected-account-table";

export const UserSettingsLayout = () => {
  return (
    <div className="h-full flex-1 flex-col space-y-8 flex">
      {/* Connected Account section */}
      <div className="flex items-center justify-between space-y-2">
        <span>
          <h1 className="text-3xl font-bold tracking-tight">
            Connected Account
          </h1>
          <p className="text-muted-foreground text-wrap">
            Manage and view your accounts.
          </p>
        </span>
      </div>
      <ConnectedAccountTable />
    </div>
  );
};
