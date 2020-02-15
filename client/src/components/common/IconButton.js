import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import { IconButton as StyledIconButton } from "../../styled/common/IconButton";

function IconButton({ faClassName, color, hoverColor, onClick, toolTip }) {
	return (
		<>
			<StyledIconButton
				className={"fas " + faClassName}
				onClick={onClick}
				data-tip={toolTip}
				hoverColor={hoverColor}
				color={color}
			/>
			<ReactTooltip place="top" type="dark" effect="solid" delayShow={200} />
		</>
	);
}

IconButton.propTypes = {
	faClassName: PropTypes.string.isRequired,
	color: PropTypes.string,
	hoverColor: PropTypes.string,
	onClick: PropTypes.func,
	toolTip: PropTypes.string
};

export default IconButton;
