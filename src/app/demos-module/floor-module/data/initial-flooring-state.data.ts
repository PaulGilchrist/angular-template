import { FlooringState } from '../models/flooring-state.model';

export const INITIAL_FLOORING_STATE: FlooringState = {
    dimension: false,
    flooringZones: [
        { name: 'Kitchen', type: 'undecided', layers: ['s1', 's3'], active: false },
        { name: 'Living', type: 'undecided', layers: ['s9', 's10', 's11', 's18'], active: false },
        { name: 'Bathrooms', type: 'undecided', layers: ['s13_1', 's15', 's16', 's19', 's22', 'o2', 'o5', 'o6'], active: false },
        { name: 'Bedrooms', type: 'undecided', layers: ['s17', 's20', 's21', 's23', 's24', 'o3', 'o7'], active: false },
        { name: 'Foyer', type: 'undecided', layers: ['s8'], active: false },
        { name: 'Dining', type: 'undecided', layers: ['s7'], active: false },
        { name: 'Laundry', type: 'undecided', layers: ['s6', 's4', 's4_1'], active: false }
    ],
    focusOption: null,
    level: 1,
    options: [
        { level: 1, name: 'Garage', standardName: 'Standard', optionName: 'Extended', standardLayers: ['s14'], optionLayers: ['o4'], active: false },
        { level: 1, name: 'Flex Room', standardName: 'Den', optionName: 'Guest Suite', standardLayers: ['s11', 's12', 's13'], optionLayers: ['o3'], active: false },
        { level: 1, name: 'Powder Room', standardName: 'No', optionName: 'Yes', standardLayers: ['s4'], optionLayers: ['o2', 's4_1'], active: false },
        { level: 1, name: 'Sunroom', standardName: 'No', optionName: 'Yes', standardLayers: ['s1', 's26', 's26_2'], optionLayers: ['o1', 'o8', 'o8_1'], active: false },
        { level: 2, name: 'Owner\'s Bath Shower', standardName: 'Standard', optionName: 'Upgraded', standardLayers: ['s15'], optionLayers: ['o5'], active: false },
        { level: 3, name: 'Basement Bed and Bath', standardName: 'No', optionName: 'Yes', standardLayers: ['s25', 's27', 's28'], optionLayers: ['o6', 'o7'], active: false }
    ]
};
