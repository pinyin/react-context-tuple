import { ComponentType, Context, default as React, ReactNode } from 'react'

export function provide<T extends Array<Context<any>>>(
    ...contexts: T
): ResultComponent<T> {
    const component = (props: Props) =>
        contexts.reduce<ReactNode>(
            (children, Context, index) => (
                <Context.Provider value={props.values[index]}>
                    {children}
                </Context.Provider>
            ),
            props.children,
        )

    return component as any
}

type Props = {
    values: Array<any>
    children: ReactNode
}

export type ResultComponent<C extends Array<Context<any>>> = ComponentType<{
    values: { [N in keyof C]: C[N] extends Context<infer R> ? R : never }
    children?: ReactNode
}>
