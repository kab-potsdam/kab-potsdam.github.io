import ViewProps from "../view/view.props";

export default interface CardProps extends ViewProps {
  /** The title of this Card. */
  title?: string;

  /** The name of one of the button presets. */
  preset?: string;
}
