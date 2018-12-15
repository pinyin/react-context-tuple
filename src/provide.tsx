import { ComponentType, default as React, Provider, ReactNode } from 'react'

type Providers<T> = { [P in keyof T]: Provider<T[P]> }
export function provide<T extends Array<any>>(
    ...providers: Providers<T>
): ResultComponent<T> {
    const component = (props: Props) =>
        providers.reduce<ReactNode>(
            (children, Provider, index) => (
                <Provider value={props.values[index]}>{children}</Provider>
            ),
            props.children,
        )

    return component as any
}

type Props = {
    values: Array<any>
    children: ReactNode
}

export type ResultComponent<V> = ComponentType<{
    values: V
    children?: ReactNode
}>
