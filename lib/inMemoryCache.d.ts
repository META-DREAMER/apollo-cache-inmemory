import { DocumentNode } from 'graphql';
import { Cache, DataProxy, ApolloCache, Transaction } from 'apollo-cache';
import { OptimisticStoreItem, ApolloReducerConfig, NormalizedCache, NormalizedCacheObject } from './types';
export declare function defaultDataIdFromObject(result: any): string | null;
export declare class InMemoryCache extends ApolloCache<NormalizedCacheObject> {
    protected data: NormalizedCache;
    protected config: ApolloReducerConfig;
    protected optimistic: OptimisticStoreItem[];
    private watches;
    private addTypename;
    private typenameDocumentCache;
    private silenceBroadcast;
    constructor(config?: ApolloReducerConfig);
    restore(data: NormalizedCacheObject): this;
    extract(optimistic?: boolean): NormalizedCacheObject;
    read<T>(query: Cache.ReadOptions): T | null;
    write(write: Cache.WriteOptions): void;
    diff<T>(query: Cache.DiffOptions): Cache.DiffResult<T>;
    watch(watch: Cache.WatchOptions): () => void;
    evict(query: Cache.EvictOptions): Cache.EvictionResult;
    reset(): Promise<void>;
    removeOptimistic(id: string): void;
    performTransaction(transaction: Transaction<NormalizedCacheObject>): void;
    recordOptimisticTransaction(transaction: Transaction<NormalizedCacheObject>, id: string): void;
    transformDocument(document: DocumentNode): DocumentNode;
    readQuery<QueryType, TVariables = any>(options: DataProxy.Query<TVariables>, optimistic?: boolean): QueryType;
    readFragment<FragmentType, TVariables = any>(options: DataProxy.Fragment<TVariables>, optimistic?: boolean): FragmentType | null;
    writeQuery<TData = any, TVariables = any>(options: DataProxy.WriteQueryOptions<TData, TVariables>): void;
    writeFragment<TData = any, TVariables = any>(options: DataProxy.WriteFragmentOptions<TData, TVariables>): void;
    protected broadcastWatches(): void;
}