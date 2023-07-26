import DemoSectionFields from "../fragments/demoSection";
import GlobalNavigationFields from "operations/fragments/globalNavigation";
import GlobalFooterFields from "operations/fragments/globalFooter";
const GET_HOME = `
query HomeQuery {
  home {
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


${DemoSectionFields}

`;

export default GET_HOME;
