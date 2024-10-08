import { graphqlApi, omdbApi } from "../api";
import { createEpisode } from "./create-episode";
import { subscribeToEpisodesEvents } from "./episodes-subscriptions";
import { deleteEpisode } from "./delete-episode";
import { getEpisodeById } from "./get-episode-by-id";
import { listEpisodes } from "./get-episodes";
import { getOmdbEpisodeById } from "./get-omdb-episode-details";
import { updateEpisode } from "./update-episode";

export const episodesApi = graphqlApi.injectEndpoints({
  endpoints: (build) => ({
    listEpisodes: listEpisodes(build),
    getEpisodeById: getEpisodeById(build),
    createEpisode: createEpisode(build),
    updateEpisode: updateEpisode(build),
    deleteEpisode: deleteEpisode(build),
    subscribeToEpisodesEvents: subscribeToEpisodesEvents(build)
  }),
});

export const episodeOmdbApi = omdbApi.injectEndpoints({
  endpoints: (build) => ({
    getOmdbEpisodeById: getOmdbEpisodeById(build)
  })
})


export const {
  useListEpisodesQuery, 
  useGetEpisodeByIdQuery,
  useLazyGetEpisodeByIdQuery,
  useSubscribeToEpisodesEventsQuery,
  useCreateEpisodeMutation,
  useUpdateEpisodeMutation,
  useDeleteEpisodeMutation
} = episodesApi;

export const {
  useGetOmdbEpisodeByIdQuery,
  useLazyGetOmdbEpisodeByIdQuery
} = episodeOmdbApi;