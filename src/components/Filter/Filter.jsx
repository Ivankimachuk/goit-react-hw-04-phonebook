import React from "react";
import PropTypes from "prop-types";
import { Label, Input } from 'components/Emotion.styled';

const Filter = ({ filter, onChange }) => {
  return (
    // ФІЛЬТРАЦІЯ КОНТАКТІВ
    <Label > 
      Find contacts by name
      <Input type="text" value={filter} onChange={onChange} />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


