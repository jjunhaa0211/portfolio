export type KVType<K, V> = {
    key: K,
    value: V,
}

export type KVNType<K, V> = {
    key: K | null | undefined,
    value: V | null | undefined,
}