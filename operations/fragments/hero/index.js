import BackgroundImageFields from "../../imports/backgroundMedia/image";

const HeroFields = `
fragment HeroFields on HeroRecord {
    title
    id
    titleSize
    _modelApiKey
    id
    titleSize
    _modelApiKey
    backgroundMedia {
        ... on BackgroundImageRecord {
            ${BackgroundImageFields}
        }
    }

}  
`;

export default HeroFields;
