import PropTypes from 'prop-types';
import { FilterLabel, FilterText } from './Filter.styled';

const Filter = ({ filter, handleChangeFilter }) => {
    return (
        <FilterLabel>Find contacts by name
            <FilterText
                type="text"
                value={filter}
                onChange={handleChangeFilter} />
        </FilterLabel>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChangeFilter: PropTypes.func.isRequired,
};

export default Filter;