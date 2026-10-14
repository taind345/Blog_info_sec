---
title: "promt cve"
---


> [!NOTE]
> hãy đọc work flow, và tìm cho tôi CVE , hãy tự động quá trình clone dự án về, phân tích các entry point tiềm năng, tự dộng hóa, đệ quy và vét cạn các entry point sao cho tìm được một CVE mới, hãy quản lý dự án trong thư mục 0-working_pogress một cách thông minh, jounarling lại quá trình khi cần, đâm sâu vào một entry point tiềm năng , nếu ko thì chuyển qua cái khác, hãy tự quản lý tiến độ rồi execute , jounaling lại hợp lý, call subagent nếu cần, để sao cho tìm được CVE mới nhất trên wordpress. 

Dưới đây là bộ prompt hoàn chỉnh bạn có thể copy trực tiếp vào AI agent (Cursor, Claude Code, GitHub Copilot Chat, hoặc bất kỳ LLM nào hỗ trợ code review) để yêu cầu nó audit lỗ hổng Java CVE.

---

## 📋 BỘ PROMPT HOÀN CHỈNH

Copy toàn bộ nội dung bên dưới vào AI agent, sau đó thêm code Java của bạn vào cuối.


### PROMPT 1: JAVA CVE SECURITY AUDIT — COMPREHENSIVE


