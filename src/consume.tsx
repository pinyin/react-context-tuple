import { nothing } from '@pinyin/types'
import { ComponentType, Consumer, default as React, ReactNode } from 'react'

type Consumers<T> = { [P in keyof T]: Consumer<T[P]> }
export function consume<T extends Array<any>>(
    ...consumers: Consumers<T>
): ResultComponent<T> {
    const component = (props: any): ReactNode =>
        consumers.reduce<any>(
            (children, Current): any => (...parentContent: Array<any>) => (
                <Current>
                    {content => children(...[content, ...parentContent])}
                </Current>
            ),
            props.children || (() => nothing),
        )([])

    return component as any
}

export type ResultComponent<T extends any[]> = ComponentType<{
    children?: (...values: T) => ReactNode
}>
