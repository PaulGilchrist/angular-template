import { FlooringZone } from './flooring-zone.model';
import { Option } from './option.model';

export interface FlooringState {
    dimension: boolean;
    flooringZones: FlooringZone[];
    focusOption: Option;
    level: number;
    options: Option[];
}
