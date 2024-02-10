import { Shortcut } from './Shortcut';


export interface Label {
  label: string;
  shortcuts: Shortcut[];
  id: string;
}
