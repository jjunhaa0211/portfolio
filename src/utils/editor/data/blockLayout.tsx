import styled from 'styled-components'
import { AlignType } from './blockInterface'
import { colors } from '../../colors'

export const BlockA = styled.a`
	color: dodgerblue !important;
`

export const BlockEditor = styled.span`
	color: black;
	font-family: Pretendard, Prontandard, sans-serif;
	font-weight: 400;
	font-size: 16px;
`

export const BlockNumbering = ({ ...props }) => (
	<NumberingDiv>{props.children}</NumberingDiv>
)

export const BlockList = ({ ...props }) => (
	<NumberingDiv>
		<ListItem />
	</NumberingDiv>
)

const ListItem = styled.div`
	height: 6px;
	width: 6px;
	margin-right: 4px;
	border-radius: 30px;
	background-color: #909090;
`

const NumberingDiv = styled.div`
	height: 24px;
	min-width: 30px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 5px;
`

export const BlockQuotation = ({ ...props }) => (
	<QuotationDiv>
		<QuotationItem />
		<QuotationTexts>{props.children}</QuotationTexts>
	</QuotationDiv>
)

const QuotationTexts = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`

const QuotationDiv = styled.div`
	display: flex;
	gap: 10px;
	//width: 14px;
	//justify-content: flex-start;
`

const QuotationItem = styled.div`
	height: 100%;
	width: 3px;
	border-radius: 30px;
	background-color: ${colors.gray8};
`

export const BlockShortCode = styled.span`
	background-color: ${colors.gray8};
	border-radius: 3px;
	padding: 1px 3px;
	color: #ec5c5c;
`

export const BlockAlign = styled.div<{ $align: AlignType; $tab?: string }>`
	width: calc(100% - ${props => props.$tab ?? '0'});
	display: flex;
	justify-content: ${props =>
		props.$align == 'left'
			? 'flex-start'
			: props.$align == 'right'
				? 'flex-end'
				: 'center'};
	white-space: pre-wrap;
	margin-left: ${props => props.$tab ?? '0'};
	//margin: {props => props.$margin ?? "8px 0 0 0"};

	span {
		text-align: ${props => props.$align};
	}
`

export const BlockLine = styled.div`
	width: 100%;
	height: 2px;
	min-height: 2px;
	border-radius: 10px;
	background-color: ${colors.gray7};
	margin: 4px 0;
`

export const BlockBold = styled.span`
	font-weight: bold;
`

export const BlockUnderline = styled.span`
	text-decoration-line: underline;
	text-decoration-style: solid;
`

export const BlockStrikethrough = styled.span`
	text-decoration-line: line-through;
	text-decoration-style: solid;
`

export const BlockUnderStrikethrough = styled.span`
	text-decoration-line: underline line-through;
	text-decoration-style: solid;
`

export const BlockItalic = styled.span`
	font-style: italic;
`
