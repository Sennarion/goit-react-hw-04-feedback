import PropTypes from 'prop-types';
import { Button } from 'components/UI/Button.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <Button onClick={onLeaveFeedback} styleType="positive">
        Good
      </Button>
      <Button onClick={onLeaveFeedback} styleType="neutral">
        Neutral
      </Button>
      <Button onClick={onLeaveFeedback} styleType="bad">
        Bad
      </Button>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.number.isRequired,
  styleType: PropTypes.string,
};

export default FeedbackOptions;
