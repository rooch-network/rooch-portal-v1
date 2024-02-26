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
import { CircleDot, CircleDotDashed, RefreshCcwDot } from "lucide-react";

const networks = [
  {
    network: "Bitcoin",
    address: "bc1pr6mdxnc348lua02c32ad4uyyaw3kavjz4c8jzkh5ffvuq4ryvxhsf879j5",
    status: true,
  },
  {
    network: "Ethereum",
    address: "0xa4Baa73f17719173Ce5f31556349c5e1D5c8BB51",
    status: false,
  },
];

export const ConnectedAccountTable = () => {
  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableCaption className="text-left pl-2 mb-2">
          Switch between networks with ease.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Networks</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {networks.map((network) => (
            <TableRow key={network.network}>
              <TableCell className="font-medium">{network.network}</TableCell>
              {/* 完整地址仅在较大屏幕上显示 */}
              <TableCell className="hidden md:table-cell">
                {network.address}
              </TableCell>

              {/* 缩短的地址仅在移动设备上显示 */}
              <TableCell className="md:hidden">
                {`${network.address.substring(
                  0,
                  3
                )}...${network.address.substring(network.address.length - 3)}`}
              </TableCell>
              <TableCell>
                {network.status ? (
                  <span className="text-green-500 dark:text-green-400 flex items-center justify-center">
                    <CircleDot className="w-5 h-5 pr-1" /> active
                  </span>
                ) : (
                  <span className="text-zinc-500 dark:text-zinc-400 flex items-center justify-center">
                    <CircleDotDashed className="w-5 h-5 pr-1" />
                    inactive
                  </span>
                )}
              </TableCell>
              <TableCell className="text-right hidden md:table-cell">
                {network.status ? (
                  <Button
                    className="text-green-500 dark:text-green-400"
                    variant="secondary"
                    size="sm"
                    disabled
                  >
                    Current
                  </Button>
                ) : (
                  <Button variant="default" size="sm">
                    Switch
                  </Button>
                )}
              </TableCell>
              <TableCell className="text-right md:hidden">
                {network.status ? (
                  <Button
                    className="text-green-500 dark:text-green-400"
                    variant="ghost"
                    size="icon"
                    disabled
                  >
                    <RefreshCcwDot className="w-5 h-5" />
                  </Button>
                ) : (
                  <Button variant="ghost" size="icon">
                    <RefreshCcwDot className="w-5 h-5" />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
