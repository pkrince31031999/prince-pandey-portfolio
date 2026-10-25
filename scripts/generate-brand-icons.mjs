import * as s from "simple-icons";
import { writeFileSync } from "node:fs";

const map = {
  PHP: s.siPhp,
  Python: s.siPython,
  Go: s.siGo,
  JavaScript: s.siJavascript,
  MySQL: s.siMysql,
  HTML: s.siHtml5,
  CSS: s.siCss,
  Laravel: s.siLaravel,
  CodeIgniter: s.siCodeigniter,
  Flask: s.siFlask,
  Django: s.siDjango,
  Gin: s.siGin,
  jQuery: s.siJquery,
  JWT: s.siJsonwebtokens,
  OAuth: s.siOpenid,
  Redis: s.siRedis,
  MongoDB: s.siMongodb,
  Docker: s.siDocker,
  Kubernetes: s.siKubernetes,
  Terraform: s.siTerraform,
  "Jenkins CI/CD": s.siJenkins,
  "GitHub Actions": s.siGithubactions,
  Linux: s.siLinux,
  Ubuntu: s.siUbuntu,
  Nginx: s.siNginx,
  Apache: s.siApache,
  Grafana: s.siGrafana,
  Prometheus: s.siPrometheus,
  GitHub: s.siGithub,
  GitLab: s.siGitlab,
  Bitbucket: s.siBitbucket,
  Jira: s.siJira,
  Trello: s.siTrello,
  Postman: s.siPostman,
  Swagger: s.siSwagger,
  "Kafka (Basics)": s.siApachekafka,
};

const missing = Object.entries(map).filter(([, icon]) => !icon);
if (missing.length) {
  console.error("missing", missing.map(([name]) => name));
  process.exit(1);
}

const entries = Object.entries(map)
  .map(
    ([name, icon]) =>
      `  ${JSON.stringify(name)}: { hex: "${icon.hex}", path: "${icon.path}" },`,
  )
  .join("\n");

const file = `/* Brand marks from Simple Icons, used under CC0. https://simpleicons.org */
export const brandIcons: Record<string, { hex: string; path: string }> = {
${entries}
};
`;

writeFileSync(new URL("../data/brand-icons.ts", import.meta.url), file);
console.log("wrote", Object.keys(map).length);
