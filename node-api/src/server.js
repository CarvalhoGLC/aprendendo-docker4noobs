import { createServer } from "node:http";

const port = Number(process.env.PORT ?? 3000);

const server = createServer((request, response) => {
  response.setHeader("Content-Type", "application/json; charset=utf-8");

  if (request.url === "/health") {
    response.writeHead(200);
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }

  response.writeHead(200);
  response.end(
    JSON.stringify({
      message: "Docker4Noobs API",
      path: request.url,
    }),
  );
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});