// Used classnames library to decide on the layout of the button variations -i.e if button is primary/secondary/warning/success/rounded/danger/outline what styles/classes to show etc
// Used propTypes library to show warnings if we passed two variations like primary and secondary at the same time on a Button component. We can only pass one from the list - primary, secondary, success, warning, danger
import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = className('flex items-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,
    // 'bg-white border border-blue-500 text-blue-500': outline && primary,
    // 'bg-white border border-gray-900 text-gray-900': outline && secondary,
    // 'bg-white border border-green-500 text-green-500': outline && success,
    // 'bg-white border border-yellow-400 text-yellow-400': outline && warning,
    // 'bg-white border border-red-500 text-red-500': outline && danger,
    // 'text-black': outline, // Set text color to black when outline is true
  });

  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;