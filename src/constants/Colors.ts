const Backgrounds = {
    background_1: '#EDEDEB', // Card
    background_2: '#FFF',
    background_3: '#737373', // Toast
};

const RawColors = {
    black: '#000',
    black_a_07: 'rgba(0,0,0,0.07)',
    black_a_50: 'rgba(0,0,0,0.5)',
    black_a_60: 'rgba(0,0,0,0.6)',
    black_a_70: 'rgba(0,0,0,0.7)',
    gray_10: '#F7F8FA',
    gray_20: '#F0F2F5',
    gray_30: '#E5E7EB',
    gray_40: '#E3E5EC',
    gray_50: '#E1E4E8',
    gray_60: '#E1E3E6',
    gray_70: '#D0D5DC',
    gray_80: '#B9C1D6',
    gray_90: '#999',
    gray_100: '#8A9DBA',
    gray_110: '#657281',
    gray_110_a_50: 'rgba(102,105,117,0.5)',
    yellow: '#FFDE49',
    white: '#FFF',
    white_a_10: 'rgba(255,255,255,0.1)',
};

const TrendMxPalette = {
    warning: '#F5B54E',
    primary: '#D4272D',
    secondary: '#D7DBDF',
    secondary_1: '#000',
    secondary_2: '#657281',
    secondary_3: '#8C96A1',
    secondary_6: '#F0F1F3',
    secondary_7: '#F7F8F8',
    secondary_text: '#666975',
    success: '#68BE00',
    disabled: '#657281',
    success_text: '#FFF',
};


const Shimmer = {
    shimmer_1: '#EEE',
    shimmer_2: '#d9d7d7',
};

const Texts = {
    text_1: '#000',
    text_2: '#3C3F41',
    text_3: '#666975',
    text_4: '#A1A1A1',
    text_5: '#FFF',
};

export default {
    ...Backgrounds,
    ...RawColors,
    ...Shimmer,
    ...TrendMxPalette,
    ...Texts,
};
