import ViewProps from "../view/view.props";

export default interface CardProps extends ViewProps {
  /** Name of the institution or the person. */
  object: {id: Number,
    name: string,
    address: {
      PLZ: string,
      location: string,
    },
    tel?: string,
    ref?: string,
    map: string,
  }

  /** The name of one of the button presets. */
  preset?: string;
}
