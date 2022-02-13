import { FighterModel } from 'models/FighterModel';

export const sortFighters = ({
    fighters,
    sortBy,
}: { fighters: FighterModel[], sortBy: string | undefined }) => {

    switch (sortBy) {
        case 'Name':
            return fighters.sort((a, b) => a.name.localeCompare(b.name));
        case 'Price':
            return fighters.sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10));
        case 'Downloads':
            return fighters.sort((a, b) => parseInt(a.downloads, 10) - parseInt(b.downloads, 10));
        case 'Rate':
            return fighters.sort((a, b) => parseInt(a.rate, 10) - parseInt(b.rate, 10));
        default:
            return fighters;
    }
};

export const filterFighters = ({
    fighters,
    rate,
}: { fighters: FighterModel[], rate: string | undefined }) => {

    if (rate) {
        return fighters.filter(f => f.rate === rate);
    } else {
        return fighters;
    }
};
