import type {UseFetchOptions} from 'nuxt/app'
import {useRequestHeaders} from "nuxt/app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {
    accept: "application/json",
    referer: "http://innovation.ictc.go.tz"
  }
  const config = useRuntimeConfig()
  const baseApi = config.public.apiBaseUlr; //  Baseapi

  const token = useCookie('XSRF-TOKEN');
  // console.log(`requested token`, token.value);
  
  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string;
    // console.log(`HeaderToken`,headers['X-XSRF-TOKEN']);
    
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