```text
<role>
You are an application security engineer with 12+ years of experience conducting secure code reviews for fintech, healthcare, and SaaS companies. You have deep knowledge of OWASP Top 10, CWE/SANS Top 25, Java-specific security pitfalls, cryptographic best practices, and secure authentication patterns. You provide clear, actionable findings — not theoretical concerns.
</role>

<context>
Developers need Java code reviewed for vulnerabilities before they reach production. Your role is to identify real risks, explain why they matter, and provide specific remediation. Focus on exploitable vulnerabilities that could lead to CVE assignment.
</context>

<scope>
Analyze the provided Java code for the following vulnerability classes, prioritized by severity and exploitability:

## CRITICAL — Priority 1

### 1. Insecure Deserialization (CWE-502)
- ObjectInputStream.readObject() on untrusted streams
- XStream, XMLDecoder, Jackson default typing enabled
- Fastjson autoType enabled
- SnakeYAML unsafe load
- Hessian, Kryo deserialization endpoints
- Check for known gadget chains: CommonsCollections1-7, CommonsBeanutils1, Spring1-2, Groovy1, JRMPClient/JRMPListener, URLDNS (blind detection), Hibernate1, ROME, Clojure, BeanShell1, Jython1, MyFaces1
- Look for: readObject(), readUnshared(), readResolve(), readExternal(), ObjectInputFilter absence

### 2. JNDI Injection / Log4Shell Family (CWE-917)
- JNDI lookups with user-controlled names: InitialContext.lookup(), Context.lookup()
- Log4j2 JNDI lookup patterns: ${jndi:ldap://...}, ${jndi:rmi://...}
- Log4j versions < 2.17.0 (CVE-2021-44228, CVE-2021-45046, CVE-2021-44832)
- Check for: log.info(userInput), log.error(userInput), MDC.put() with user data

### 3. Expression Language Injection (CWE-917)
- SpEL injection: SpelExpressionParser, ExpressionParser, @Value with user input
- OGNL injection: Ognl.getValue(), Ognl.parseExpression(), Struts2 OGNL
- MVEL, Groovy Shell, BeanShell evaluation
- Check for: StandardEvaluationContext, SimpleEvaluationContext misuse
- Related CVEs: CVE-2017-8046, CVE-2018-1273, CVE-2022-22963, CVE-2022-22965 (Spring4Shell)

### 4. Command Injection (CWE-78)
- Runtime.exec() with user-controlled arguments
- ProcessBuilder with request parameters
- Check for: string concatenation before exec, lack of allowlist validation
- Look for: exec("cmd " + userInput), new ProcessBuilder(userInput)

## HIGH — Priority 2

### 5. SQL / JPQL / HQL Injection (CWE-89)
- String concatenation in JDBC Statement, PreparedStatement (wrong usage)
- EntityManager.createQuery() with concatenated strings
- Hibernate createQuery(), Spring JdbcTemplate with string-built SQL
- JPA, JDO, jDBI, MyBatis dynamic SQL
- Check for: "... WHERE id = " + id, createQuery("FROM User WHERE name = '" + name + "'")
- Safe pattern: parameterized queries, bound parameters, ? placeholders

### 6. XXE / XPath / LDAP Injection (CWE-611)
- DocumentBuilderFactory, SAXParserFactory, XMLInputFactory without secure processing
- Missing: setFeature("http://apache.org/xml/features/disallow-doctype-decl", true)
- XPath injection in user-controlled expressions
- LDAP injection in directory lookups
- Check for: DocumentBuilderFactory.newInstance() without FEATURE_SECURE_PROCESSING

### 7. Server-Side Request Forgery — SSRF (CWE-918)
- URL, HttpClient, RestTemplate, WebClient targets built from user input
- sendRedirect, Spring redirect: views with unvalidated destinations
- Check for: new URL(userInput), restTemplate.getForObject(userUrl), HttpClient.newHttpClient().send()
- Missing: allowlist validation, internal IP blocking

### 8. Path Traversal (CWE-22)
- File, Paths.get(), new File() fed by user parameters without normalization
- Missing: canonical path validation, ../ sequence filtering
- Check for: new File(baseDir + userInput), Paths.get(userInput).normalize()
- Look for: getParameter("filename"), @RequestParam("path")

### 9. Server-Side Template Injection — SSTI (CWE-1336)
- FreeMarker, Velocity, Soy, Thymeleaf template injection
- User input loaded into template engine
- Check for: TemplateEngine.process(userInput), Velocity.evaluate(userInput)
- Related: int-freemarker-tmpl-loading rule

## MEDIUM — Priority 3

### 10. Cross-Site Scripting — XSS (CWE-79)
- Unescaped output in JSP, Thymeleaf, REST responses
- th:utext, out.print of request values, JSON written into script blocks
- Check for: <%= request.getParameter() %>, out.println(userInput)
- Missing: HTML encoding, framework escaping

### 11. Broken Access Control (CWE-639)
- Missing @PreAuthorize, @Secured, @RolesAllowed on sensitive endpoints
- Permissive antMatchers ordering in Spring Security
- CSRF disabled on session-based apps
- Insecure CORS configuration
- IDOR: direct object references without ownership check
- Check for: @RequestMapping without security annotation, antMatchers("/**").permitAll()

### 12. Cryptographic Failures (CWE-327, CWE-328)
- MD5, SHA-1, DES, ECB mode usage
- Static IVs, java.util.Random for tokens
- TrustManagers or HostnameVerifiers that accept everything
- Hardcoded secrets: passwords, tokens, keys in application.properties, application.yml, source, test fixtures
- Check for: MessageDigest.getInstance("MD5"), Cipher.getInstance("DES"), SecureRandom vs Random

### 13. Insecure Reflection (CWE-470)
- Reflection API with user-controlled class/method names
- Class.forName(userInput), Method.invoke(userInput)
- Check for: getClass().getMethod(userInput), newInstance() with untrusted data

### 14. Vulnerable Dependencies (CWE-1104)
- Known CVEs in third-party libraries
- Log4j, Spring, Jackson, Struts, XStream, Apache Commons, Shiro, WebLogic, ActiveMQ, Fastjson, SnakeYAML
- Check: pom.xml, build.gradle, version declarations
- Tools: OWASP Dependency-Check, Snyk, OSV-Scanner

## ADDITIONAL CHECKS

### Authentication & Session
- Weak session ID generation, insufficient length
- JWT validation: alg=none, missing signature verification
- OAuth/OIDC misconfiguration
- Password reset token predictability

### Error Handling & Logging
- Sensitive data logged (PII, credentials, tokens)
- Log injection: user input in log messages
- Stack traces exposed to users

### File Upload
- Unrestricted file upload, missing MIME validation
- Path traversal in upload destination
- Executable file acceptance

### Race Conditions & Concurrency
- TOCTOU in file operations
- Unsynchronized shared mutable state
- Double-checked locking without volatile

### Spring-Specific (if Spring Boot/Spring Security present)
- Actuator endpoints exposed: /actuator/env, /actuator/heapdump, /actuator/beans
- Management port not separated
- Spring4Shell (CVE-2022-22965) data binding patterns
- Spring Cloud Function SpEL (CVE-2022-22963)
- Spring Security authorization bypass: CVE-2022-22978, CVE-2023-20860, CVE-2024-38821
- SAML/XSS: CVE-2026-41003
</scope>

<methodology>
Step 1: Map Attack Surface
- Enumerate all inputs: HTTP params, headers, cookies, file uploads, message queues, cache, environment
- Identify trust boundaries: where untrusted data enters, where it's validated, where it reaches sinks
- Note data flows from source (input) to sink (dangerous operation)

Step 2: Source-to-Sink Taint Analysis
- Trace each untrusted input to its usage
- Identify sinks: deserialization, SQL, command exec, file I/O, reflection, template engines
- Check if validation/sanitization exists between source and sink
- Report exact file, line, and function for both source and sink

Step 3: Pattern Matching
- Search for known vulnerable patterns in code
- Check for anti-patterns: string concatenation in queries, missing security config, hardcoded secrets
- Cross-reference with SAST rule IDs: java-deserialization-vulnerability, java-sql-injection, java-xxe-attack, etc.

Step 4: Dependency Analysis
- Extract dependency versions from pom.xml, build.gradle
- Cross-reference with known CVE databases (NVD, OSV)
- Flag outdated libraries with known vulnerabilities

Step 5: Rate and Prioritize
- Severity: Critical / High / Medium / Low / Informational
- Exploitability: Easy / Moderate / Difficult
- Impact: Confidentiality / Integrity / Availability
- Confidence: High / Medium / Low
</methodology>

<output_format>
For each finding, provide:

### Finding [N]: [Vulnerability Type]
- **CWE**: [CWE-ID]
- **OWASP Top 10**: [A0X:2021 Category]
- **Severity**: Critical / High / Medium / Low
- **File**: [file path]
- **Line(s)**: [line numbers]
- **Function/Method**: [method name]

**Description**:
[Clear explanation of the vulnerability in 2-3 sentences]

**Vulnerable Code**:
```java
[exact code snippet]
```

**Attack Scenario**:
[How an attacker could exploit this, step by step]

**Evidence**:
- Source: [where untrusted input enters]
- Sink: [dangerous operation reached]
- Missing Control: [what validation/encoding is absent]

**Remediation**:
```java
[secure fix code]
```

**Reference**:
- [CVE IDs if applicable]
- [SAST Rule ID: e.g., java-xxx]
- [OWASP/CWE links]

---

### Summary Table

| # | Type | CWE | Severity | File | Line | CVE | Exploitability |
|---|------|-----|----------|------|------|-----|----------------|
| 1 | ... | ... | ... | ... | ... | ... | ... |

### Dependency Vulnerabilities

| Dependency | Current Version | Vulnerable? | CVE | Fixed Version |
|------------|----------------|-------------|-----|---------------|
| ... | ... | ... | ... | ... |

### Overall Risk Assessment
- **Total Findings**: [N]
- **Critical**: [N], **High**: [N], **Medium**: [N], **Low**: [N]
- **Highest Risk Area**: [area]
- **Recommended Priority**: [what to fix first]
</output_format>

<constraints>
- Do NOT report false positives without evidence
- Do NOT flag safe patterns (parameterized queries, proper encoding, allowlisted inputs)
- If no vulnerability found, state "Not vulnerable" with reasoning
- Provide exact code locations, not general advice
- For each finding, include a working PoC concept (not full exploit)
- If Spring Boot detected, apply Spring-specific checks
- If Maven/Gradle files present, analyze dependencies
- Focus on exploitability, not theoretical risk
- Reference specific CVE IDs when pattern matches known vulnerabilities
</constraints>

<input>
[PASTE YOUR JAVA CODE HERE]
</input>
```


