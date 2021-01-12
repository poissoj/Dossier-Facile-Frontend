import { DfDocument } from "./DfDocument";
import { Guarantor } from "./Guarantor";

export class User {
  id!: number;
  email!: string;
  password?: string;
  token?: string;
  confirm?: string;
  captcha?: string;
  lastName?: string;
  firstName?: string;
  zipCode?: string;
  applicationType?: string;
  status?: string;
  lastUpdate?: string;


  identification?: string;
  residency?: string;
  professional?: string;
  financial?: string;
  tax?: string;

  apartmentSharing?: {id?: number, tenants: User[], status: string, token: string, tokenPublic: string};
  guarantors?: Guarantor[];
  documents?: DfDocument[];
}
