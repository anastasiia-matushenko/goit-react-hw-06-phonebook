import PropTypes from "prop-types";
import { Input, Label } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {
    return (
        <>
            <Label htmlFor="filter">Find contacts by name</Label>
            <Input id="filter" value={value} type="text" onChange={onChange} />
        </>
    )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};