import { z } from "zod";
export const inquirySchema = z.object({
  kind: z.enum(["ertekbecsles", "kapcsolat"]),
  name: z.string().min(2, "Adja meg a nevét."),
  email: z.string().email("Érvénytelen e-mail-cím."),
  phone: z.string().min(6, "Adja meg a telefonszámát."),
  propertyType: z.string().optional(), city: z.string().optional(), area: z.string().optional(),
  rooms: z.string().optional(), purpose: z.string().optional(),
  message: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Az adatkezelési tájékoztató elfogadása szükséges." }) }),
});
export type Inquiry = z.infer<typeof inquirySchema>;
