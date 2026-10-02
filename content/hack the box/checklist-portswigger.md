---
title: "checklist-portswigger"
---

# Checklist vá lỗ hổng PortSwigger để phỏng vấn - thực tế ~23% không phải 70%

> Scan ngày 2026-10-01 từ thư mục `portswigger/` của bạn.
> Bạn có 7/30 topics, trong đó 3 tạm ổn, 4 rất mỏng, thiếu trắng 23 topics.
> Quy tắc ôn mỗi mục: Định nghĩa 1 câu -> Detect -> Exploit payload -> Bypass -> Impact -> Fix.

## P0 - Vá ngay, interview hỏi 90% (rớt nếu không biết)

### 1. Authentication - hiện chỉ có brute-force
- [ ] Password-based: username enumeration via response/timing, flawed brute-force protection
- [ ] 2FA bypass: skip step, brute-force OTP, logic flaw `verify` step
- [ ] Stay-logged-in cookie tampering, password reset token leak via Referer, no expiry
- [ ] Session: fixation, không invalidate sau logout/password change
- [ ] Lab làm lại: 14 labs mục Authentication trên portswigger.net
- [ ] Ghi chú hiện tại: `server side vulnerabilities/Authentication vulnerabilities-note.md` -> cần mở rộng gấp 5x

### 2. Access Control + IDOR - hiện chỉ basic `?user_id=1305->1000`
- [ ] Horizontal vs Vertical escalation, phân biệt IDOR vs BOLA vs BAC
- [ ] Unprotected functionality, method-based bypass GET vs POST, multi-step bypass
- [ ] URL-matching bypass: `/admin`, `/ADMIN`, `/admin/`, `/..;/admin`, `?admin=true` cookie
- [ ] Lab làm lại: 13 labs Access Control
- [ ] Ghi chú hiện tại: `IDOR/IDOR.md` + `server side vulnerabilities/access control.md` -> thiếu lab thực tế

### 3. JWT + OAuth - hiện trắng hoàn toàn, CV lại ghi Auth Bypass
- [ ] JWT: alg=none, RS256->HS256 confusion, weak secret brute-force, kid injection LFI/SQLi
- [ ] OAuth: redirect_uri bypass, thiếu state -> CSRF, leak code/token qua Referer
- [ ] Lab: 8 labs JWT + 6 labs OAuth

### 4. XXE - trắng hoàn toàn, CV ghi có
- [ ] Classic `<!ENTITY xxe SYSTEM "file:///etc/passwd">`, XXE -> SSRF
- [ ] Blind XXE OOB via Collaborator, error-based
- [ ] Fix: disable DTD/external entity
- [ ] Lab: 9 labs XXE

### 5. File Upload / Path Traversal / Command Injection - hiện mỗi cái 1 file mỏng
- [ ] File Upload: double ext `.php.jpg`, `%00`, MIME spoof, magic bytes, `.htaccess`, polyglot
- [ ] Path Traversal: `../../../`, encode `%2e%2e`, double encode, absolute path, null byte
- [ ] Command Injection: `; | & $() backtick`, blind via time-delay `sleep 10` + OOB DNS
- [ ] Lab: 7 + 6 + 5 labs
- [ ] File hiện tại: `server side vulnerabilities/file upload.md`, `path traversal.md`, `injection command.md`

## P1 - Hay hỏi để phân loại Junior vs Intern

- [ ] Business Logic - trắng: price tampering, negative quantity, workflow skip step, coupon reuse
- [ ] Information Disclosure - trắng: `.git`, `.bak`, verbose error, robots.txt, headers
- [ ] SSRF củng cố: cloud metadata `169.254.169.254`, bypass via decimal/octal/hex IP, DNS rebinding, redirect
- [ ] SQLi củng cố: OOB exfil, filter bypass WAF, 2nd-order - hiện có UNION/Blind/Error ở `SQL injection/`
- [ ] CSRF củng cố: Referer validation bypass 2 labs còn thiếu - hiện có 9/12 labs ở `CSRF/`
- [ ] CORS củng cố: null origin, trusted insecure protocol - hiện chỉ có `bai1- cors.md`
- [ ] SSTI củng cố: Jinja2 vs Twig `{{7*'7'}} -> 49 vs 7777777`, RCE payload - hiện chỉ có `server side template injection.md`
- [ ] Clickjacking - trắng 5 labs: iframe, X-Frame-Options, CSP frame-ancestors
- [ ] DOM-based riêng - trắng 7 labs: source/sink `location.search -> innerHTML/document.write`, jQuery sink
- [ ] WebSockets - trắng 3 labs: Cross-Site WebSocket Hijacking

## P2 - Để nói chuyện Senior / Product company

- [ ] HTTP Request Smuggling - 22 labs: CL.TE vs TE.CL, front-end/back-end desync
- [ ] Web Cache Poisoning - 13 labs: cache-key, unkeyed header `X-Forwarded-Host`
- [ ] Web Cache Deception - 5 labs
- [ ] HTTP Host Header - 7 labs: password reset poisoning, routing SSRF
- [ ] Insecure Deserialization - 10 labs: PHP object injection, Java gadget chain
- [ ] Prototype Pollution - 10 labs
- [ ] GraphQL - 5 labs: introspection, batching brute-force
- [ ] NoSQL Injection - 4 labs: Mongo `$ne`, `$regex` auth bypass
- [ ] API Testing - 5 labs: mass assignment, versioning
- [ ] Race Conditions - 6 labs: Turbo Intruder double-spend
- [ ] Web LLM Attacks - 7 labs mới
- [ ] Essential Skills - 2 labs

## Sửa CV ngay

- [ ] Xóa `70% portswigger`, thay bằng: `PortSwigger: XSS, CSRF, SSRF, SQLi (UNION/Blind/Error), IDOR basics`
- [ ] Mỗi keyword trên CV phải viết được: Definition -> How it works -> Detection -> Exploitation -> Impact -> Mitigation -> Real lab đã làm
- [ ] Chuẩn bị 2 câu chuyện STAR từ PTIT CTF + 1 finding từ intern để kể 3 phút

## Tiến độ
- Tổng: 7/30 -> mục tiêu phỏng vấn an toàn: 15/30 (xong P0+P1 cơ bản)
- Ngày bắt đầu:
- Ngày mock interview:
