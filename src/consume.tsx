import { ComponentType, Context, default as React, ReactNode } from 'react'

export function consume<T extends Array<Context<any>>>(
    ...contexts: T
): ResultComponent<T> {
    const component = (props: any): ReactNode =>
        contexts.reduce<any>(
            (children, Context): any => (...parentContent: Array<any>) => (
                <Context.Consumer>
                    {content => children(...[content, ...parentContent])}
                </Context.Consumer>
            ),
            props.children || (() => {}),
        )([])

    return component as any
}

export type ResultComponent<T extends Array<Context<any>>> = ComponentType<{
    children?: (
        ...values: { [N in keyof T]: T[N] extends Context<infer R> ? R : never }
    ) => ReactNode
}>
