import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import { IconButton as StyledIconButton } from "../../styled/common/IconButton";
import { BrowserView } from "react-device-detect";

/**
 * @date 2/17/2020
 * @author Arran Woodruff, Steven wong
 * A component rendered as a FontAwesome icon which has a tooltip and an onClick function
 * @name IconButton
 * @category Component/Common
 * @param faClassName Class name of the FontAwesome icon
 * @param color Color of the icon
 * @param hoverColor Hover color of the icon
 * @param onClick Function to be called onClick
 * @param toolTip Tooltip message
 * @returns {*} The IconButton component
 * @constructor
 */
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
			<BrowserView>
				<ReactTooltip place="top" type="dark" effect="solid" delayShow={200} />
			</BrowserView>
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
