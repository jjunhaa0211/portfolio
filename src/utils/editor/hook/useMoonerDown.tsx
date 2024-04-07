import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import MoonerDownEditor from '../components/MoonerDownEditor'
import { RenderDiv } from '../Style'
import { Blocks } from '../data/Blocks'

const useMoonerDown = (text?: string) => {
	const [texts, setTexts] = useState<string>(text?.split("\n").map(v => v.trim()).join("\n") ?? '')
	const renderRef = useRef<HTMLDivElement>(null)

	const Editor: (placeholder?: string) => React.ReactElement = (
		placeholder?: string
	) => (
		<MoonerDownEditor
			texts={texts}
			setTexts={setTexts}
			renders={renderRef}
			placeholder={placeholder}
		/>
	)

	return {
		texts,
		Editor,
		Result: <RenderDiv ref={renderRef}>{Blocks.compile(texts)}</RenderDiv>
	}
}

export default useMoonerDown
