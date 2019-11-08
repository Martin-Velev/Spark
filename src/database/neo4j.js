import neo4j from "neo4j-driver";

var driver = neo4j.driver(
  "bolt://127.0.0.1:7687 ",
  neo4j.auth.basic("sparky", "neo4j")
);

// Close the driver when application exits.
// This closes all used network connections.
// driver.close();

// Create a session to run Cypher statements in.
// Note: Always make sure to close sessions when you are done using them!
var session = driver.session();

export async function getAllRecords() {
  const query = "MATCH (n) RETURN n AS result";
  const result = await session.run(query);
  session.close();
  return result;
}
