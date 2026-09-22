---
title: "note-22-9"
---

# 1-intro to pipeline
==>[[Intro to Pipeline Automation]]
![[Pasted image 20260922210933.png]]
- [ ] học về các khái niệm cơ bản trong **pipe line automation**
	- [ ] git leak ==> giityleak
	- [ ] gitlab? => sourcecode + request + ci/cd
	- [ ] ci/cd=> continus intergration, continus delivery
		- [ ] pipeline tiêu chuẩn => sourcecode->build-> test-> deploy
**-dependency**
- [ ] **sdk** => ví dụ chức năng thanh toán của momo=> mình có thể dùng sdk của momo để tích hợp vô luôn cái app của mình mà ko phải build lại từ đầu
- [ ] internal, external dependency 

**-Testing**
- [ ] unit test
- [ ] SAST -static application security testing->sourrce code audit
- [ ] DAST -dynamic application security testing->auto test
-> cái này nằm trong phase testing của pipeline
manual testing có thể phát hiện lỗ hổng logic tốt hơn automatic test
=> còn AI thì sao, liệu nó đến đâu rồi?
- github và git lab có các công cụ phục vụ SAST VAD DAST
	- snyk
	- sonarQube
- [ ] tích hợp qui trính auto test vào pipeline cần lưu ý
	- [ ] điểm tích hợp của tool nằm ở đâu?
	- [ ] Liệu tích hợp auto tets ở chỗ này--> có ảnh hưởng tới hiệu năng của toàn bộ quy trình ko?

**-ci/cd**
- [ ] github build agent
- [ ] gitlab runner
- [ ] build orchesrator:
	- [ ] build agent
- [ ] quy trình ci/cd: trigger-->build orchestrator đọc workflow và ddiều phối tài nguyên--> máy ảo ubuntu được chạy(build agent), máy ảo này kéo source code về, chạy các lệnh để build,test,--> khi các test đều passs--> agent đẩy docker image của app lên docker hub <== [[Intro to Pipeline Automation#CI/CD]]

**-các môi trường để đưa ứng dụng lên:**
- [ ] dev-->uat-->PreProd->Prod-> Dr/Ha
	--> với thằng DR/Ha nó là cái máy chủ song song, vừa giúp điều phối truy cập, vừa giúp backup khi có sự cố
- [ ] môi trường blue-green-> blue chạy version hiện tại, blue chạy mới hơn.Đại khái là nó sẽ dùng router dể định tuiyeens truy cập tới blue.Khi mà sãn sangf thì nó sẽ định tuyến qua green 
- [ ] canary-> giống với cái trên nhưng nó điều hướng lưu lượng theo số its như kiểu 10%-->20%->...
- [ ] sự chuyển dichj từ sever vật lý sang server ảo
	- [ ] **vargant** và **terraform**
		- --> vargen file , vargent up
		- --> main tf , terraform apply
	- [ ] máy ảo docker và kubernet
		- [ ] **docker** thì nó giúp app chạy ngay trên 1 cái máy ảo siêu nhẹ(container), nhờ đó mà nền tảng nào cũng có thể chạy được
		- [ ] còn **kubernet** thì nó giúp quản lý các container, ví dụ khi có đợt sale, nhiều lượng truy cập -> kubernet nó sẽ tự động tăng số lượng container lên, để có thể chịu tải, phân phối lưu lượng tới các container khác nhau
	- [ ] infratructure as Code -> kiến tréc hạ tầng được lưu trữ trong file , lưu trên git--> khi cần nâng cấp hay sửa đôỉ -> chỉ cần pull request cái file cấu hình--> Lead thấy ok thì mege code

# 2-container
**==>** [[Intro to Containerisation]]
	![[Pasted image 20260922213725.png]]-cái container là một cái máy ảo siêu nhẹ để chạy ứng dụng
	source code+môi trường--> build thành image--> chạy cái image này ta sẽ chạy dược ứng dụng( là app chạy trên container)

**-docker giúp chạy các application bên phía server side, còn navtive app thì giúp chạy bên phía client side.**
- [ ]  do đặc tính của thằng docker là linh hoạt, nhưng mà nó rất nặng==> phù hợp với môi trường server, nơi dư thừa tài nguyên nhưng cần sự linh hoạt ít lỗi--> docker sinh ra làm viecj này
- [ ] còn về phía sever side, như một cái webapp hiển thị trên trình duyệt người dùng hay app banking, thì tài nguyên hạn chế, ta cần sử dụng các ngôn ngữ native để xây dựng app--> sau đó chuyển các tác vụ phức tạp về phía server

**-tính năng của docker**
- [ ] **đóng gói** và **isolation**(cô lập)
	- [ ] tận dụng **namespace** trong kernel giúp isolation với các theo chiều ngang giữa các container khác nhau==> chung namespace thì mới tương tác được với nhau
- [ ] một hệ thống có nhiều dependency khác nhau thì cần các container khác nhau để chạy
- [ ] ==> định nghĩa chuẩn
> [!NOTE]
> ==>Container là một tiến trình (process) được cô lập, dùng chung kernel với hệ điều hành mẹ và được đóng gói sẵn toàn bộ code cùng thư viện cần thiết để chạy.
> - **Máy ảo (VM) cô lập ở tầng PHẦN CỨNG:** Hypervisor (bộ ảo hóa) đóng giả làm một cỗ máy vật lý gồm RAM ảo, CPU ảo, ổ cứng ảo. Máy ảo cài một hệ điều hành hoàn chỉnh đè lên đống phần cứng giả lập đó. Hệ điều hành này có Kernel riêng, quản lý tài nguyên độc lập và **thực sự được cô lập khỏi hệ điều hành mẹ**.
>     
> - **Container chỉ cô lập ở tầng TIẾN TRÌNH (ỨNG DỤNG):** Container hoàn toàn **dùng chung hệ điều hành (chính xác là dùng chung Kernel) với máy mẹ**. Nó không có phần cứng ảo, không có driver ảo, và không có Kernel riêng.

=> về mặt trải nghiệm dùng thì docker đúng là dùng như một cái máy ảo siêu nhẹ thật , tại vì nó cô lập với hệ điều hành
-> nhưng về mặt technical, nó là một tiến trình  chứ ko phải máy ảo, cái tiến trình này cần gọi thằng kerel để cấp phát phần cứng,, nhưng cái tiến trình này nó cũng cô lập khỏi hệ điều hành như thằng máy ảo, nó ko nhìn thấy được
- [ ] các container ko tương tác trực tiếp vs  máy tính mà nó tương tác qua thằng **containerisation engine**--> ở đây là docker engine
- [ ] docker engine cũng giúp các container giao tiếp với nhau -> ví dụ container chạy backend kết nối với container chạy database
	- [ ] file docker-compose.yaml --> docker