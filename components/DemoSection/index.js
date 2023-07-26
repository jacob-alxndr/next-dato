import { renderButtons } from "@components/UtilityComponents/Button/utils";

const DemoSection = (props) => {
  const { title, buttons } = props;

  return (
    <div
      style={{
        backgroundColor: "#000",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{title}</h1>
      {renderButtons(buttons)}
    </div>
  );
};

DemoSection.propTypes = {};
export default DemoSection;
