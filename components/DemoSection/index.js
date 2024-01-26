import { renderButtons } from "@components/UtilityComponents/Button/utils";
import { useTheme } from "@lib/ctx";

const DemoSection = (props, context) => {
  const { title, buttons } = props;
  const { dark } = useTheme();

  return (
    <div
      style={{
        backgroundColor: "var(--color-paper)",
        color: "var(--color-ink)",
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
