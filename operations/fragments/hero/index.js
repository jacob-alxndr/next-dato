import BackgroundImageFields from "../../imports/backgroundMedia/image";

const HeroFields = `
fragment HeroFields on HeroRecord {
    eyebrow
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
// description {
//     blocks
//     links
//     value
//   }
// backgroundColor{hex}
export default HeroFields;
