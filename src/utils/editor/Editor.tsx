'use client'

import styled from 'styled-components'
import { useMemo, useRef, useState } from 'react'
import { Blocks } from './data/Blocks'
import MoonerDownEditor from './components/MoonerDownEditor'

const Editor = () => {
	const [texts, setTexts] = useState<string>('')
	const renders = useRef<HTMLDivElement>(null)

	// useLayoutEffect(() => {
	//     const render = renders.current;
	//     const rendered = renderedDiv.current;
	//     if (render && rendered) {
	//         render.innerHTML = rendered.innerHTML
	//             .replaceAll(`&amp;:a${Blocks.key}:&amp;`, `*`)
	//             .replaceAll(`&amp;:b${Blocks.key}:&amp;`, `-`)
	//             .replaceAll(`&amp;:c${Blocks.key}:&amp;`, '_')
	//             .replaceAll(`&amp;:d${Blocks.key}:&amp;`, '~')
	//             .replaceAll(`&amp;:e${Blocks.key}:&amp;`, '`')
	//             .replaceAll(`&amp;:f${Blocks.key}:&amp;`, '<')
	//             .replaceAll(`&amp;:g${Blocks.key}:&amp;`, '>')
	//             .replaceAll(`&amp;:h${Blocks.key}:&amp;`, '=')
	//     }
	// }, [texts]);

	return (
		<Box>
			<Editing>
				<MoonerDownEditor texts={texts} setTexts={setTexts} renders={renders} />
			</Editing>
			{/*<EmptyDiv ref={renderedDiv}>*/}
			{/*    {blocks.compile(texts)}*/}
			{/*</EmptyDiv>*/}
			<HalfBox ref={renders}>{Blocks.compile(texts)}</HalfBox>
		</Box>
	)
}

const EmptyDiv = styled.div`
	width: 1px;
	height: 1px;
	position: fixed;
	opacity: 0;
	z-index: -100;
`

const Editing = styled.div`
	width: 50%;
	height: 100%;
	background-color: white;
`

const HalfBox = styled.div`
	width: calc(50% - 32px);
	height: calc(100% - 40px);
	padding: 16px 20px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	gap: 10px;
	white-space: pre;
`

const Box = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	background-color: black;
`

export default Editor
