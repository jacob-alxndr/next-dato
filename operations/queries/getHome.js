import HeroFields from "../fragments/hero";
import DemoSectionFields from "../fragments/demoSection";
import CardListFields from "operations/fragments/cardList";
const GET_HOME = `
query HomeQuery {
  home {
    components {
      ... on DemosectionRecord {
        ...DemoSectionFields
      }  
      ... on CardListRecord {
        ...CardListFields
      }  
  
    }
    hero {
      ...HeroFields
    }
  }

}
${HeroFields}
${DemoSectionFields}
${CardListFields}
`;

export default GET_HOME;
