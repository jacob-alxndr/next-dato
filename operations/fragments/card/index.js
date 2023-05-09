import Buttons from "../../imports/buttons";
import ImageFields from "operations/imports/media/image";
const CardFields = `
      slug
      id
      eyebrow
      title
      subtitle
      description
      image {
        ${ImageFields}
      }
      ${Buttons}
`;

export default CardFields;
