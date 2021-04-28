/**
 * External dependencies
 */
import { css } from 'emotion';

/**
 * Internal dependencies
 */
import { COLORS, CONFIG } from '../../utils';

export const Text = css`
	color: ${ COLORS.black };
	line-height: ${ CONFIG.fontLineHeightBase };
	margin: 0;
`;

export const block = css`
	display: block;
`;

export const positive = css`
	color: ${ COLORS.alert.green };
`;

export const destructive = css`
	color: ${ COLORS.alert.red };
`;

export const muted = css`
	color: ${ COLORS.mediumGray.text };
`;

export const highlighterText = css`
	mark {
		background: ${ COLORS.alert.yellow };
		border-radius: 2px;
		box-shadow: 0 0 0 1px rgba( 0, 0, 0, 0.05 ) inset,
			0 -1px 0 rgba( 0, 0, 0, 0.1 ) inset;
	}
`;

export const upperCase = css`
	text-transform: uppercase;
`;
