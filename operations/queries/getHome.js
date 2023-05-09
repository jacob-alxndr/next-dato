import HeroFields from "../fragments/hero";
import DemoSectionFields from "../fragments/demoSection";

const GET_HOME = `
query HomeQuery {
  home {
    components {
      ... on DemosectionRecord {
        ...DemoSectionFields
      }  
  
    }
    hero {
      ...HeroFields
    }
  }

}
${HeroFields}
${DemoSectionFields}
`;

export default GET_HOME;
