import PropTypes from "prop-types";

const SectionHeading = ({ heading }) => <h2 className="text-2xl font-medium mb-4 sm:text-3xl text-center">{heading}</h2>;

SectionHeading.propTypes = {
    heading: PropTypes.string.isRequired,
};

export default SectionHeading;
