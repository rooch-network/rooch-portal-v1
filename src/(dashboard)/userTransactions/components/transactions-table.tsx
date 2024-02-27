import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MenuSquare, ExternalLink } from "lucide-react";

const txs = [
  {
    type: "transaction",
    txHash:
      "0x79be8a1ffe4a0f65b205905352acf4a2b521490fa45600df6ebe62fb24e05b97",
    from: "0x388C818CA8B9251b393131C08a736A67ccB19297",
    to: "0xa83114A443dA1CecEFC50368531cACE9F37fCCcb",
    amount: 0.232345,
    asset: "ETH",
    date: "2023/10/01 14:30",
  },
  {
    type: "transaction",
    txHash:
      "0x79be8a1ffe4a0f65b205905352acf4a2b521490fa45600df6ebe62fb24e05b97",
    from: "0x388C818CA8B9251b393131C08a736A67ccB19297",
    to: "0xa83114A443dA1CecEFC50368531cACE9F37fCCcb",
    amount: 0.232345,
    asset: "ETH",
    date: "2023/10/01 14:30",
  },
];

export const TransactionsTable = () => {
  return (
    <div className="rounded-lg border w-full">
      <Table>
        <TableCaption className="text-left pl-2 mb-2">
          Manage the connected apps.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">TXs</TableHead>
            {/* <TableHead>Type</TableHead> */}
            <TableHead>TX Hash/Date</TableHead>
            <TableHead>From/to</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {txs.map((tx) => (
            <TableRow key={tx.txHash}>
              <TableCell className="font-medium">
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-default bg-accent"
                >
                  <MenuSquare className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell>
                <div className="flex flex-row md:flex-col items-start justify-start gap-1">
                  <span className="hover:no-underline text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 transition-all cursor-pointer">
                    {/* 前十五位 */}
                    {tx.txHash.substring(0, 15)}...
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {tx.date}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-row md:flex-col items-start justify-start gap-1">
                  <span className="hover:no-underline text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 transition-all cursor-pointer flex items-center justify-start gap-1">
                    <p className="text-primary">From</p>
                    {/* 前八位和后八位，中间用...省略 */}
                    {tx.from.substring(0, 8)}...
                    {tx.from.substring(tx.to.length - 8)}
                  </span>
                  <span className="hover:no-underline text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 transition-all cursor-pointer flex items-center justify-start gap-1">
                    <p className="text-primary">To</p>
                    {/* 前八位和后八位，中间用...省略 */}
                    {tx.to.substring(0, 8)}...
                    {tx.to.substring(tx.to.length - 8)}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="default">
                  {tx.amount}
                  {tx.asset}
                </Badge>
              </TableCell>
              <TableCell>
                <span className="text-muted-foreground">{tx.type}</span>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="link"
                  size="sm"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-all"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
