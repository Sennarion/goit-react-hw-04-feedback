import PropTypes from 'prop-types';
import { SectionWrapper } from './Section.styled';

function Section({ title, children }) {
  return (
    <SectionWrapper>
      <h2>{title}</h2>
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
