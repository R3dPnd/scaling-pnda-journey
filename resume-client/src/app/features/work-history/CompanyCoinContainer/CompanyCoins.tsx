export interface CompanyCoin {
    alt: string;
    srcName: string;
    name: string;
}

const CompanyCoins: CompanyCoin[] = [
    {
        alt : "microsoft-coin",
        srcName : require("../../../../img/coin-microsoft.png"),
        name: "Microsoft"
    },
    {
        alt : "chase-coin",
        srcName : require("../../../../img/coin-chase.png"),
        name: "Chase"
    },
    {
        alt : "infosys-coin",
        srcName : require("../../../../img/coin-infosys.png"),
        name: "Infosys"
    },
    {
        alt : "revature-coin",
        srcName : require("../../../../img/coin-revature.png"),
        name: "Revature"
    }
]

export function getCompanyCoins(): CompanyCoin[] {
    return CompanyCoins;
}