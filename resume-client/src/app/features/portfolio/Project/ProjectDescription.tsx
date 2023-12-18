import { EntryImageEntity } from "../../../layout/entry/image/EntryImageEntity";

export interface ProjectDescription {
    title: string,
    subTitle: string,
    description: string,
    link: string,
    gitLink: string,
    photos: EntryImageEntity[],
}