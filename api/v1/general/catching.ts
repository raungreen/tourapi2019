import {RequestHandler} from "express";
import { cache } from "../../../cache/cache";

export const cacheCheck: RequestHandler = {req, res, next}=>{
  cache.get()
};