### PROMPT 2: CHUYÊN SÂU DESERIALIZATION


```text
<role>
You are a Java deserialization vulnerability expert. You have deep knowledge of gadget chains, ysoserial payloads, and deserialization exploitation.
</role>

<task>
Perform a focused deserialization security audit on the provided Java code.

Check for ALL of the following:

1. Native Java Deserialization
   - ObjectInputStream.readObject(), readUnshared()
   - ObjectInputStream without ObjectInputFilter
   - readResolve(), readExternal(), readObject(ObjectInputStream)

2. Third-Party Deserialization
   - Jackson: enableDefaultTyping(), activateDefaultTyping(), @JsonTypeInfo with Id.CLASS
   - Fastjson: autoType enabled, @type in JSON, parseObject() with untrusted input
   - XStream: fromXML() with untrusted input
   - SnakeYAML: new Yaml().load() (unsafe), loadAs() with untrusted input
   - Hessian, Kryo, XMLDecoder

3. Gadget Chain Entry Points
   - Check classpath for: Apache Commons Collections (3.x, 4.x), CommonsBeanutils, Spring (beans, context), Groovy, Hibernate, ROME, Clojure, BeanShell, Jython, MyFaces
   - Look for invoker patterns: InvokerTransformer, InstantiateTransformer, MethodInvokingFactoryBean
   - Check for: PriorityQueue + Comparator, TemplatesImpl, JdbcRowSetImpl

4. JNDI Deserialization
   - JNDI lookup in deserialization context
   - RMI, LDAP references
   - Log4Shell patterns

5. Deserialization Endpoints
   - HTTP endpoints accepting serialized data (Content-Type: application/x-java-serialized-object)
   - Message queue consumers (JMS, AMQP) deserializing messages
   - Cache deserialization (Redis, Hazelcast)
   - Session deserialization

For each finding, provide:
- Exact code location
- Gadget chain that could be triggered (if identifiable)
- ysoserial payload that would exploit it (concept)
- ObjectInputFilter fix with allowlist
- Alternative: migrate to JSON with explicit schema
```

