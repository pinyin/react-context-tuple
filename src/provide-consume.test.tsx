import {nothing} from '@pinyin/types'
import * as React from 'react'
import {create} from 'react-test-renderer'
import {consume} from './consume'
import {provide} from './provide'

describe(`${provide.name}-${consume.name}`, () => {
    const c1: number = 0
    const C1 = React.createContext(c1)

    const c2: string = 'str'
    const C2 = React.createContext(c2)

    const c3 = () => nothing
    const C3 = React.createContext(c3)

    const Provides = provide(C1.Provider, C2.Provider, C3.Provider)
    const Consumes = consume(C1.Consumer, C2.Consumer, C3.Consumer)

    test(`provider should be renderable`, () => {
        const renderer = create(<Provides values={[1, '2', () => nothing]}/>)
        expect(renderer.root.type).toEqual(Provides)
    })

    test(`consumer should be renderable`, () => {
        const renderer = create(<Consumes/>)
        expect(renderer.root.type).toEqual(Consumes)
    })

    test(`consumer should receive context contents as array`, () => {
        const renderer = create(<Consumes>{(c1, c2, c3) => `${c1}, ${c2}, ${c3}`}</Consumes>)
        expect(renderer.root.children).toEqual([`${c1}, ${c2}, ${c3}`])
    })

})
