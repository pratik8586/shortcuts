import { Label } from './Label';



export interface Root {
  id: string;
  name: string;
  iconUrl?: string;
  labels: Label[];
  precedence: number;
}