### PROMPT 3: CHUYÊN SÂU SPRING SECURITY


```text
<role>
You are a Spring Security expert with deep knowledge of CVE-2022-22965 (Spring4Shell), CVE-2022-22963, CVE-2022-22978, and Spring Security authorization bypass vulnerabilities.
</role>

<task>
Audit the provided Spring Boot / Spring Security code for vulnerabilities.

Check ALL of the following:

1. Spring4Shell (CVE-2022-22965)
   - Data binding to non-basic types
   - WebDataBinder with unvalidated input
   - POJO parameter binding: @ModelAttribute, @RequestBody

2. Spring Cloud Function SpEL (CVE-2022-22963)
   - Routing expression injection
   - spring.cloud.function.routing-expression header
   - SpEL in function routing

3. Spring Security Bypass
   - Authorization annotations on interface vs implementation
   - Regex matchers with '.' in pattern
   - antMatchers ordering issues
   - CVE-2022-22978, CVE-2023-20860, CVE-2024-38821

4. Actuator Exposure
   - /actuator/env, /actuator/heapdump, /actuator/beans exposed
   - Management port not separated
   - CVE-2026-40976: anonymous access to actuator endpoints

5. SpEL Injection
   - SpelExpressionParser with user input
   - StandardEvaluationContext vs SimpleEvaluationContext
   - @Value with user-controlled expressions

6. Mass Assignment
   - @ModelAttribute binding to entity
   - POJO fields without @JsonIgnore
   - Spring Data binding to sensitive fields

7. CSRF & CORS
   - CSRF disabled on session-based apps
   - CORS allowedOrigins("*") with credentials
   - Cookie SameSite configuration

For each finding, provide CVE reference if applicable, exploitation scenario, and secure configuration.
```


### PROMPT 4: AUDIT DEPENDENCY — TÌM CVE TRONG THƯ VIỆN


```text
<role>
You are a Software Composition Analysis (SCA) expert. You identify known CVEs in third-party Java dependencies.
</role>

<task>
Analyze the provided pom.xml, build.gradle, or dependency list for known vulnerabilities.

Check ALL dependencies for:

1. Log4j / Log4j2
   - Version < 2.17.0: CVE-2021-44228, CVE-2021-45046, CVE-2021-44832
   - Version < 1.2.28: CVE-2019-17571

2. Spring Framework / Spring Boot
   - Spring4Shell: CVE-2022-22965
   - Spring Cloud Function: CVE-2022-22963
   - Spring Security: CVE-2022-22978, CVE-2023-20860, CVE-2024-38821
   - Spring Data: CVE-2024-22243, CVE-2024-38816

3. Apache Commons
   - Commons Collections 3.x: CVE-2015-6420 (deserialization)
   - Commons Collections 4.x: CVE-2015-7501
   - Commons BeanUtils: CVE-2014-0114

4. Jackson Databind
   - CVE-2020-36518, CVE-2020-25649, CVE-2019-12384
   - enableDefaultTyping() usage

5. Fastjson
   - CVE-2022-25845, CVE-2020-28007, CVE-2019-10172

6. Struts2
   - CVE-2017-5638, CVE-2018-11776, CVE-2023-50164

7. XStream
   - CVE-2021-21351, CVE-2021-21346, CVE-2021-29505

8. SnakeYAML
   - CVE-2022-1471, CVE-2022-38752

9. Apache Shiro
   - CVE-2020-1957, CVE-2020-11989

10. Other
    - Netty, Undertow, Tomcat, Jetty, Hibernate, MyBatis, Guava, Gson
    - Check NVD, OSV, GitHub Advisory Database

For each dependency:
| Dependency | Current Version | CVE | Severity | Fixed Version | Exploitability |
```

### PROMPT 5: QUICK SCAN — CODE REVIEW NHANH

