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

export async function fetchAllRecords() {
  const query = "MATCH (n) RETURN n AS result";
  let result = await session.run(query);
  result = result.records.map(rsp => formatResponse(rsp));
  session.close();
  return result;
}

export async function fetchFirstNode() {
  return this.fetchNodeByLabel("hello");
}

export async function fetchNodeByID(id) {
  const query = `
    MATCH (n) WHERE ID(n) = ${id}
    RETURN n
  `;
  let result = await session.run(query);
  result = formatResponse(result.records[0]);
  result.next = await fetchResponses(result.id);
  session.close();
  return result;
}

export async function fetchNodeByLabel(label) {
  const query = `
    MATCH (n) WHERE n.label="${label}" 
    RETURN n
  `;
  let result = await session.run(query);
  result = formatResponse(result.records[0]);
  result.next = await fetchResponses(result.id);
  session.close();
  return result;
}

export async function fetchResponses(id) {
  const query = `
    MATCH (n)
    WHERE ID(n) = ${id}
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
  const id = rsp._fields[0].identity.low;
  return {
    id,
    player: data.p,
    sparky: data.s,
    label: data.label
  };
}
