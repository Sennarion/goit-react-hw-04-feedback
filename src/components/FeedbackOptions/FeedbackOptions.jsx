import PropTypes from 'prop-types';
import { Button } from 'components/UI/Button.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <Button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          label={option}
        >
          {option}
        </Button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
