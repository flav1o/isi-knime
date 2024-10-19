import { FakerUserAddress } from "./types";
import { faker } from '@faker-js/faker';

export const generateFakeData = (size: number): FakerUserAddress[] => {
    const data: FakerUserAddress[] = []; 

    for(let i = 1; i < size; i++) {
        const { zipCode, streetAddress } = faker.location;
        let address = streetAddress(true).replace(/^\d+\s*/, ''); 

        data.push({
            userId: i,
            address, 
            zipCode: zipCode({
                format: '##### - ###'
            })
        })
    }

    return data;
}