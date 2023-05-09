import DemoSectionFields from '../fragments/demoSection';
import GlobalNavigationFields from '../fragments/globalNavigation';
import GlobalFooterFields from '../fragments/globalFooter';
const GET_LANDING_PAGE = `
query LandingPageQuery($slug: String, $currentLocale: SiteLocale) {
    page: allLandingPages(locale: $currentLocale, filter: {slug: {eq: $slug}}) {
        slug
        _modelApiKey
        _publishedAt
        id
        _allSlugLocales {
            locale
            value
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
      globalFooter{
        ${GlobalFooterFields}
      }

}
${DemoSectionFields}
`;

export default GET_LANDING_PAGE;
