import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Basic routes for the birthday website - just serving static files
  // No specific API endpoints needed for this application

  const httpServer = createServer(app);
  return httpServer;
}
