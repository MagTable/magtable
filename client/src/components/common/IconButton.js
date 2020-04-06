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
 * @param nopad boolean flag for 0 padding icon
 * @param toolTipSide side on which to display the tooltip
 * @param props rest of supplied props
 * @param nohide if the icon shouldn't be hidden as in a warning
 * @returns {*} The IconButton component
 * @constructor
 */
function IconButton({
	faClassName,
	color,
	hoverColor,
	onClick,
	toolTip,
	nopad,
	nohide,
	toolTipSide,
	...props
}) {
	return (
		<>
			<StyledIconButton
				className={"fas " + faClassName}
				onClick={onClick}
				data-tip={toolTip}
				data-for={"icon-tooltip"}
				hoverColor={hoverColor}
				color={color}
				nopad={nopad}
				nohide={nohide}
				{...props}
			/>
			<BrowserView>
				<ReactTooltip
					place={toolTipSide || "top"}
					type="dark"
					effect="solid"
					delayShow={200}
					id={"icon-tooltip"}
				/>
			</BrowserView>
		</>
	);
}

IconButton.propTypes = {
	faClassName: PropTypes.string.isRequired,
	color: PropTypes.string,
	hoverColor: PropTypes.string,
	onClick: PropTypes.func,
	toolTip: PropTypes.string,
	nopad: PropTypes.bool,
	nohide: PropTypes.bool,
	toolTipSide: PropTypes.string
};

export default IconButton;
