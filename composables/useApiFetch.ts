import type {UseFetchOptions} from 'nuxt/app'
import {useRequestHeaders} from "nuxt/app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {
    accept: "application/json",
    referer: "http://localhost:3000"
  }
  // const baseApi = "http://localhost:9050/public"; // dev api
  const baseApi = "http://localhost:9050/public"; // server api
  const token = useCookie('XSRF-TOKEN');

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string;
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
    }
  }

  return useFetch( baseApi + path, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  });
}