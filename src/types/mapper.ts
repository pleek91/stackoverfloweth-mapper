import { AnyProfile, ExtractSourceKeys, ExtractSources, ExtractDestinationKeys, ExtractDestinations } from '@/types/profile'

export type Mapper<T extends AnyProfile> = {
  map: <
    TSourceKey extends ExtractSourceKeys<T>,
    TSource extends ExtractSources<T, TSourceKey>,
    TDestinationKey extends ExtractDestinationKeys<T, TSourceKey>,
    TDestination extends ExtractDestinations<T, TSourceKey, TDestinationKey>
  > (sourceKey: TSourceKey, source: TSource, destinationKey: TDestinationKey) => TDestination,
  mapMany: <
    TSourceKey extends ExtractSourceKeys<T>,
    TSource extends ExtractSources<T, TSourceKey>,
    TDestinationKey extends ExtractDestinationKeys<T, TSourceKey>,
    TDestination extends ExtractDestinations<T, TSourceKey, TDestinationKey>
  > (sourceKey: TSourceKey, sourceArray: TSource[], destinationKey: TDestinationKey) => TDestination[],
}