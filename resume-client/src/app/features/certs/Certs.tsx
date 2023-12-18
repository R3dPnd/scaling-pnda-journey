export interface Cert{
    name: string;
    date: string;
    link: string;
    description: string;
    badge: string,
}

const certs = [
    {
        name: "Java SE 8 Programmer I",
        date: "04-13-18",
        link: "https://www.starttest.com/ITDVersions/11.3.0.0/ITDStart.aspx?SVC=360d921f-f222-4a91-98f9-b6c4378a980f",
        description: "The Java SE 8 Oracle Certified Associate (OCA) certification helps you build a foundational understanding of Java, and gaining this certification credential is the first of two steps in demonstrating you have the high-level skills needed to become a professional Java developer.",
        badge:require("../../../img/OCAJSE8.jpg"),
    }
]

export function getCerts(): Cert[]{
    return certs;
}