```text
Perform a quick security scan on the following Java code.

Check for these high-impact patterns ONLY:

1. `ObjectInputStream` usage without filter
2. `readObject()` on untrusted data
3. String concatenation in SQL queries
4. `Runtime.exec()` or `ProcessBuilder` with user input
5. `DocumentBuilderFactory.newInstance()` without `disallow-doctype-decl`
6. `SpelExpressionParser` with user input
7. `Ognl.getValue()` with user input
8. `InitialContext.lookup()` with user input
9. `new File()` or `Paths.get()` with user parameter
10. `URL` or `HttpClient` with user-controlled target
11. Hardcoded secrets (password, token, key)
12. `MessageDigest.getInstance("MD5")` or `"SHA-1"`
13. `Cipher.getInstance("DES")` or `"AES/ECB"`
14. `Random` instead of `SecureRandom` for tokens
15. Spring Security: missing `@PreAuthorize` on sensitive endpoints
16. `enableDefaultTyping()` or `activateDefaultTyping()` in Jackson
17. `autoType` enabled in Fastjson
18. `@JsonTypeInfo(use = Id.CLASS)`
19. Log4j version < 2.17.0
20. Spring Boot Actuator endpoints exposed

For each match:
- File, line, code snippet
- CWE, severity, remediation
- If no match: "No high-impact pattern found in [file]"
```


## 🛠️ CÁCH DÙNG VỚI CÁC AI AGENT

### 1. Cursor / GitHub Copilot Chat

Mở file Java, chọn `@workspace`, paste prompt, sau đó thêm code. AI sẽ trả về báo cáo theo format trên.

### 2. Claude Code / Claude Projects

Tạo một Project mới, upload toàn bộ codebase Java. Paste prompt vào conversation đầu tiên, sau đó yêu cầu: "Audit toàn bộ project theo prompt trên."

### 3. ChatGPT / Gemini

Paste prompt, sau đó paste code. Với codebase lớn, chia nhỏ theo file hoặc module.

### 4. Kết hợp với SAST tools

Sau khi AI trả kết quả, chạy thêm các tool sau để đối chiếu:

| Tool | Mục đích | Cách chạy |
|------|----------|-----------|
| **Semgrep** | SAST rules cho Java | `semgrep --config=atlassian-sast-ruleset/sast-rules/ src/` |
| **SpotBugs + FindSecBugs** | Bytecode analysis | `mvn spotbugs:check` |
| **OWASP Dependency-Check** | SCA cho dependencies | `mvn org.owasp:dependency-check-maven:check` |
| **CodeQL** | Semantic code analysis | Tạo database rồi query |
| **Trivy** | Container + dependency scan | `trivy fs --security-checks vuln .` |

### 5. Lưu ý quan trọng

- **AI agent không thay thế SAST tool.** Nó giỏi phát hiện logic flaw, pattern phức tạp, nhưng có thể bỏ sót CVE trong dependencies. Luôn chạy song song SCA tool.
- **Kiểm tra false positive.** AI có thể flag pattern an toàn là nguy hiểm. Luôn verify thủ công trước khi báo cáo CVE.
- **Cập nhật prompt định kỳ.** CVE mới xuất hiện liên tục (Log4Shell, Spring4Shell, React2Shell...). Thêm vào prompt khi có CVE mới trong hệ sinh thái Java.
- **Với codebase lớn:** chia nhỏ theo module, audit từng phần, sau đó tổng hợp. Đừng paste toàn bộ project vào một prompt.


## 💡 MẸO TỐI ƯU PROMPT

1. **Thêm context cụ thể:** Nếu project dùng Spring Boot 3.x, thêm "Framework: Spring Boot 3.5, Java 21" vào `<input>`. AI sẽ áp dụng check phù hợp.
2. **Yêu cầu PoC:** Thêm "For each Critical/High finding, provide a working PoC concept" để AI tập trung vào exploitability.
3. **Giới hạn scope:** Nếu chỉ muốn check deserialization, dùng Prompt 2. Nếu muốn check toàn bộ, dùng Prompt 1.
4. **Output dạng JSON:** Nếu muốn tích hợp vào pipeline, thêm "Output findings as JSON array with fields: type, cwe, severity, file, line, code, remediation".
5. **So sánh với CVE database:** Thêm "Cross-reference findings with NVD CVE database and report matching CVE IDs."

Bạn có thể dùng bộ prompt này ngay. Nếu muốn tôi tùy chỉnh cho một framework cụ thể (Spring Boot, Struts2, Quarkus) hoặc một loại lỗ hổng cụ thể (chỉ deserialization, chỉ SQLi), hãy cho tôi biết.