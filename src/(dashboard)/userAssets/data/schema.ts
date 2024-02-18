import { z } from "zod";

// export const cryptocurrenciesSchema = z.object({
//   id: z.string(),
//   asset: z.string(), // BTC/ETH/USDT or something else
//   type: z.string(), // Token/SFT or something else
//   protocol: z.string(), // ERC20/BRC20/MRC20 or something else
//   balance: z.number(), // unit: corresponding asset type
//   value: z.number(), // unit: USD
// });

// export type Cryptocurrencies = z.infer<typeof cryptocurrenciesSchema>;

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
