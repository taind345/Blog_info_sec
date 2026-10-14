---
title: "note-dung AI để tìm enpoint"
---

- [ ] katana
- [ ] burp

- [ ] liệt kê enpoint ẩn
- [ ] clone mã js về và đọc ?
- [ ] check list lỗ hổng 

![[Pasted image 20260929175735.png]]
=> katana từ /trangchu nó giúp ta tìm được các enpoint có thể đi tới bằng cách bấm UI
	-> do cơ chế của nó, đọc source code-> tìm href .Xong đi vô từng href đó đọc source, tìm href tiếp
		-> đệ quy như vậy sẽ tìm được các enpoint mà ta có thể đi tới bằng cách bấm UI

-Còn với các enpoint ko thể bấm để đi tới được, tức là phải đi tới nó bằng url như ví dụ /post/comment/confirmation?postId=9 (phải POST comment xong mới có 302 dẫn tới) thì Katana bản thường sẽ miss. Đó là lý do phải vừa crawl vừa làm tay.

![[Pasted image 20260929180922.png]]

-Tiếp theo là đọc source code
với mỗi enpoint trả về thì mình dùng cách nào để đọc 
- [ ] đọc html
- [ ] đọc source bằng f12
![[Pasted image 20260929181454.png]]