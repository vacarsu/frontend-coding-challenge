interface Card {
    campaignId: string;
    cardTitle: string;
    cardDescription: string;
    primaryMediaUrl: string;
    cardStartDate: string;
    cardEndDate: string;
    availableQuantity?: 0;
    likes?: number;
    shares?: number;
    views?: number;
    subscribers?: number;
    unSubscribers?: number;
    open?: number;
    discard?: number;
    totalRevenue?: number;
    listOfPlans: Array<CardPlan>;
    locations: Array<CardLocation>;
    currentWorkflow: string;
    campaignEndDate: string;
    id: string;
    userId: string;
    createdAt: string;
    updatedAt: string
}

interface CardLocation {
    latitude?: string,
    longitude: string,
    area?: string,
    city?: string,
    country?: string,
    placeId: string,
    description: string
}

interface CardPlan {
    price: {
        amount: number,
        currency: string,
        currencySymbol?: string
    }
}