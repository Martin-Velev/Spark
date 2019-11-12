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
  let result = await session.run(query);
  result = result.records.map(rsp => formatResponse(rsp));
  session.close();
  return result;
}

export async function getFirstNode() {
  const query = 'MATCH (s) WHERE s.label="hello" \n RETURN s';
  let result = await session.run(query);
  result = result.records.map(rsp => formatResponse(rsp));
  session.close();
  return result;
}

export async function getResponses(id) {
  const query = `
    MATCH (n)
    WHERE ID(n) = 0
    MATCH (responses)-[:RSP]->(n)
    WHERE NOT (responses)-[:RSP]->(responses)
    RETURN responses
  `;

  let result = await session.run(query);
  result = result.records.map(rsp => formatResponse(rsp));
  session.close();
  return result;
}

function formatResponse(rsp) {
  const data = { ...rsp._fields[0].properties };
  return {
    id: rsp._fields[0].identity.low,
    p: data.p,
    s: data.s,
    label: data.label
  };
}
