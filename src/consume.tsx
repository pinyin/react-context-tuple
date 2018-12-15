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
                    {content =>
                        typeof children === 'function'
                            ? children(...[content, ...parentContent])
                            : children
                    }
                </Current>
            ),
            props.children || (() => nothing),
        )([])

    return component as any
}

// prettier-ignore
export type ResultComponent<T extends any[]> = ComponentType<{
// prettier-ignore
    children?: (...content: T) => ReactNode
}>
