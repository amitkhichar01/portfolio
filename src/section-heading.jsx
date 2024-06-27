import PropTypes from "prop-types";

const SectionHeading = ({ heading }) => <h2 className="font-lexend text-3xl font-medium mb-8 sm:text-4xl text-center">{heading}</h2>;

SectionHeading.propTypes = {
    heading: PropTypes.string.isRequired,
};

export default SectionHeading;
