import {ComponentType, default as React, Provider, ReactNode} from 'react'

export function provide<C1>(p1: Provider<C1>): ResultComponent<[C1]>
export function provide<C1, C2>(p1: Provider<C1>, p2: Provider<C2>): ResultComponent<[C1, C2]>
export function provide<C1, C2, C3>(p1: Provider<C1>, p2: Provider<C2>,
                                    p3: Provider<C3>): ResultComponent<[C1, C2, C3]>
export function provide(...providers: Array<Provider<any>>): any {
    const component = (props: Props) =>
        providers.reduce<ReactNode>(
            (children, Provider, index) =>
                <Provider value={props.values[index]}>
                    {children}
                </Provider>,
            props.children
        )

    return component // FIXME why is any necessary
}

type Props = {
    values: Array<any>
    children: ReactNode
}

export type ResultComponent<V> = ComponentType<{
    values: V
    children?: ReactNode
}>
