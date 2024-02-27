import { TransactionsTable } from "./components/transactions-table";

export const UserTransactionsLayout = () => {
  return (
    <div className="h-full flex-1 flex-col space-y-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <span>
          <h1 className="text-3xl font-bold tracking-tight">
            Transactions History
          </h1>
          <p className="text-muted-foreground text-wrap">
            Browse your transaction history.
          </p>
        </span>
      </div>
      <TransactionsTable />
    </div>
  );
};
