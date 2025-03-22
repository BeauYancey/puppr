import { MatchProfile } from "@shared/Profile";
import { Database } from "../database/Database";

export class MatchService {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  //   Add a like to the like table and return true if that like results in a match
  async like(likerEmail: string, likeeEmail: string): Promise<boolean> {
    const addLikeSuccess = await this.db.addLike(likerEmail, likeeEmail);
    if (!addLikeSuccess) throw new Error("Could not add like to likers table");
    return await this.db.checkMatchAndAdd(likerEmail, likeeEmail);
  }
}
