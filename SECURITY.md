# Security Policy

## ⚠️ Important: `dw-api-mock` on the public npm registry is NOT this project

This GitHub repository (`SalesforceCommerceCloud/dw-api-mock`) is a legitimate, safe
mock of the Demandware Script API used for unit testing. **It is intended to be
consumed directly from GitHub via a git URL — it was never published to the public
npm registry by Salesforce.**

A third party published a **malicious** package under the same name (`dw-api-mock`)
to the public npm registry, exploiting the unclaimed name in a
[dependency-confusion](https://cwe.mitre.org/data/definitions/506.html) attack. This
is the subject of GitHub Security Advisory
[GHSA-2xr6-47f3-hjmf](https://github.com/advisories/GHSA-2xr6-47f3-hjmf). **That
advisory is scoped to the npm package — not to the source code in this repository.**

### Safe usage

Depend on this project from GitHub, never from the public npm registry:

```json
"devDependencies": {
  "dw-api-mock": "git+ssh://github.com/SalesforceCommerceCloud/dw-api-mock.git"
}
```

❌ Do **not** run `npm install dw-api-mock` and do **not** add a registry version such
as `"dw-api-mock": "^1.0.0"` — either of those resolves the malicious package from
npmjs.com.

### If you installed the npm package

If your environment ran `npm install dw-api-mock` and resolved it from the public npm
registry, treat that environment as potentially compromised:

1. Notify your security team.
2. Rotate all secrets, credentials, and API keys **from a different, clean machine**.
3. Remove the package. Because the malware may have granted an outside party control
   of the machine, removal alone is not a guarantee of remediation.

To confirm the source of your dependency, inspect your lockfile
(`package-lock.json` / `yarn.lock`) and verify `dw-api-mock` resolves from the GitHub
git URL rather than the npm registry.

## Reporting a vulnerability

If you believe you have found a security vulnerability in this repository, please
report it privately rather than opening a public issue:

- Use GitHub's [private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability)
  ("Report a vulnerability" under the repository's **Security** tab), or
- Contact the Salesforce Product Security team at <security@salesforce.com>.

Please do not disclose the issue publicly until it has been reviewed and addressed.
