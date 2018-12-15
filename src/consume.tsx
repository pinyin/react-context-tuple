import { nothing } from '@pinyin/types'
import { ComponentType, Consumer, default as React, ReactNode } from 'react'

// prettier-ignore
export function consume<C1>(c1: Consumer<C1>): ResultComponent<C1>
// prettier-ignore
export function consume<C1, C2>(c1: Consumer<C1>, c2: Consumer<C2>): ResultComponent<C1, C2>
// prettier-ignore
export function consume<C1, C2, C3>(c1: Consumer<C1>, c2: Consumer<C2>, c3: Consumer<C3>): ResultComponent<C1, C2, C3>
// prettier-ignore
export function consume<C1, C2, C3, C4>(c1: Consumer<C1>, c2: Consumer<C2>, c3: Consumer<C3>, c4: Consumer<C4>): ResultComponent<C1, C2, C3, C4>
// prettier-ignore
export function consume<C1, C2, C3, C4, C5>(c1: Consumer<C1>, c2: Consumer<C2>, c3: Consumer<C3>, c4: Consumer<C4>, C5: Consumer<C5>): ResultComponent<C1, C2, C3, C4, C5>
// prettier-ignore
export function consume<C1, C2, C3, C4, C5, C6>(c1: Consumer<C1>, c2: Consumer<C2>, c3: Consumer<C3>, c4: Consumer<C4>, C5: Consumer<C5>, C6: Consumer<C6>): ResultComponent<C1, C2, C3, C4, C5, C6>
// prettier-ignore
export function consume<C1, C2, C3, C4, C5, C6, C7>(c1: Consumer<C1>, c2: Consumer<C2>, c3: Consumer<C3>, c4: Consumer<C4>, C5: Consumer<C5>, C6: Consumer<C6>, C7: Consumer<C7>): ResultComponent<C1, C2, C3, C4, C5, C6, C7>
// prettier-ignore
export function consume<C1, C2, C3, C4, C5, C6, C7, C8>(c1: Consumer<C1>, c2: Consumer<C2>, c3: Consumer<C3>, c4: Consumer<C4>, C5: Consumer<C5>, C6: Consumer<C6>, C7: Consumer<C7>, C8: Consumer<C8>): ResultComponent<C1, C2, C3, C4, C5, C6, C7, C8>
// prettier-ignore
export function consume<C1, C2, C3, C4, C5, C6, C7, C8, C9>(c1: Consumer<C1>, c2: Consumer<C2>, c3: Consumer<C3>, c4: Consumer<C4>, C5: Consumer<C5>, C6: Consumer<C6>, C7: Consumer<C7>, C8: Consumer<C8>, C9: Consumer<C9>): ResultComponent<C1, C2, C3, C4, C5, C6, C7, C8, C9>
// prettier-ignore
export function consume<C1, C2, C3, C4, C5, C6, C7, C8, C9, C10>(c1: Consumer<C1>, c2: Consumer<C2>, c3: Consumer<C3>, c4: Consumer<C4>, C5: Consumer<C5>, C6: Consumer<C6>, C7: Consumer<C7>, C8: Consumer<C8>, C9: Consumer<C9>, C10: Consumer<C10>): ResultComponent<C1, C2, C3, C4, C5, C6, C7, C8, C9, C10>
export function consume(...consumers: Array<Consumer<any>>): any {
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

    return component // FIXME
}

// prettier-ignore
export type ResultComponent<C1=never, C2=never, C3=never, C4=never, C5=never, C6=never, C7=never, C8=never, C9=never, C10=never> = ComponentType<{
// prettier-ignore
    children?: (c1: C1, c2: C2, c3: C3, c4: C4, c5: C5, c6: C6, c7: C7, c8: C8, c9: C9, c10: C10) => ReactNode
}>
