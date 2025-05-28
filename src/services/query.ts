import type { SearchResult } from "../types";
import { convertKeysToCamelCase } from "../utils";
import { supabase } from "./client";

export const searchSimilarAlbums = async (embedding: number[], threshold: number, limit: number) => {
  const { data, error } = await supabase.rpc("search_similar_albums", {
    query_embedding: embedding,
    similarity_threshold: threshold,
    result_limit: limit,
  });

  if (error) {
    throw error;
  }

  return data.map(convertKeysToCamelCase) as SearchResult[]
};