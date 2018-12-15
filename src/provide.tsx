import { ComponentType, default as React, Provider, ReactNode } from 'react'

// prettier-ignore
export function provide<C1>(c1: Provider<C1>): ResultComponent<[C1]>
// prettier-ignore
export function provide<C1, C2>(c1: Provider<C1>, c2: Provider<C2>): ResultComponent<[C1, C2]>
// prettier-ignore
export function provide<C1, C2, C3>(c1: Provider<C1>, c2: Provider<C2>, c3: Provider<C3>): ResultComponent<[C1, C2, C3]>
// prettier-ignore
export function provide<C1, C2, C3, C4>(c1: Provider<C1>, c2: Provider<C2>, c3: Provider<C3>, c4: Provider<C4>): ResultComponent<[C1, C2, C3, C4]>
// prettier-ignore
export function provide<C1, C2, C3, C4, C5>(c1: Provider<C1>, c2: Provider<C2>, c3: Provider<C3>, c4: Provider<C4>, C5: Provider<C5>): ResultComponent<[C1, C2, C3, C4, C5]>
// prettier-ignore
export function provide<C1, C2, C3, C4, C5, C6>(c1: Provider<C1>, c2: Provider<C2>, c3: Provider<C3>, c4: Provider<C4>, C5: Provider<C5>, C6: Provider<C6>): ResultComponent<[C1, C2, C3, C4, C5, C6]>
// prettier-ignore
export function provide<C1, C2, C3, C4, C5, C6, C7>(c1: Provider<C1>, c2: Provider<C2>, c3: Provider<C3>, c4: Provider<C4>, C5: Provider<C5>, C6: Provider<C6>, C7: Provider<C7>): ResultComponent<[C1, C2, C3, C4, C5, C6, C7]>
// prettier-ignore
export function provide<C1, C2, C3, C4, C5, C6, C7, C8>(c1: Provider<C1>, c2: Provider<C2>, c3: Provider<C3>, c4: Provider<C4>, C5: Provider<C5>, C6: Provider<C6>, C7: Provider<C7>, C8: Provider<C8>): ResultComponent<[C1, C2, C3, C4, C5, C6, C7, C8]>
// prettier-ignore
export function provide<C1, C2, C3, C4, C5, C6, C7, C8, C9>(c1: Provider<C1>, c2: Provider<C2>, c3: Provider<C3>, c4: Provider<C4>, C5: Provider<C5>, C6: Provider<C6>, C7: Provider<C7>, C8: Provider<C8>, C9: Provider<C9>): ResultComponent<[C1, C2, C3, C4, C5, C6, C7, C8, C9]>
// prettier-ignore
export function provide<C1, C2, C3, C4, C5, C6, C7, C8, C9, C10>(c1: Provider<C1>, c2: Provider<C2>, c3: Provider<C3>, c4: Provider<C4>, C5: Provider<C5>, C6: Provider<C6>, C7: Provider<C7>, C8: Provider<C8>, C9: Provider<C9>, C10: Provider<C10>): ResultComponent<[C1, C2, C3, C4, C5, C6, C7, C8, C9, C10]>
export function provide(...providers: Array<Provider<any>>): any {
    const component = (props: Props) =>
        providers.reduce<ReactNode>(
            (children, Provider, index) => (
                <Provider value={props.values[index]}>{children}</Provider>
            ),
            props.children,
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
