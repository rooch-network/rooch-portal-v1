import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const AllSfts = () => {
  return (
    <Table>
      <TableCaption className="text-left pl-2 mb-2">
        Lorem ipsum dolor sit.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">SFT Name</TableHead>
          <TableHead>Distribution</TableHead>
          <TableHead>Total Supply</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableBody>
    </Table>
  );
};
