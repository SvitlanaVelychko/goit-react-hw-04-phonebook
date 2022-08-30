import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <Box as="section" pb={4} pt={4}>
            <Title>{title}</Title>
            {children}
        </Box>
    );
};

Section.propTypes = {
    title: PropTypes.string,
};

export default Section;