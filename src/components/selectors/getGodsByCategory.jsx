import { gods } from "../../data/gods";


export const getGodsByCategory = (category) => {
    return gods.filter(god=>god.category===category);
}
