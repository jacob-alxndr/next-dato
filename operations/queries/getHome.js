import HeroFields from "../fragments/hero";
import DemoSectionFields from "../fragments/demoSection";
import GlobalNavigationFields from "operations/fragments/globalNavigation";
import GlobalFooterFields from "operations/fragments/globalFooter";
const GET_HOME = `
query HomeQuery {
  home {

    hero{
      ...HeroFields
    }
    components {
      ... on DemosectionRecord {
        ...DemoSectionFields
      }  

  
    }
  }
  globalNavigation {
    ${GlobalNavigationFields}
  }
  globalFooter {
    ${GlobalFooterFields}
  }

}


${HeroFields}
${DemoSectionFields}

`;

export default GET_HOME;
