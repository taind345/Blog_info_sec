---
title: "note-21-9"
---

- [ ] MD5 produces 32 hexadecimal characters, SHA-1 produces 40, and SHA-256 produces 64.**=> nhận biết mấy thằng hash này qua độ dài**
- [ ] liệu có thể tận dụng open redirect trong login, kiểu như![[Pasted image 20260921124707.png|506]]
- [ ] ap dung ssrf với các api cho phép nhập file
- [ ] dùng sql map với các file request từ burp suite.trường search đôi khi chứa sql injection


- [ ] gặp cổng login
- [ ] đọc robot, và sitemap-> ko cso gì
- [ ] gobuster
	- [ ] đọc /mail/mail.log-> biết được có username là hr và pass nằm ở /config.php
	- [ ] thử truy cập nhưng thất bại
	- [ ] sau đó để ý trong phần api, người ta viết rằng có 1 api là /api/file.php?cv=.....1 url ==> mình thử dùng cách này để ssrf tới config.php==> truy cập được config.php
- [ ] đăng nhập với tư cách hr
- [ ] để ý là có trường seearch==> có khả năng sql injjection
- [ ] dùng sql map đẻ check==> lôi ra được các bảng và là Mysql 
- [ ] check cột và kiểu dữ liệu các cột==> UNION SELECT --> credential của admin==> đăng nhập với tư cách admin và lấy flag
