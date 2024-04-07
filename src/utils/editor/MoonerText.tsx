import React, { CSSProperties, HTMLAttributes } from 'react'
import { motion, MotionProps } from 'framer-motion'
import styled from 'styled-components'
import { FontStyles, keyOfFontStyles } from './MoonerFont'
import { colors, colorsKeyOfType } from '../colors'

type Props = HTMLAttributes<HTMLSpanElement> &
	MotionProps & {
		typography?: keyOfFontStyles
		style?: CSSProperties
		color?: colorsKeyOfType
		// width?: string
		// height?: string
		margin?: string
		// clickable?: boolean
		// center?: boolean
		// right?: boolean
		// left?: boolean
		// justify?: boolean
		$lineHeight?: string
		// $break?: 'normal' | 'break-all' | 'keep-all' | 'break-word' | 'inherit'
		// $whiteSpace?:
		// 	| 'normal'
		// 	| 'nowrap'
		// 	| 'pre'
		// 	| 'pre-wrap'
		// 	| 'pre-line'
		// 	| 'inherit'
	}

export const MoonerText = ({
	typography = 'P',
	color = 'white',
	style,
	// width,
	// height,
	// center,
	margin,
	// right,
	// left,
	// justify,
	// clickable,
	$lineHeight,
	// $break,
	// $whiteSpace,
	...props
}: Props) => {
	const innerStyle: CSSProperties = {
		color: colors[color],
		// width: width,
		// height: height,
		// textAlign: justify
		// 	? 'justify'
		// 	: center
		// 		? 'center'
		// 		: right
		// 			? 'right'
		// 			: left
		// 				? 'left'
		// 				: 'inherit',
		// cursor: clickable ? 'pointer' : 'default',
		wordBreak: 'keep-all',
		// whiteSpace: $whiteSpace ? $whiteSpace : 'inherit',
		...FontStyles[typography],
		...style
	}

	return (
		<NativeSpan
			style={innerStyle}
			$lineHeight={$lineHeight}
			$margin={margin}
			{...props}
		/>
	)
}

const NativeSpan = styled(motion.span)<{
	$lineHeight?: string
	$margin?: string
}>`
	margin: ${props => props.$margin ?? '0'};
	padding: 0;
	line-height: ${props => props.$lineHeight ?? '1.2'};
`
