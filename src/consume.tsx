import {nothing} from '@pinyin/types'
import {ComponentType, Consumer, default as React, ReactNode} from 'react'

export function consume<C1>(c1: Consumer<C1>): ResultComponent<C1>
export function consume<C1, C2>(c1: Consumer<C1>, c2: Consumer<C2>): ResultComponent<C1, C2>
export function consume<C1, C2, C3>(c1: Consumer<C1>, c2: Consumer<C2>,
                                    c3: Consumer<C3>): ResultComponent<C1, C2, C3>
export function consume(...consumers: Array<Consumer<any>>): any {
    const component = (props: Props): ReactNode =>
        consumers.reduce<Children>(
            (children, Current): Children =>
                (...parentContent: Array<any>) =>
                    <Current>{content =>
                        children(...[content, ...parentContent])
                    }</Current>,
            props.children || (() => nothing)
        )([])

    return component // FIXME
}

type Props = {
    children?: Children
}

type Children = (...contents: Array<any>) => ReactNode

export type ResultComponent<C1=never, C2=never, C3=never, C4=never, C5=never> = ComponentType<{
    children?: (a: C1, b: C2, c: C3, d: C4, e: C5) => ReactNode
}>
